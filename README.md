# Compete Book API Documentation

Welcome to the Compete Book API documentation! This API provides functionalities to manage user accounts, friend requests, and interact with various coding platforms.

## Team Members
- Vanshul Agarwal(Team Leader)
- Yash Mittal
- Dibya Sundar roy
- Isha Singhal

## Table of Contents
1. [Getting Started](#getting-started)
   - [Authentication](#authentication)
2. [Endpoints](#endpoints)
   - [1. /login](#1-login)
   - [2. /register](#2-register)
   - [3. /logout](#3-logout)
   - [4. /changepw](#4-changepw)
   - [5. /setusername](#5-setusername)
   - [6. /userdetails](#6-userdetails)
   - [7. /sendfrequest](#7-sendfrequest)
   - [8. /acceptfrequest](#8-acceptfrequest)
   - [9. /rejectfrequest](#9-rejectfrequest)
   - [10. /:platform](#10-platform)

## Getting Started

### Authentication

To access most endpoints, you need to authenticate. Use the `/login` endpoint to obtain an authentication token. 



## Endpoints
1. /login<br>
Method : 'POST'<br>
Description : Logs in a user and returns an authentication token.<br>
Request : 

    ```json
    {
    "username": "your_username",
    "password": "your_password"
    }
    ```

Response :

```
{
"token": "your_auth_token"
}
```
2. /register<br>
Method : 'POST'<br>
Description : Registers a new user.<br>
Request : 

    ```json
    {
    "username": "new_username",
    "password": "new_password"
    }
    ```
Response :

```
{
"message": "User registered successfully"
}
```
3. /logout<br>
Method : 'POST'<br>
Description : Logs out the authenticated user.<br>
Request : 

    ```json
    {
    "message": "Logout successful"
    }
    ```
4. /changepw<br>
Method : 'POST'<br>
Description : Changes the password of the authenticated user.<br>
Request : 

    ```json
    {
    "old_password": "current_password",
    "new_password": "new_password"
    }
    ```
Response : 

```
{
    "message": "Password changed successfully"
}
```
    

5. /setusername<br>
Method : 'POST'<br>
Description : Sets the username for the authenticated user.<br>
Request : 

    ```
    {
    "new_username": "new_username"
    }
    ```

Response : 

```
{
"message": "Username set successfully"
}
```

6. /userdetails<br>
Method : 'GET'<br>
Description : Retrieves details of the authenticated user.<br>
Request : 

    ```json
    {
    "username": "your_username",
    "rating": 1500,
    "friends_count": 5
    }
    ```
7. /senfrequest<br>
Method : 'POST'<br>
Description : Sends a friend request to another user.<br>
Request : 

    ```json
    {
    "friend_username": "friend_username"
    }
    ```
Response :

```
{
"message": "Friend request sent successfully"
}
```
8. /acceptfrequest<br>
Method : 'POST'<br>
Description : Accepts a friend request from another user.<br>
Request : 

    ```json
    {
    "friend_username": "friend_username"
    }
    ```
Response :

```
{
"message": "Friend request accepted successfully"
}
```
9. /rejectfrequest<br>
Method : 'POST'<br>
Description : Rejects a friend request from another user.<br>
Request : 

    ```
    {
    "friend_username": "friend_username"
    }
    ```
Response :
```
{
"message": "Friend request rejected successfully"
}
```

10. /:platform<br>
Method : 'GET'<br>
Description : Retrieves information about a user's rating on a specific coding platform.<br>
Request : 

    ```json
    {
    "platform": "codeforces",
    "rating": 1800,
    "contests_won": 3
    }
    ```

