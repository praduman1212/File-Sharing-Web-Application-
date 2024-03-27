import mongoose from 'mongoose';



const dbConnection= async()=>{
     const DB_URL=`mongodb://praduman1212:q5EUEh3ef41XGGvZ@ac-lk3hrti-shard-00-00.0vuxe3x.mongodb.net:27017,ac-lk3hrti-shard-00-01.0vuxe3x.mongodb.net:27017,ac-lk3hrti-shard-00-02.0vuxe3x.mongodb.net:27017/?ssl=true&replicaSet=atlas-d3i5su-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
     try{
     await  mongoose.connect(DB_URL,{useNewUrlParser:true});
      console.log("Database connected successfully");
    }catch(error){
     console.error('Error while connecting',error.message);
    }
}

export default dbConnection;