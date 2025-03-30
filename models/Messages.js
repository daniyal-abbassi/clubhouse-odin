const pool = require('../database/pool');


const Messages = {
    getAllMessages: async()=>{
        try {
            const results = await pool.query('SELECT * FROM messages INNER JOIN users USING(user_id) ORDER BY written_at DESC')
            return results.rows;
        } catch (error) {
            console.error('ERROR IN MESSAGES.getAllMessages: ',error);
            throw error;
        }
    },
    createMessage: async(user_id,text,title)=>{
        try {
            await pool.query('INSERT INTO messages(user_id,text,title) VALUES($1,$2,$3)',[user_id,text,title]);
        } catch (error) {
            console.error('ERROR IN MESSAGES.createMessage: ',error);
            throw error;
        }
    },
}

module.exports=Messages;