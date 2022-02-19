const mongoose = require('mongoose');
const subjectSechma = mongoose.Schema({
    ID :{type:'string' , require:true, },
    Name : { type:'string', require:true},
    CreditHours: { type: 'string', require:true},
    Course:{ type:'string', require:true}

})

module.exports = new mongoose.model("Subject",subjectSechma)