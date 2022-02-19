const mongoose = require('mongoose')

const LabSehema = new mongoose.Schema({
    Time :{type:'string' , require:true},
    Day :{ type:'string' , require:true},
    LabNumber :{type: 'string' },
    TeacherName :{ type: 'string'},
    TeacherID :{type: 'string'},
    Course :{type: 'string', require:true},
    Subject :{ type:'string', require:true},
    Semester :{ type:'string', require:true},
    Section :{ type:'string', require:true},
    RoomNumber:{ type:'string'},
    RoomNo :{ type:'string'}

});

module.exports= new mongoose.model('Lab', LabSehema)

