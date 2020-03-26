const {Manager,Project} = require('../models')
class Controller{
    
    
    static showall(req,res){
        Project.findAll({
            order:['id'],
            include:{
                model:Manager,
                require:true
            }
        })
        .then(data=>{
            // res.send(data)
            res.render("project",{data:data})
        })
    }
   

    static addform(req,res){
        Manager.findAll({
            order:['id']
        })
        .then(data=>{
            
            res.render("projectadd",{data:data})
        })
    }
    static editform(req,res){

    }
    static deleteform(req,res){

    }
    static add(req,res){
        const {name,projecttime,manager}=req.body
        console.log(name,projecttime,manager);
        
        Project.create({projectname:name,projecttime:projecttime,ManagerId:manager})
        .then(result=>{
            res.redirect('/project')
        })
    }
    static edit(req,res){

    }
    static delete(req,res) {

    }
  
}

module.exports = Controller