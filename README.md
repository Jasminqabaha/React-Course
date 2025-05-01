# 🎮 Section 4 – React Essentials Deep Dive: Tic Tac Toe Game

This project is a React-powered **Tic Tac Toe game** designed to deepen understanding of component logic, state derivation, and user interaction handling. It features a full game loop, custom player names, dynamic win detection, and a move history log.

---

## 🚀 Overview

Users can:
- Play a full game of Tic Tac Toe against another player
- Edit player names before or during the game
- See real-time highlights for the active player
- View a **log of every move** made in the game
- Restart the game with a single click when it's over

---

## 📸 Screenshot

![App Screenshot](./section4/main/project30%2/07-tic-tac-toe-starting-project/public/screenshot-4.png)

---

## 🧠 Key Concepts Practiced

- ⚙️ Deriving state (like active player or game board) instead of managing it directly
- 🧩 Creating reusable components like `Player`, `GameBoard`, and `GameOver`
- 🧠 Conditional rendering based on win/draw logic
- 🗃️ Keeping a turn log and rendering it dynamically
- 🎯 Using constants for win conditions (`WINNING_COMBINATIONS`)

---

## 🧩 Component Overview

- `App.jsx` – Main game logic, state handling, winner detection
- `Player.jsx` – Editable player name and symbol display
- `GameBoard.jsx` – Grid rendering and square selection
- `GameOver.jsx` – Modal-like result display with rematch button
- `Log.jsx` – Displays turn-by-turn move history

---

## 💡 What I Learned

- Using derived state to improve consistency and avoid bugs
- Handling conditional UI with clarity (draw vs. win)
- Managing dynamic interaction between multiple components
- Styling and animating based on game state (e.g., active player, winner)

---

> This classic game reimagined in React is an excellent exercise in state thinking, UI logic, and clean component design.
