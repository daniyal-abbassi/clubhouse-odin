const pool = require('../database/pool');


const Messages = {
    getAllMessages: async()=>{
        try {
            const results = await pool.query('SELECT * FROM messages')
            return results.rows;
        } catch (error) {
            console.error('ERROR IN MESSAGES.getAllMessages: ',error);
            throw error;
        }
    },
    
}

module.exports=Messages;