exports.handler = async(event, context) => {
    // real application you would replace this with database
    const guides = [
        { title : "Apex Legends", author : "Respawn" },
        { title : "Call of Duty", author : "BlackOps" },
        { title : "Mario Kart Shortcuts", author : "luigi" },
    ]

    if (context.clientContext.user) {
        return {
            statusCode: 200, 
            body: JSON.stringify(guides)
    
        }
    }

   return {
       status: 401, 
       body: JSON.stringify({ message : "must be logged in to view" })
   }
}