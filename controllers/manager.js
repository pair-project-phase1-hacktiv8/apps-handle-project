const {Manager,Project,Staff} = require('../models')
class Controller{
    
    static login(req,res){
        const{uname,psw} = req.body
        Manager.findAll({
            where:{
                username:uname,
                passw:psw
            }
        })
        .then(data=>{
            if (data.length == 0){
                res.send("Data tidak ditemukan")

            }else {
                if(uname.toLowerCase() =='admin'){
                    
                    Manager.findAll()
                    .then(result=>{
                        res.render("manager",{data:result})
                    })

                }else{
                    res.redirect("/manager/project/"+data[0].id)
                }
                
            }
        })
        .catch(err =>{
            res.send(err)
        })
    
    }


    static showall(req,res){
        Manager.findAll({
            order:['id']
        })
        .then(data=>{
            res.render("manager",{data:data})
        })
    }


    static showallmanager(req,res){
        const id = req.params.id
        Project.findAll({
            where:{
                ManagerId : id
            },
            order:['id'],
            include:{
                model:Manager,
                require:true
            }
        })
        .then(data=>{
            Staff.findAll({})
            .then(datastaff=>{

                res.render("project",{data:data,staff:datastaff})
            })
            // res.send(data)
        })
    }


    static addform(req,res){
        res.render("manageradd")
    }
    static editform(req,res){
        const id = req.params.id
        Manager.findByPk(id)
        .then(data=>{
            console.log(data.id);
            
            res.render('manageredit',{data:data})

        })
        .catch(err=>{
            res.send(err)
        })
    }
    static deleteform(req,res){
        const id = req.params.id
        Manager.destroy({where:{
            id:id
        }})
        .then(result=>{
            res.redirect('/manager')
        })
    }
    static add(req,res){
        const {name,email,username,passw}=req.body
        Manager.create({name:name,email:email,username:username,passw:passw})
        .then(result=>{
            res.redirect('/manager')
        })
    }
    static edit(req,res){
        const id = req.params.id
        const {name,email,username,passw}=req.body
        Manager.update({name:name,email:email,username:username,passw:passw},{
            where:{ id:id}
        })

        .then(result=>{
            res.redirect('/manager')
        })

    }
    
  
}

module.exports = Controller