import mongoose from "mongoose";

export const dbConnection = () =>{
    mongoose.connect(`${process.env.MONGO_URI}`,{dbName :"EventRadheKrishna"})
    .then(()=>{
        console.log("Database Connected")
    })
    .catch((err)=>{
        console.log("Error Connection to Database",err)
    })
}