const { Router }  = require("express");
const studentsRouter =  Router();
const { studentsModel} = require("../db");
 
studentsRouter.post("/add" , async function (req,res){
    const {name , age ,phone , address , city , dept } = req.body
    
     const newStudent = new studentsModel({
      name,
      age,
      phone,
      address,
      city,
      dept,
    });

    await newStudent.save();
    res.json({ message: "Student added successfully" });

     
});

studentsRouter.get("/get" , async function(req,res){
    try {
    const { name } = req.query;
    let students ;

    if (name){
        students = await studentsModel.find({ name })
    }
    else{
        students = await studentsModel.find();
    }

    res.json(students);
}
    
    catch (err) {
        res.status(500).json({
            error : " Error fetching students "
        });
    }
    
});

studentsRouter.put("/update", async (req, res) => {
  try {
    const { phone, ...updateData } = req.body; 

    if (!phone) {
      return res.status(400).json({ message: "Phone number is required to update student" });
    }

    const updatedStudent = await studentsModel.findOneAndUpdate(
      { phone },          
      updateData,         
      { new: true }       
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student updated successfully", student: updatedStudent });
  } catch (err) {
    res.status(500).json({ error: "Error updating student" });
  }
});



studentsRouter.delete("/delete", async (req, res) => {
  try {
    const { phone } = req.body; 

    if (!phone) {
      return res.status(400).json({ message: "Phone number is required to delete student" });
    }

    const deletedStudent = await studentsModel.findOneAndDelete({ phone });

    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting student" });
  }
});

module.exports = studentsRouter;