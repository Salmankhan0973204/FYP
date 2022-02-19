const subject = require('../models/Subject')
// Post Subject List
exports.Subject = (req, res)=>{
    const newSubject = new subject({
        ID:req.body.ID,
        Name: req.body.Name,
        CreditHours : req.body.CreditHours,
        Course: req.body.Course
    })
    newSubject.save().then((data)=>{
        res.status(200).json({massage:'Subject Added'});
    })
    .catch(
        (error) => {
          res.status(500).json({
            error: error
          });
        });}

 // Get Subject List
 exports.SubjectList = (req, res)=>{
    subject.find().then((data)=>
    {
    
        res.status(200).json({message:'Subject List', data:data});
    })
     .catch((error)=>{
         res.status(500).json({error:error})
    })
}


// Get Subject List
exports.GetSubject = (req, res)=>{
    subject.find({ID: req.params.id}).then((data)=>
    {
        console.log(data);
        res.status(200).json({message:'Subject List', data:data});
    })
     .catch((error)=>{
         res.status(500).json({error:error})
    })}

 // Delete Single Data   
exports.SubjectDelete = (req, res)=>{
    var Data = req.body;
    subject.findByIdAndRemove(Data._id).then(data=>{
      res.status(200).json({message:"Value Deleted"});
    })
    }
// Edit Subject
exports.EditSubject= (req, res)=>{
      var Data = req.body;
      subject.findOne({_id: Data.id}).then( ress=> {
      res.status(200).json({message:"Subject Edit", data: ress})
        })}

exports.editSubjectSave = (req, res)=>{
      var Data = req.body.values;
      subject.findOneAndUpdate({_id: req.body._id}, Data, {useFindAndModify: false}).then( ress=> {
          console.log("sdfdsf")
          console.log(ress)
     res.status(200).json({message:"Save Lab", data: ress})
                 })}