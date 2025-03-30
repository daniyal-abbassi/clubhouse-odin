# Clubhouse Messaging App - (TOP)

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-lightgrey)](https://expressjs.com/)
[![Passport](https://img.shields.io/badge/Passport.js-0.7-blue)](http://www.passportjs.org/)

A secure messaging application with user authentication, built as part of The Odin Project curriculum.

## Live URL

 # https://clubhouse-odin-production.up.railway.app/


## Features

✅ **User Authentication**  
- Sign up with username/password
- Login/logout functionality
- Password hashing with bcrypt

✅ **Messaging**  
- Create and view messages 

✅ **Security**  
- Session management with express-session  
- Protected routes 

## Screenshot
![App Preview](/public/clubhouse.png)

## 🛠️ Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/) (running locally or connection URI)
- [Git](https://git-scm.com/)

### Steps

1. **Clone the repository**
```bash
   git clone https://github.com/daniyal-abbassi/clubhouse-odin.git
   cd clubhouse-odin
   ```

2. **Install dependencies**
```bash
   npm install
   ```

3. **Set up enviroment variables**
```.env
   PORT=port
   DATABASE_URL=postgresql://user:password@host:port/database
   ```

4. **Initialize the database**

5. **Start the aplication**
