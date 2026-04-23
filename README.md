WebCraft (HTML5 Minecraft)
---------------------
[![GitHub issues](https://img.shields.io/github/issues/webcraft-developer/webcraft-developer.github.io)](https://github.com/webcraft-developer/webcraft-developer.github.io/issues)
[![GitHub license](https://img.shields.io/badge/licence-mit-blue)](https://github.com/webcraft-developer/webcraft-developer.github.io/blob/main/LICENSE)

This project is intended to become a Minecraft Classic clone using HTML5 technologies, most notably WebGL and WebSockets. No third-party libraries are used, with the exception of glmatrix and socket.io. People who have written similar demos used libraries such as *three.js*, but it is both foolish and inefficient to use a 3D engine for rendering a large number of blocks.

---

## 🎮 Controls

| Action | Control |
| :--- | :--- |
| **Move** | `W` `A` `S` `D` |
| **Jump** | `Space` |
| **Look** | `Mouse` |
| **Mine** | `Left Click` |
| **Place Block** | `Right Click` |
| **Select Block** | `1` - `9` |
| **Capture Mouse** | `Left Click (on screen)` |

---

Structure
---------------------

+ *js/* - Includes the different modules that make up the functionality of WebCraft.
+ *media/* - Contains the graphics resources.
+ *style/* - Contains stylesheets for the HTML front-ends.
+ *singleplayer.html* - The front-end for the singleplayer client.
+ *multiplayer.html* - The front-end for the multiplayer client.
+ *server.js* - The Node.js server code.

---

Modules
---------------------

The two front-ends invoke the available modules to deliver the components necessary for the gameplay and graphics of either the single-player or multiplayer experience. The available modules are listed below.

**Blocks.js**

This is the most *moddable* module, as it contains the structure with the available block materials and their respective properties. It also contains functions invoked by the render class for proper shading and lighting of blocks.

**World.js**

This is the base class, which all other modules depend on. Although it is a very important module, it is also the most passive module. It contains the block structure of the world and exposes functions for manipulating it.

**Physics.js**

This module has strong roots in the world-class and simulates the flow of fluid blocks and the gravity of falling blocks at regular intervals. It has no specific parameters and is simply invoked in the game loop to update the world.

**Render.js**

This is the module that takes care of visualizing the block structure in the world class. When a world is assigned to it, it sets up a structure of chunks that are updated when a block changes. These chunks are mostly just fancy Vertex Buffer Objects. As this module takes care of the rendering, it also houses the code that deals with *picking* (getting a block from an x, y position on the screen).

**Player.js**

Finally, there is also the module that handles everything related to the player of the game. Surprisingly, perhaps, it also deals with the physics and collision of the player. Less surprising is that it manages the material selector and input and responds to it in an update function, just like the physics module.

**Network.js**

This module makes it easy to synchronize a world between a server and connected clients. It comes with both a *Client* and *Server* class to facilitate all of your networking needs.

---

## 📄 License
This project is open-source and available under the MIT License.
