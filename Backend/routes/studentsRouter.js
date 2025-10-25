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


studentsRouter.put("/update/:id", async (req, res) => {
  const {id} = req.params;
  const {name , age ,phone , address , city , dept } = req.body;

  

  const updateData = await studentsModel.findByIdAndUpdate(
    id,
    {name , age,phone,address,city,dept},
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
      message : "The student data is deleted",
      student : deleteData
    })
  };
});




module.exports = studentsRouter;