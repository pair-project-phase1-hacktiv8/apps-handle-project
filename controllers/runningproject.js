const {Manager,Project,RunningProject,Staff} = require('../models')
class Controller{
    
    
    // static showall(req,res){
    //     Project.findAll({
    //         order:['id'],
    //         include:{
    //             model:Manager,
    //             require:true
    //         }
    //     })
    //     .then(data=>{
    //         // res.send(data)
    //         res.render("project",{data:data})
    //     })
    // }
   

    // static addform(req,res){
    //     Manager.findAll({
    //         order:['id']
    //     })
    //     .then(data=>{
            
    //         res.render("projectadd",{data:data})
    //     })
    // }
    // static editform(req,res){

    // }
    // static deleteform(req,res){

    // }
    static addform(req,res){
       const idproject = req.params.idpro
        console.log(idproject);
        
        Staff.findAll()
                .then(data=>{
                 data.forEach(element => {
                     element.idpro = idproject
                 });

                    res.render("runningproject",{data:data})
        })
        // RunningProject.create({ProjectId:id,StaffId:staffid})
        // .then(result=>{
        //     res.redirect('/manager/project/'+id)
        // })
    }

    static add(req,res){
        const idproject = req.params.idpro
        const idstaff = req.params.idstaff
         console.log(idproject,idstaff);        
         
         RunningProject.create({ProjectId:idproject,StaffId:idstaff})
         .then(result=>{
            //  res.redirect('/manager/project/'+id)
         })
     }
    // static edit(req,res){

    // }
    // static delete(req,res) {

    // }
  
}

module.exports = Controller