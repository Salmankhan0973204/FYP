const mongoose = require('mongoose');
const FacultySchema = mongoose.Schema({
    ID:{type:'string', require:true , unique: true},
    Name:{type:'string', require:true},
    Email:{type:'string' , require:true},
    Password:{type:'string', require:true},
    Specialization: { type:'string', require:true}
    
});


module.exports = new mongoose.model('Faculty',FacultySchema);