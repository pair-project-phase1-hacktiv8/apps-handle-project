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
                // console.log(data[0].id);       
                // Project.findAll({
                //     include:{
                //         model:RunningProject,
                //         where:{
                //             StaffId :data[0].id
                //         }
                //     },
                //     include:{
                //         model:Manager,
                //     }
                // })
                // .then(result=>{
                //     // res.send(result);
                res.redirect("/staff/project/"+data[0].id)
                    
                    // res.redirect("listjobforstaff",{data:result})
                // })
                
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


    static showallstaff(req,res){
       const id = req.params.id  
       console.log(id);
          
                // Project.findAll({
                //     include:[{
                //         model:RunningProject,
                //         where:{
                //             StaffId :id
                //         }                        
                //      }],
                //      include:[{
                //          model:Manager
                //      }]
                // })
                RunningProject.findAll({
                    where:{
                        StaffId :id
                    },
                    include:{
                        model:Project,                        
                        include:{
                            model:Manager
                        }                        
                     }
                })


                .then(result=>{
                    // res.send(result);
                    
                    res.render("listjobforstaff",{data:result})
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