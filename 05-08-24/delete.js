const dbConnect = require('./mongodb')

const deleteData = async()=>{
    let data = await dbConnect();
    let result = await data.deleteOne({name:'charge'})
    console.warn(result);
    if(result.acknowledged){
        console.log("record deleted");
    }
}

deleteData();