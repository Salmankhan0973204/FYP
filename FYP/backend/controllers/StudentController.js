const students = require("../models/Students")
//User Login
exports.UserLogin = (req , res)=>{
    var Data = req.body;
   students.findOne({ID: Data.ID}).then(data=>{
 
     if(data){
      if(data.Password == Data.Password){
        res.status(200).json({message: 'Login Successful!', data:data});
      }
      else{
        res.status(401).json({message: 'Incorrect Password', data: {}});
      }
     }
     else{
      res.status(401).json({message: 'User Not Found', data: {}});
     }
    })
    .catch(err => res.status(401).json({message: 'User not found', data: {}}));
  };
  
  //New User Register
  exports.UserRegister = (req , res)=>{
    var reqBody = req.body;
    
    const User = new students({  //students DB add user
    ID:reqBody.ID,
    Password :reqBody.Password,
    Name : reqBody.Name,
    Semseter :reqBody.Semester,
    Course : reqBody.Course
    });

    User.save().then
      (user => {console.log(user);
        res.status(201).json({
          message: 'User added successfully!',
      
        });
      }
    ).catch(
      (error) => {
        res.status(500).json({
          error: error
        });
      }
    );
    
    
    }
  
//Post student data
exports.studentProfile= (req,res)=>{
  
  //make Url
    const url = req.protocol + '://' + req.get('host');
    if(req.file){
        console.log(req.file);
        req.body.ProfilePic = url+"/uploads/"+req.file.filename;
    }
    students.updateOne({ID: req.body.ID}, req.body)
    .then(result=>{
        res.status(201).json({ message: "update Profile", data: result});
    })
    .catch(
        (error) => {
             res.status(500).json({
                error : error
               })
        })
};

//Get student profile data
exports.getProfile=(req, res)=>{
    students.findOne({ID:req.params.id })
    .then(result=>{
        res.status(200).json({ message:"Done",
            data: result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
}

// StudentList
exports.poststudentList = (req,res)=>{
var Data = req.body;
students.find({Course:Data.Course, Semseter: Data.Semseter}).then(student_data=>{
  res.status(200).json({message:"Students List", data: student_data});

});
}




   

