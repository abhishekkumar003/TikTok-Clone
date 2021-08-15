const { createClient } = require("@astrajs/collections");
// create an {astra_db} client


const  collection  = 'posts';
exports.handler = async function(event,callback,context)  {
    const astraClient = await createClient({
            astraDatabaseId: process.env.ASTRA_DB_ID,
            astraDatabaseRegion: process.env.ASTRA_DB_REGION,
            username: process.env.ASTRA_DB_USERNAME,
            password: process.env.ASTRA_DB_PASSWORD,
      
        
    });

    console.log(astraClient);
    


const posts = astraClient
.namespace(process.env.ASTRA_DB_KEYSPACE)
.collection(collection)


try {
    await posts.create("a post",{
    title : "my fist post",
    })
    return {
        statusCode: 200
    }
} catch (error) {
    console.log(error)

return {
    statusCode: 500
}}
    
}
