# 🟦 SixSevenCraft

An infinite, procedural, voxel-based survival game built entirely in JavaScript using **Three.js**. This project features a fully functional sandbox environment running directly in the browser with advanced physics, crafting, and multiplayer simulation.

---

## 🎮 Controls

| Action | Control |
| :--- | :--- |
| **Move** | `W` `A` `S` `D` |
| **Jump** | `Space` |
| **Look** | `Mouse` |
| **Mine / Explode TNT** | `Left Click` |
| **Place Block** | `Right Click` |
| **Select Block** | `1` - `9` |
| **Capture Mouse** | `Left Click (on screen)` |

---

## ✨ Features

* **🌍 Infinite Terrain:** Procedural world generation using noise functions with chunk-based loading for endless exploration.
* **💥 Voxel Physics:** TNT-based explosions that modify the landscape.
* **🛠️ Survival Systems:** Health and Hunger bars with food.
* **☀️ Ultra Graphics:** Real-time shadow mapping, ambient occlusion, and a dynamic Day/Night cycle.

---

## 🛠️ Technical Details

* **Engine:** [Three.js](https://threejs.org/) (WebGL)
* **Physics:** Custom AABB collision detection and voxel-step gravity.
* **Architecture:** Chunk-based memory management to maintain high FPS during infinite travel.

---

## 📄 License
This project is open-source and available under the MIT License.
