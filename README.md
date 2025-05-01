# The Ultimate NextJS Authentication Guide

![Project Flow Image](/diagram-export-5-1-2025-8_25_38-PM.png)

## Agenda
1. API Routes
    1. Signup api route (username, email, password)
        1. Fetch the existing user (with same username or email)
        2. Throw error, if the user exists
        3. Hash the user's password & store it in the database
    2. Verify email api route
    3. Login api (allow login to verified users only)
        1. Get the identifier (username or email) & password
        2. Identify the type of "identifier".
        3. Validate user password
        4. Provide access token to the user
    4. Reset password api (for users, who have forgotten their password)
    5. Profile api (name, address, phone)
    6. Update profile / password api.

2. Client routes
    1. Signup page
    2. Login page
    3. Verify email page
    4. Reset password page
    5. Profile page
