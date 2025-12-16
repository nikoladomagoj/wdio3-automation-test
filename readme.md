# WebdriverIO Automation – AutomationExercise.com

This project contains an **end-to-end UI automation test** written in **WebdriverIO + JavaScript**, using the **Page Object Model (POM)** design pattern.

The test automates the **new user registration (Sign Up) flow** on:
👉 [https://automationexercise.com/](https://automationexercise.com/)

---

## ✅ Test Scenario – Register New User

The automated test performs the following steps:

1. Open the home page
2. Accept cookie consent
3. Navigate to **Signup / Login**
4. Enter **name and random email**
5. Submit the signup form
6. Fill in account details:

   * Password
   * First name
   * Last name
   * Address
   * Country (from dropdown)
   * State
   * City
   * Zip code
   * Random mobile number
7. Create account
8. **Assert that "Account Created" is successfully displayed**
9. Continue after successful registration
10. Delete all cookies after the test

---

## 🎲 Random Test Data

To avoid duplicate user errors, the following random data is generated for every test run:

* ✅ **Random email**
* ✅ **Random first and last name**
* ✅ **Random mobile number**

Random data is generated inside:

```
/utility/random.js
```

---

## 📁 Project Structure

```
project/
 ├── test/
 │    ├── specs/
 │    │     └── shopping.spec.js
 │    ├── pageobjects/
 │    │     └── shopping.page.js
 │    └── utility/
 │          └── random.js
 ├── wdio.conf.js
 ├── package.json
 └── README.md
```

---

## 🛠 Installation

Install all dependencies:

```bash
npm install
```

---

## ▶ Running Tests

Run all tests:

```bash
npx wdio run wdio.conf.js
```

---

## 🧩 Page Object Model (POM)

All selectors and page actions are stored inside:

```
test/pageobjects/shopping.page.js
```

The test imports the page object like this:

```js
const shoppingPage = require("../pageobjects/shopping.page");
```

This keeps the test:

* ✅ Clean
* ✅ Maintainable
* ✅ Easy to scale

---

## ⚙️ Technologies Used

* **WebdriverIO**
* **JavaScript**
* **Node.js**
* **Mocha**
* **Page Object Model (POM)**

---

## 📌 Notes

* Random email prevents duplicate signup errors
* Random first name and last name prevents validation issues
* Random mobile number prevents validation issues
* Country selection is handled using:

```js
selectByVisibleText()
```

* Cookies are removed after every test run
* Test timeout was increased for stability

---

## 📜 License

This project is for **learning and automation practice purposes**.
