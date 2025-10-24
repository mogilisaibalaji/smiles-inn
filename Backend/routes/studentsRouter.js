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

studentsRouter.put("/update" ,(req,res)=>{

});

studentsRouter.delete("/delete" , (req,res)=>{

});



module.exports = studentsRouter;