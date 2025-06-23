//TODO 📗 Module 5. Logic and Control Flow - Lesson 07.01: Loops and Iteration - Challenge


//TODO 📝 Login Password System

//  • ✅ A limited number of login attempts (e.g., 3 tries)
//  • ✅ A lockout period or warning after failed attempts
//  • ✅ A function to encapsulate the logic for clarity and reuse

//  The ideal solution should be a function that:
//  1. Uses a do...while loop to repeat attempts
//  2. Stops when either:
//      • The password is correct ✅
//      • The attempt limit is exceeded ❌
//  3. Returns an appropriate message: "Access granted!" or "Too many failed attempts. Try again later."

//* ✅ Conceptual Pseudocode

//  FUNCTION checkPassword()

//      SET attempt = 0
//      SET maxAttempts = 3
//      SET password = ""

//      DO
//          SET password to simulated user input
//          IF password is correct
//              RETURN "Access granted!"
//          ELSE
//              PRINT "Wrong password..."
//              INCREMENT attempt
//      WHILE password is incorrect AND attempt < maxAttempts

//      IF attempt reached maxAttempts
//          RETURN "Too many failed attempts."

//  END FUNCTION

//* 💡 Why this is better:
//  • 📦 Encapsulation: All logic lives inside a clean function
//  • 🔁 Control Flow: You limit retries with a loop
//  • 🛡️ Security Behavior: Matches real authentication patterns

//! Solution

function checkPassword() {
    let attempt = 0;
    const maxAttempts = 3;
    const correctPassword = "correct123";

    const simulatedInputs = ["abc", "test", "correct123"];
    let password;

    do {
        password = simulatedInputs[attempt];

        if (password === correctPassword) {
            return "Access granted!"
        } else {
            console.log("Wrong password...");
            attempt++;
        }
    } while (password !== correctPassword && attempt < maxAttempts);

    if (attempt === maxAttempts) {
        return  "Too many failed attempts."
    }
}

console.log(checkPassword());



//!  🔐 Real-World Login Security Patterns  ----------------------

//? 🔁 1. Limited attempts per session
//  • Usually 3 – 5 tries before temporarily blocking further input.
//  • Prevents brute-force attacks.

//? ⏳ 2. Increasing wait times due to repeated failure
//  Example:
//  • After 1st set of failed attempts → wait 1 minute
//  • After 2nd set → wait 15 minutes
//  • After 3rd → account lock

//? 🔒 3. Full account lockout
//  Requires password reset via:
//  • Verified email
//  • Security question
//  • Two-factor authentication


//* 🧠 Recap & Refinement
//  Here's what we have described logically:

//  User attempts login:
//      → After 3 wrong attempts → wait X minutes
//      → After 6 wrong attempts → lock account, require password reset

//!  The delay duration and lockout rules are defined by app owners or security administrators.

//* ✅ System Overview

//  Simulate:
//  1. ✅ 3 password attempts per session
//  2. ✅ Wait warning after each failed session
//  3. ✅ Lock account after 2 failed sessions (i.e., 6 total incorrect attempts)
//  4. ✅ Display outcome (Access granted, Please wait, or Account locked)

//* 🧠 Pseudocode

//  FUNCTION loginSystem()
//      SET correctPassword = "correct123"
//      SET failedSessions = 0
//      SET maxSessions = 2
//      WHILE failedSessions < maxSessions
//          SET attempts = 0
//          WHILE attempts < 3
//              GET simulated password (wrong or right)
//              IF password is correct
//                  RETURN "Access granted!"
//              ELSE
//                  PRINT "Wrong password..."
//                  INCREMENT attempts
//          END WHILE
//          INCREMENT failedSessions
//          PRINT "Please wait X minutes"
//      END WHILE
//      RETURN "Account locked. Please reset your password."
//  END FUNCTION

//! Solution

function loginSystem() {
    const correctPassword = "correct123";
    const maxAttempts = 3;
    const maxSessions = 2;
    let failedSessions = 0;

    const simulatedPasswords = ["test1", "wrong2", "guess3", "bad4", "fail5", "correct123"];
    let inputIndex = 0;
    
    while (failedSessions < maxSessions) {
        let attempts = 0;

        while (attempts < maxAttempts) {
            let password = simulatedPasswords[inputIndex];
            inputIndex++;

            if (password === correctPassword) {
                console.log("Access granted");
                return;
            } else {
                console.log("Wrong password...");
                attempts++;
            }
        };

        failedSessions++;
        if (failedSessions < maxSessions) {
            console.log("Please wait 5 minutes before trying again.");
        }
    };
    console.log("Account locked. Please reset your password.");
}
