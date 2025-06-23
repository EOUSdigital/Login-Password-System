# 🔐 Login System Simulation with Limited Attempts

This JavaScript function simulates a basic login system with:
- A **maximum of 3 attempts per session**
- **2 sessions** allowed before the account is locked
- Simulated user input using a predefined list of passwords

---

## ✅ Features

- ✅ Encapsulated in a `loginSystem()` function
- ✅ Uses nested `while` loops
- ✅ Compares each input to a correct password
- ✅ Tracks failed attempts and sessions
- ✅ Logs realistic messages: `"Wrong password..."`, `"Please wait 5 minutes..."`, `"Access granted"`, or `"Account locked"`

---

## 🧠 Logic Summary

```text
- User has 3 attempts per session
- After each session, if the password is still wrong:
    → Wait 5 minutes (simulated with a console message)
- After 2 failed sessions (6 total wrong attempts), the account is locked
```

---

## 💻 Code

```javascript
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
        }

        failedSessions++;
        if (failedSessions < maxSessions) {
            console.log("Please wait 5 minutes before trying again.");
        }
    }

    console.log("Account locked. Please reset your password.");
}
```

---

## 🧪 Example Output

```
Wrong password...
Wrong password...
Wrong password...
Please wait 5 minutes before trying again.
Wrong password...
Wrong password...
Access granted
```

---

## 📦 Summary

This challenge demonstrates mastery of:

- ✅ Loops (nested `while`)
- ✅ Conditionals
- ✅ Return flow
- ✅ Realistic error handling

Great for **control flow** and **real-world login systems**!

