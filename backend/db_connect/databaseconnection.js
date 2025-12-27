const mongoose=require('mongoose');
exports.databaseconnection= async()=>{
    const user=process.env.MONGO_USER||'nirjalasubedi944@gmail.com';
    const pass=process.env.MONGO_PASS||'nirjala#2233';
    const host = process.env.MONGO_HOST || 'cluster0.zni3nwp.mongodb.net';
    const options = process.env.MONGO_OPTIONS || '?appName=Cluster0';

    const safeuser=encodeURIComponent(user);
    const safepass=encodeURIComponent(pass);
    const dbname='bookLibraryManagement';

    const uri=`mongodb+srv://${safeuser}:${safepass}@${host}/${dbname}${options}`;

    try{
       await  mongoose.connect(uri);
       console.log(`database connection success ${dbname}`);
    }
    catch(err){
        console.error('failed to connect database',err.message);
        throw err;
    }
}