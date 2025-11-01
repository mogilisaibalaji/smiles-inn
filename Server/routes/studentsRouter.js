const { Router }  = require("express");
const studentsRouter =  Router();
const { studentsModel} = require("../db");
 
studentsRouter.post("/add" , async function (req,res){
    const {name , age ,phone  , city , dept } = req.body
    
     const newStudent = new studentsModel({
      name,
      age,
      phone,
      city,
      dept,
    });

    await newStudent.save();
    res.json({ message: "Student added successfully" });

     
});

studentsRouter.get("/get" , async function(req,res){
    try {
   
    let students ;

      students = await studentsModel.find();

    res.json(students);
}
    
    catch (err) {
        res.status(500).json({
            error : " Error fetching students "
        });
    }
    
});
studentsRouter.get("/get/:name", async (req, res) => {
  try {
    const { name } = req.params;

    const students = await studentsModel.find({
      name: { $regex: name, $options: "i" },
    });

    if (students.length === 0) {
      return res.status(404).json({ message: "No students found with that name" });
    }

    res.status(200).json(students);  
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ message: "Server error", error });
  }
});



studentsRouter.put("/update/:id", async (req, res) => {
  const {id} = req.params;
  const {name , age ,phone , city , dept } = req.body;

  const updateData = await studentsModel.findByIdAndUpdate(
    id,
    {name , age,phone,city,dept},
    {new : true}
  );

  if(!updateData){
    return res.status(500).json({message : " no update request"});
  }
  else{
   return res.json({
    message : "The data is upadated",
    student : updateData
    });

  }
});



studentsRouter.delete("/delete/:id" , async (req,res)=>{

  const {id} = req.params;

  const deleteData = await studentsModel.findByIdAndDelete(id);
  if (!deleteData){
    return res.status(404).json({
      message : "no Data is deleted "
    })
  }
  else{
    return res.json({
      message : "The student data is deleted"
    })
  };
});




module.exports = studentsRouter;