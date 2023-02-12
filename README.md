#ETHIO-TOURISM

# Tourism-Website

The Title of our project is a Ethio-Tourism which is a website designed by Nahom Amare.

                        **       GROUP MEMBERS     **
                        
      NAMES                                                ID                     Section
1   Geleta Daba                                        UGR/1120/13                   1
2   Sahib Semahegn                                     UGR/2914/13                   1
3   Nahom Amare                                        UGR/7099/13                   1
4   Tofik Abdu                                         UGR/1721/13                   1
5   Kena Tekaling                                      UGR/6147/13                   1



****************************************************************************************************************************************
                                                                                                                                      
                                                Default Admin Email:- admin@email.com                                                                                                                                                                                      
     Please use the above email to create an admin on the signup page as all users who don't create their account with the above email 
     will be authomatically Authorized as Users and not admins by the backend.                                                         
     A user who signsup with the above email will automatically be given the role of an admin by the backend.                         
                                                                                                                                       
                                                                                                                                       
     The authorization given to an Admin gives access for the admin to a page where the admin uses to manage the users and the Hotels. 
                           
                                          WHAT ADMIN CAN DO USING THE MANAGE USER PAGE                                                  
                                                                                                                                       
    1. READ all user                                                                                                                   
    2. Delete user                                                                                                                     

                                         WHAT ADMIN CAN DO USING THE MANAGE HOTEL PAGE                                                  
                                                                                                                                       
    1. READ all Hotels                                                                                                                 
    2. Delete Hotels                                                                                                                   
    3. Add Hotels to be rendered on lalibela, axum and harer pages                                                                     
    4. Update the firls of the Hotels                                                                                                  

***************************************************************************************************************************************



*********************************************************************************************************************************************
                                                                                                                                           
                                               AUTHENTICATION AND AUTHORIZATION                                                            
                                                                                                                                           
     A user who hasn't logged doesn't have access to the LALIBELA, AXUM, and HARER pages and when a user who hasn't logged int tries       
     to access these pages they will be redirected the LOGIN page to login inorder to access these  resources                              
     
     THE LOGOUT button only appears for logged in users                                                                                    
     The MANAGE link which leads to the admin pages for managing users and admins only appear after the user has logged in and the user      
     has been identified as an Admin     
                                                                                                                                           
     A USER can UPDATE their PASSWORD by going to the login page and then touching the change password button which redirects the user to  
     a new page where the user can enter thei email and password and after being authenticated as an existing user the password will be    
     updated                                                                                                                               
                                                                                                                                           
*********************************************************************************************************************************************



***********************************************************************************************************************************************
                                                                                                                                              
                                                   DATABASE JUSTIFICATION                                                                     
                                                                                                                                              
     We agreed on using a documentation database:- MONGO DB                                                                                   
     The reason is after looking at both the databases we have come to realize that mongo db offers a much better query string  usage than    
      the relational database and it also gives us the flexibility and robustness of using the mongoose module which offers                    
     capability of using the database on different languages such as python too. The other reason we considered while choosing MongoDB as our 
     database is that  Mongo Db offers more felxibility for further unstractured data while still being robust to handle a structured data.   
     MONGO DB is also much faster than some of the relational databases such as SQL .                                                         
************************************************************************************************************************************************




***********************************************************************************************************************************************
                                                                                                                                              
                                                   OVERVIEW OF CRUD CAPABILITIES                                                             
                                                                                                                                              
                                                          FEATURE 1:- USER                                                                    
       CREATE:-The user can signup which CREATEs a user in the database                                                                       
       READ:- The Admin can READ all the users of the system                                                                                  
       UPDATE:- The user can UPDATE their Password                                                                                            
       DELETE:- The Admin can DELETE the users           

                                                          FEATURE 2:- HOTELS                                                                   
       CREATE:- Hotels can be CREATED.                                                                                                       
       READ:- Details of Hotels can be READ.                                                                                                  
       UPDATE:- Fields that define the hotels and theirl locations along with their price can be updated                                                              
       DELETE:- Hotels can be DELETED                                                                                                         

*********************************************************************************************************************************************

