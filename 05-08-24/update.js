const dbConnect = require('./mongodb')

const updateData = async () => {
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:'max 2'},{
            $set:{name:'max pro 5'}
        }
    );
}

updateData();