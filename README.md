# 🌍 Section 11 – Handling Side Effects & Working with `useEffect`

This project is a location-based **Place Picker App** that allows users to build a personal collection of places they'd like to visit. It demonstrates practical use of `useEffect` to manage side effects like **geolocation**, **local storage**, and **timed operations**.

---

## 🚀 Overview

Users can:
- Browse a list of real-world places sorted by current location
- Select places to add to a personal list (saved to local storage)
- Remove places using a confirmation modal with a **timer-based auto-delete**

---

## 📸 Screenshot

![App Screenshot](./Section11/main/01-starting-project/public/screenshot-11.png)

---

## 🧠 Key Concepts Practiced

- 🧭 Fetching geolocation data to sort content dynamically
- 🧠 Using `useEffect` for side effects: 
  - Sorting places by location on page load
  - Reading and writing to **localStorage**
  - Running and cleaning up **timers** for modal confirmation
- 🕓 Visual countdown with `<progress>` using a custom timer
- 🪟 Rendering modals with **`createPortal`**

---

## 🧩 Component Overview

- `App.jsx` – Main logic for selection, deletion, and persistence
- `Places.jsx` – Renders list sections and handles fallbacks
- `Modal.jsx` – Reusable modal component
- `DeleteConfirmation.jsx` – Confirmation dialog with timed auto-delete
- `DeleteProgress.jsx` – Visual progress bar during countdown
- `loc.js` – Distance calculation and sorting helper

---

## 💡 What I Learned

- How to manage **asynchronous effects** with cleanup in `useEffect`
- Using `useRef` to handle side effects and preserve values
- Combining localStorage, geolocation, and UI feedback
- Creating custom reusable modals and feedback components

---

> This project brings together multiple real-world React patterns that rely on side effects and browser APIs.
