const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require("path")
const app = express();
app.use(cors());

app.use('/uploads', express.static('uploads'));

//file configration
const storage = multer.diskStorage({

  //file folder
  destination: (req, file, cb) => {
    cb(null, "./uploads");

  },
  //file name
  filename: (req, file, cb) => {
    const fileName = Date.now()+"-"+file.originalname.toLowerCase().split(' ').join('-');
    cb(null, fileName)
  }
});
var upload = multer({
  storage: storage
});

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


//mongoDB connection
mongoose.connect("mongodb://localhost:27017/projectDB", { useNewUrlParser:true,useUnifiedTopology: true, useUnifiedTopology: true}).
then(()=>{console.log("Mongo Connected")})
.catch(()=>{console.log("Mongo Connection Failed")});

app.post('/test', ( req , res)=>{
  console.log("test api");
  console.log(req.body)
  res.json(req.body);
})


//Faculty Conroller imported
const FaultyController = require('./backend/controllers/FacultyController')

// Students Controller Imported
const StudentController = require('./backend/controllers/StudentController')

// Subject Controller Imported
const SubjectController = require('./backend/controllers/SubjectController')

// Lab Controller Imported
const LabController = require('./backend/controllers/LabController')


//Student Auth
app.post('/studentLogin', StudentController.UserLogin);
app.post('/studentRegister', StudentController.UserRegister);

//Faculty Auth
app.post('/FacultyRegister', FaultyController.FacultyRegister);
app.post('/FacultyLogin' , FaultyController.FacultyLogin);


//Students profile
app.post('/updatestudentdata', upload.single("image"), StudentController.studentProfile);
app.get('/getstudentdata/:id',StudentController.getProfile);

//Teacher timetable data
app.get('/getteacherinfo',FaultyController.getteacherinfo );

//StudentList data
app.post('/poststudentList', StudentController.poststudentList);

//TeacherList data
app.get('/teacherList', FaultyController.FacultyList)

//Subject data
app.post('/subject', SubjectController.Subject )
app.get('/getsubjects', SubjectController.SubjectList)
app.post('/Subjectdelete', SubjectController.SubjectDelete)
app.post('/editSubject', SubjectController.EditSubject)
app.post('/editSubjectSave', SubjectController.editSubjectSave)

//Lab data
app.post('/lab',LabController.Lab)
app.post('/lablist', LabController.LabList)
app.post('/lablist/delete', LabController.LabListDelete)
app.post('/editLab', LabController.LabEdit)
app.post('/editLabSave', LabController.editLabSave)

// Room Data
app.post('/room', LabController.Room)
app.post('/roomlist', LabController.RoomList)
app.post('/roomlist/delete', LabController.RoomListDelete)
app.post('/editRoomTimetable', LabController.editRoomtimeTable)
app.post('/editRoomTimetableSave', LabController.editRoomTimetableSave)

// Timetable data
app.post('/timetable', LabController.TimeTable)
app.post('/timetablelist', LabController.TimeTableList)
app.post('/timetablelist/delete', LabController.TimeTableListDelete)
app.post ('/edittimetable',LabController.timetableEdit)
app.post ('/edittimetableSave',LabController.timetableEditSave)


// Faculty timetable and lab timetable
app.post ('/teacherid',LabController.Ttimetable)







app.listen(8080, () => {
  console.log(`express running at http://localhost:8080`)
})
