# AuthTemplate
An Fully Backend controlled Auth template with JWT ,Node ,Express.





Welcome to the documentation for our Node.js and Express-based authentication system with JWT support and email functionality. This system allows you to securely authenticate users, issue JSON Web Tokens, and send email notifications.




## Table of Contents
1. [Getting Started]()
    - Installation and Configuration
        > Must have installed NodeJS>=v18.14.2 and NPM>=9.6.4
        - To install :
            - Fork This Repository.
            - Pop a Terminal and Navigate in the `auth-server` folder of this repository.
            - Run this command in the terminal :
                - `npm install`
            > This Command installs the dependencies of this Project.
            - Make a new file in the `auth-server` Folder named `.env` and fill up the following fields :
            ```
            # .env
            
            MONGODB_URI=<mongodb_database_uri>
            PORT=6969 #can keep any free port
            TOKEN_KEY=<anyrandomstring>
            TOKEN_EXPIRY=365d     #you can keep it to be 24h or 3h # or whatever
            AUTH_EMAIL=<Your hotmail email id,to be used for smtp emails>
            AUTH_PASSWORD=<corresponding_pass>
            ```
            > The values to these keys has to be unique.They are self explanatory how to get the corresponding key.

            - Now the project is ready to be seen in action.
            - Run :
                `nodemon app.js`

2. [Authentication Flow]() [Docs TBW]
    - Registration
    - Login
    - Token Refresh [To Be Done]
    - Logout
3. [JSON Web Tokens]() [Docs TBW]
    - Token Structure
    - Token Usage
4. [Email Support]() [Docs TBW]
    - Configuration
    - Sending Emails
5. [API Endpoints]() 
    - User Registration/SignUp
       - `/POST` url: `http://127.0.0.1:6969/app/v1/signup`
      
       - Request Body :
      ```json
      {
         "name": "Soubhik Kumar Gon",
         "email": "soubhikgon2004@gmail.com",
         "password": "cppisbetterthanjavaimo"
      }
      ```
      - Response Body :
      ```json
        {
            "name": "Soubhik Kumar Gon",
            "email": "soubhikgon2004@gmail.com",
            "password": "$2b$10$MyXuuoq0nzCqWGfvrin2edRyLKCr29dCY4mdeKZ4v9qqcYenPBzS",
            "_id": "650c41f29eb5f0b6d074765c"
        }   
      ```

    - User Login :
       - `/POST` url: `http://127.0.0.1:6969/app/v1/login`
      
       - Request Body :
      ```json
      {
         "name": "Soubhik Kumar Gon",
         "email": "soubhikgon2004@gmail.com",
         "password": "cppisbetterthanjavaimo"
      }
      ```
      - Response Body :
      ```json
        {
            "_id": "650c45ab2f207feac7e4c6d1",
            "name": "Soubhik Kumar Gon",
            "email": "soubhikgon2004@gmail.com",
            "password": "$2b$10$I2XQATFYBlrqgyao199DruWyJNgEA74W7.OI/341m..bDoe.t77mS",
            "__v": 0,
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTBjNDVhYjJmMjA3ZmVhYzdlNGM2ZDEiLCJlbWFpbCI6InNvdWJoaWtnb24yMDA0QGdtYWlsLmNvbSIsImlhdCI6MTY5NTMwMzExMiwiZXhwIjoxNzI2ODM5MTEyfQ.WK4QGHMtcVA3vivc49v97r-D5qjWvedkNAfeuHHtq7Y"
        } 
      ```
    - OTP Generation : [Funcationality Still in process]
       - `/POST` url: `http://127.0.0.1:6969/app/v1/send_otp`
      
       - Request Body :
      ```json
        {
            "email":"soubhikgon2004@gmail.com",
            "subject":"Password Retreival OTP",
            "message":"This is Email wich contains the OTP for changing the password as per your request."
        }
      ```
      - Response Body :
      ```json
        {
            "otp": "$2b$10$40fhsv7Lz0NPJI5qFNB2uO/.tU4Ck9FhzmizwdvPydrtuzmvT6PuO",
            "createdAt": "2023-09-21T13:40:41.890Z",
            "expiresAt": "2023-09-21T14:40:41.890Z",
            "_id": "650c47d984f4c666f587ce48",
            "__v": 0
        }
      ```     
    - Token Refresh [TBD VIA_OTP]
    - Logout [DOCS TO BE ADDED...BASICALLY YOU CAN REMOVE THE JWT TOKEN FROM BROWSER CACHE / LOCAL STORAGE.]
6. [Error Handling]() [Docs TBW]
    - Error Codes
    - Response Formats 
7. [Security]() [Doc TBW]
    - Password Hashing
    - JWT Security
    - Rate Limiting
8. [Deployment]() [Doc TBW]
    - Production Considerations
    - Scaling
9. [Contributing]() [Doc TBW]
    - Code of Conduct
    - How to Contribute
10. [License]() [Doc TBW]
    - MIT License