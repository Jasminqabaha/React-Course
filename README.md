# ⏱️ Section 8 – Working with Refs & Portals in React

This project is an interactive **timer challenge app** built to practice using **refs** and **portals** in React. It includes timed challenges, personalized player input, and animated modal results.

---

## 🚀 Overview

Users can:
- Enter their name
- Start a countdown timer challenge (1s, 5s, or 10s)
- Try to stop the timer as close to 0 as possible
- Get a score based on timing accuracy, displayed in a modal

---

## 🔍 Key Concepts Practiced

- 📌 Using `useRef()` to manage DOM access (e.g. uncontrolled input, timers)
- 🧠 `useImperativeHandle()` to expose functions to parent components
- 🔲 `createPortal()` for rendering modals outside the root component
- 📟 Handling timer state and updating UI in real-time

---

## 🧩 Components Breakdown

- `Player.jsx` – Uses `useRef()` to read and reset player name
- `TimerChallenge.jsx` – Manages the countdown logic and timer state
- `ResultModel.jsx` – Uses `forwardRef` and `createPortal` to display modals dynamically
- `App.jsx` – Brings everything together, displaying multiple difficulty levels

---

> This app is a great showcase of how **Refs** and **Portals** enable more advanced interactivity and DOM control in React.
