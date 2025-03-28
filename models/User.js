const { use } = require('passport');
const pool = require('../database/pool');


const User = {
    addToUsers: async(fullname,username,password) => {
        try {
            await pool.query('INSERT INTO users(fullname,username,password) VALUES($1,$2,$3)',[fullname,username,password]);
            
        } catch (error) {
            console.error(`ERROR IN USER.addToUsers model : ${error}`);
            throw error;
        }

    },
    getAllUsers: async()=>{
        try {
            const results = await pool.query('SELECT * FROM users');
            return results.rows;
        } catch (error) {
            console.error(`ERROR IN USER.getAllUsers model: ${error}`);
            throw error;
        }
    },
}


module.exports=User;