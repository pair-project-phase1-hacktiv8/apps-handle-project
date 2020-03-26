const nodemailer = require('nodemailer');
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
       const idman = req.params.idman
        console.log(idproject);
        
        Staff.findAll()
                .then(data=>{
                 data.forEach(element => {
                     element.idpro = idproject
                     element.idman = idman
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
        const idman = req.params.idman
        //  console.log(idproject,idstaff);        
         
         RunningProject.create({ProjectId:idproject,StaffId:idstaff})
         .then(result=>{
             res.redirect('/manager/project/'+idman)
         })
     }
    static editform(req,res){
        const idpro = req.params.id
        const email = req.params.email    
        Project.update({status:true},
            {
                where :{
                    id:idpro
                }
            })
        .then(result=>{

            Project.findByPk(idpro)
            .then (ress=>{
                //Kirim email
                let transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'irwanlearn@gmail.com',
                        pass: 'Irwanlearn1ng'
                    }
                    });
    
                    let mailOptions = {
                    from: 'irwanlearn@gmail.com',
                    to: email,
                    subject: `${ress.projectname} Done`,
                    text: `${ress.projectname} Done`
                    };
    
                    transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                    });

            })
            







            res.send(result)
        })


    }
    // static delete(req,res) {

    // }
  
}

module.exports = Controller