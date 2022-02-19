const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
    ID :{ type:'string',  require:true, unique: true},
    Email :{ type :'string', require:true },
    Name: { type: 'string', require:true},
    DOB: { type:'string', require:true},
    Semseter :{type:'string', require:true},
    Phone: {type: 'string', require:true},
    CNIC: {type: 'string', require:true},
    ProfilePic: {type:'string'},
    Course:{type:'string',require:true},
    Password :{ type : 'string', require : true},
    Subject:[{type: mongoose.Schema.Types.ObjectId,
    ref:"Subject"}]
    

})

module.exports=new mongoose.model('Student',studentSchema)