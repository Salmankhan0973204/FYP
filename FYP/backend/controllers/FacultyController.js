const Faculty = require('../models/Faculty')

//Faculty Registration
exports.FacultyRegister = (req, res)=>{

    const newFaculty = new Faculty({
        ID: req.body.ID,
        Name: req.body.Name,
        Email: req.body.Email,
        Specialization: req.body.Specialization,
        Password: req.body.Password
    });

    newFaculty.save().then(data=>{
        res.status(201).json({ message:'Faculty Add Successfully'})
    })
    .catch((error)=>
    {
        res.status(500).json({error:error})
        
      }
    )};

    // Faculty Login
    exports.FacultyLogin = (req,res)=>{
  
      var Data = req.body;
      console.log(Data);
     Faculty.findOne({ID: Data.ID}).then(data=>{
       if(data){
        if(data.Password == Data.Password){
          res.status(200).json({message: 'Login Successful!', data:data});
          console.log("user found")
        }
        else{
          res.status(401).json({message: 'Incorrect Password', data: {}});
        }
       }
       else{
           console.log("not");
          res.status(401).json({message: 'User Not Found', data: {}});
       }
      })
      .catch(err => res.status(401).json({message: 'User not found', data: {}}));
    };
    
    


     //TeacherList
     exports.FacultyList = (req, res)=>{
        Faculty.find().then((data)=>{
        res.status(200).json({message:'Teacherlist', data:data});
        }
         )
         .catch((error)=>{
             res.status(500).json({error:error})

        })}

    //teacher timetale
    exports.getteacherinfo = (req, res)=>{
     console.log("dfsfdsf")
    Faculty.find().then((data)=>
    {console.log(data);
     res.status(200).json({message:'Teacherinfo', data:data});
          }
           )
           .catch((error)=>{
               res.status(500).json({error:error})
  
          })}
  


         
     
     
     
    











    
    