const Task = require("../models/task") ;


//get all tasks 
module.exports.getAllTasks = async (req,res)=>{
    try {
        let allTasks = await Task.find({})
        return res.json({
            message:"all task request succesfull",
            allTasks:allTasks
        });
    } catch (error) {
        console.log("error",error);
        return res.json({
            error:error
        })
    }
}



//task details
module.exports.taskDetails = async (req,res)=>{
    try {
        let task = await Task.findById({_id:req.params.id});
        return res.json({
            message:"succesfully got the details",
            task:task
        });
    } catch (error) {
        console.log("error",error)
        return res.json({
            error:error
        })
    }
}



//creating Tasks
module.exports.createTask = async (req,res)=>{
    const {title,description} = req.body ;
    try {
        let newTask = await Task.create({
            title,
            description,
            status:"incomplete"
        });
        return res.json({
            message:"successfully created",
            task:newTask
        });
    } catch (error) {
        console.log("error",error)
        return res.json({
            error:error
        })
    }
}

// delete task 
module.exports.deleteTask = async (req,res)=>{

    try {
        let task = await Task.findByIdAndDelete({_id:req.params.id})
        return res.json({
            message:"task deleted succesfully",
        });
    } catch (error) {
        console.log("error",error);
        return res.json({
            error:error
        })
    }
}



//update Task
module.exports.updateTask = async (req, res) => {
    try {
        const { status } = req.body;
        let task = await Task.findOneAndUpdate(
            { "_id": req.params.id },
            { $set: { status } },
            { new: true } // returns the updated task
        );
        if (!task) {
            return res.status(404).json({ message: "task not found" });
        }
        return res.json({
            message: "task updated successfully",
            task,
        });
    } catch (error) {
        console.log("error", error);
        return res.status(500).json({
            error: error.message,
        });
    }
};


