const { use } = require('passport');
const pool = require('../database/pool');


const User = {
    addToUsers: async(fullname,username,password) => {
        try {
            const resluts = await pool.query('INSERT INTO users(fullname,username,password) VALUES($1,$2,$3) RETURNING *', [fullname,username,password]);
            return resluts.rows[0];
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
            const result = await pool.query('SELECT * FROM users WHERE user_id=$1',[user_id]);
            return result.rows[0]
        } catch (error) {
            console.error(`ERROR IN USER.findById model: ${error}`);
            throw error;
        }
    },
    upgradeUser: async(user_id)=>{
        try {
            await pool.query('UPDATE users SET membership=true WHERE user_id=$1',[user_id]);
        } catch (error) {
            console.error(`ERROR IN USER.upgradeUser model: ${error}`);
            throw error;
        }
    }
}


module.exports=User;