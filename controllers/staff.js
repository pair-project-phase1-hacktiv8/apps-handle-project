const {Manager,Project,Staff,RunningProject} = require('../models')
class Controller{
    
    static login(req,res){
        const{uname,psw} = req.body
        Staff.findAll({
            where:{
                username:uname,
                passw:psw
            }
        })
        .then(data=>{
            if (data.length == 0){
                res.send("Data tidak ditemukan")

            }else {     
                console.log(data[0].id);       
                Project.findAll({
                    include:{
                        model:RunningProject,
                        where:{
                            StaffId :data[0].id
                        }

                    }
                })
                .then(result=>{
                    console.log(data.id);
                    
                    res.render("listjobforstaff",{data:result})
                })
                
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
                Staff.findAll({
                    order:['id']
                })

            .then(staff=>{
            res.render("manager",{data:data,staff:staff})
            
            })
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
        res.render("staffadd")
    }
    static editform(req,res){
        const id = req.params.id
        Staff.findByPk(id)
        .then(data=>{
            // res.send(data)
             res.render('staffedit',{data:data})

        })
        .catch(err=>{
            res.send(err)
        })
    }
    static deleteform(req,res){
        const id = req.params.id
        Staff.destroy({where:{
            id:id
        }})
        .then(result=>{
            res.redirect('/staff')
        })
    }
    static add(req,res){
        const {name,email,username,passw}=req.body
        Staff.create({name:name,email:email,username:username,passw:passw})
        .then(result=>{
            res.redirect('/staff')
        })
    }
    static edit(req,res){
        const id = req.params.id
        const {name,email,username,passw}=req.body
        Staff.update({name:name,email:email,username:username,passw:passw},{
            where:{ id:id}
        })

        .then(result=>{
            res.redirect('/staff')
        })

    }
    
  
}

module.exports = Controller