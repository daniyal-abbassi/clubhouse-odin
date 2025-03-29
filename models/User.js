const { use } = require('passport');
const pool = require('../database/pool');


const User = {
    addToUsers: async(fullname,username,password) => {
        try {
            await pool.query('INSERT INTO users(fullname,username,password) VALUES($1,$2,$3) RETURNING *', [fullname,username,password]);
            
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
    //get a user by its username
    findOne: async(username)=>{
        try {
            const result = await pool.query('SELECT * FROM users WHERE username=$1',[username]);
            return result.rows[0];
        } catch (error) {
            console.error(`ERROR IN USER.findOne model: ${error}`);
            throw error;
        }
    },
    //find a user by id
    findById: async(user_id)=>{
        try {
            const result = await pool.query('SELECT * FROM users WHERE user_id=$1 RETURNING *',[user_id]);
            return result.rows[0]
        } catch (error) {
            console.error(`ERROR IN USER.findById model: ${error}`);
            throw error;
        }
    }
}


module.exports=User;