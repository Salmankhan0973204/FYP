const Lab = require('../models/Lab')
//Add lab
exports.Lab = (req, res)=>{
    console.log(req.body)
 const Labdata = new Lab({
     Day : req.body.Day,
     LabNumber: req.body.LabNumber,
     Time : req.body.Time,
     Course : req.body.Course,
     Subject : req.body.Subject,
     TeacherName : req.body.TeacherName,
     Section : req.body.Section,
     Semester : req.body.Semester,
     TeacherID : req.body.TeacherID,
   })
 Labdata.save().then((data)=>{
     console.log(data)
     res.status(200).json({ message :"Data add ", data:data});
 })
 .catch((error)=>{
     res.status(500).json({error:error})

 })}

 //Get LabList
 exports.LabList = (req, res)=>{
     var Data = req.body;
     Lab.find({LabNumber:Data.LabNumber}).then((LabList)=>{
         res.status(200).json({message:"LAb List", data: LabList})
     })

 }
 //Add room 
 exports.Room = (req, res)=>{
 console.log(req.body)
 const Roomdata = new Lab({
     Day : req.body.Day,
     RoomNumber: req.body.RoomNumber,
     Time : req.body.Time,
     Course : req.body.Course,
     Subject : req.body.Subject,
     TeacherName : req.body.TeacherName,
     Section : req.body.Section,
     Semester : req.body.Semester
   })
 
 Roomdata.save().then((data)=>{
     console.log(data)
     res.status(200).json({ message :"Data add ", data:data});
 })
 .catch((error)=>{
     res.status(500).json({error:error})
})}

 //Room List
 exports.RoomList = (req, res)=>{
    var Data = req.body;
    Lab.find({RoomNumber:Data.RoomNumber}).then((Roomlist)=>{
        res.status(200).json({message:"Room List", data : Roomlist});
    }).catch((error)=>{
        res.status(500).json({error:error})
    })}

//Add TimeTable
exports.TimeTable = (req, res)=>{
 const Timetable = new Lab({
     Day : req.body.Day,
     Time : req.body.Time,
     TeacherName : req.body.TeacherName,
     Subject : req.body.Subject,
     Course : req.body.Course,
     Semester : req.body.Semester,
     Section : req.body.Section,
     RoomNo : req.body.RoomNo,
     TeacherID : req.body.TeacherID,
   })
 Timetable.save().then((data)=>{
     console.log(data)
     res.status(200).json({ message :"Data add ", data:data});
 })
 .catch((error)=>{
     res.status(500).json({error:error})
})}


 // Get TimeTable
 exports.TimeTableList = (req, res)=>{
    var Data = req.body;
    Lab.find({Course:Data.Course, Semester: Data.Semester}).then(timetable=>{
      res.status(200).json({message:"TimeTable List", data: timetable});
    });
    }

 // TimeTable delete single value
 
 exports.TimeTableListDelete = (req, res)=>{
    var Data = req.body;
    Lab.findByIdAndRemove(Data._id).then(data=>{
      res.status(200).json({message:"Value Deleted"});
    });
    }


//Faculty Timetable
exports.Ttimetable = (req, res)=>{
    var Data = req.body;
    console.log(Data)
    Lab.find({TeacherID: Data.id}).then( Data=> {
        res.status(200).json({message:"Ftimetable", data: Data})
    })}

// RoomTimeTable delete single value
  exports.RoomListDelete = (req, res)=>{
    var Data = req.body;
    Lab.findByIdAndRemove(Data._id).then(data=>{
      res.status(200).json({message:"Value Deleted"});
    })
    }

// LabTimeTable delete single value
exports.LabListDelete = (req, res)=>{
   var Data = req.body;
   Lab.findByIdAndRemove(Data._id).then(data=>{
     res.status(200).json({message:"Value Deleted"});
   })
   }
   
// Edit timetable
exports.timetableEdit = (req, res)=>{
    var Data = req.body;
    Lab.findOne({_id: Data.id}).then( ress=> {
        res.status(200).json({message:"Timetable Edit", data: ress})
    })

}

//Edit Lab timetable
exports.LabEdit= (req, res)=>{
    var Data = req.body;
    console.log(Data.id)
    Lab.findOne({_id: Data.id}).then( ress=> {
        res.status(200).json({message:"Lab Edit", data: ress})
    })}

//Edit Room Timetable
 exports.editRoomtimeTable= (req, res)=>{
    var Data = req.body;
    console.log(Data.id)
    Lab.findOne({_id: Data.id}).then( ress=> {
         res.status(200).json({message:"Lab Edit", data: ress})
        })}


// Edit and save timetable
exports.timetableEditSave = (req, res)=>{
    var Data = req.body.values;
    Lab.findOneAndUpdate({_id: req.body._id}, Data, {useFindAndModify: false}).then( ress=> {
        console.log(ress);
        res.status(200).json({message:"Ftimetable", data: ress})
    })}

    // Edit and save Lab timetable
exports.editLabSave = (req, res)=>{
    var Data = req.body.values;
    Lab.findOneAndUpdate({_id: req.body._id}, Data, {useFindAndModify: false}).then( ress=> {
        console.log(ress);
        res.status(200).json({message:"Save Lab", data: ress})
    })}

// Edit and save Room timetable
 exports.editRoomTimetableSave = (req, res)=>{
   var Data = req.body.values;
   Lab.findOneAndUpdate({_id: req.body._id}, Data, {useFindAndModify: false}).then( ress=> {
        console.log(ress);
        res.status(200).json({message:"Save Lab", data: ress})
        })}





 
