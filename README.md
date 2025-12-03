# **PIN-ATM System**

A dual-implementation ATM simulation built using **React (Frontend UI)** and **C++ (Console Based)**.
This project showcases how an ATM system can be developed in two different environments while maintaining the same core banking logic: **View Balance**, **Deposit**, and **Withdraw**.

---

## 📌 **Project Overview**

This repository contains two versions of an ATM System:

### **1. React ATM System (Modern UI)**

A fully interactive ATM interface built using:

* **React.js**
* **TailwindCSS**
* **Lucide-React Icons**
* Clean UI with authentication (PIN: `1234`)
* Features:

  * PIN login screen
  * View Balance
  * Withdraw (with quick-select buttons)
  * Deposit
  * Logout
  * Real-time UI feedback (success/error messages)

---

### **2. C++ ATM Program (Console Based)**

A simple and clean C++ implementation of core ATM operations.

Features:

* View balance
* Withdraw money
* Deposit money
* Input validation
* Loop-based menu system

---

## 🖼️ **Preview (React Version)**

✔ Modern ATM interface
✔ Smooth transitions
✔ User-friendly design

*(Add screenshots or GIFs here if you want)*

---

## 📂 **Folder Structure Suggestion**

```
📁 project-root/
 ├── react-atm/
 │    └── ATMSystem.jsx
 ├── cpp-atm/
 │    └── atm.cpp
 └── README.md
```

---

## 🚀 **React ATM – Setup & Run**

### **Prerequisites**

Make sure you have installed:

* Node.js (v16+ recommended)
* npm or yarn

### **Installation**

```bash
cd react-atm
npm install
```

### **Start the Development Server**

```bash
npm run dev
```

### **Login PIN**

```
1234
```

---

## 🖥️ **C++ ATM – Compile & Run**

### **Using g++**

```bash
cd cpp-atm
g++ atm.cpp -o atm
./atm
```

---

## 📘 **Code Explanation**

### **React Version Highlights**

* Uses `useState` for:

  * Balance
  * PIN authentication
  * UI screens
  * Messages
* Built with modular screen rendering
* Includes quick withdrawal/deposit preset buttons
* Fake PIN system for demo (`1234`)

### **C++ Version Highlights**

* Implements an `ATM` class with:

  * `get_balance()`
  * `withdraw(amount)`
  * `deposit(amount)`
* Basic menu loop with switch-case
* Input validation for safe operations

---

## 💡 **Future Improvements**

* Add API backend for real account data
* Add PIN encryption
* Add transaction history
* Add card simulations
* Add multi-user accounts

---

## 🤝 **Contributing**

Pull requests are welcome!
Feel free to open issues for suggestions or improvements.

---

## 📜 **License**

This project is open-source and free to use.
