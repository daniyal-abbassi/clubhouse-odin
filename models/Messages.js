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
    createMessage: async(user_id,text)=>{
        try {
            await pool.query('INSERT INTO messages(user_id,text) VALUES($1,$2)');
        } catch (error) {
            console.error('ERROR IN MESSAGES.createMessage: ',error);
            throw error;
        }
    },
}

module.exports=Messages;