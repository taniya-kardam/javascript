
const pool =require ('./dbconfig.js');
module.exports = class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
       
    }
    checkUser(){
      return new Promise((resolve,reject)=>{
         pool.getConnection((err,con)=>{
            if(!err){
              let sql = "select * from register where username = ? and password = ?";
              con.query(sql,[this.email,this.password],(err,result)=>{
                if(err)
              {
                  reject(err)
              }
                else
                {
                  resolve(result);
                }
              });
            }  
            else
              reject(err);
         }); 
      });
  } 
   
  
    save(){
      return new Promise((resolve,reject)=>{
          pool.getConnection((err,con)=>{
              if(err) reject(err);
              else{
                let sql = "insert into register(username,email,password) values(?,?,?)"; 
                
                con.query(sql,[this.username,this.email,this.password],(err,result)=>{

                  con.release();
                  if(err) 
                  reject(err);
                  else
                    resolve(result);
                });  
              }
          });
      });    
    }
  }