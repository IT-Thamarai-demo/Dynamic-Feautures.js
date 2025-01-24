
# MyLibrary.js Documentation

## Overview
**MyLibrary.js** is a lightweight, versatile JavaScript library designed to enhance web applications with dynamic features such as device information, interactive maps, animations, and user engagement tools. This library is mobile-responsive, easy to integrate, and adaptable to various project requirements.

---

## Features

### 1. **Device Information**
- **Functionality**: Displays real-time device dimensions and user agent data.
- **Usage**:
  ```javascript
  myLibrary.displayDimensions("#dimensions");
  myLibrary.displayDeviceInfo("#deviceInfo");
  ```

### 2. **Battery Status**
- **Functionality**: Displays battery percentage and updates in real-time (if supported by the device).
- **Usage**:
  ```javascript
  myLibrary.displayBatteryInfo("#batteryStatus");
  ```

### 3. **Dynamic Greetings**
- **Functionality**: Displays time-based greetings (e.g., "Good Morning!").
- **Usage**:
  ```javascript
  myLibrary.displayGreeting("#greeting");
  ```

### 4. **Interactive Map**
- **Functionality**: Displays the user's location on a map using Leaflet.js.
- **Usage**:
  ```javascript
  myLibrary.initMap("map");
  ```
- **Dependencies**:
  ```html
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  ```

### 5. **Confetti Animation**
- **Functionality**: Triggers celebratory confetti effects.
- **Usage**:
  ```javascript
  myLibrary.launchConfetti();
  ```

### 6. **Typing Animation**
- **Functionality**: Creates customizable typing animations using Typed.js.
- **Usage**:
  ```javascript
  myLibrary.initTypingAnimation("#typingElement", ["Hello, World!", "Powered by MyLibrary!"]);
  ```
- **Dependencies**:
  ```html
  <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
  ```

### 7. **Particles Effect**
- **Functionality**: Adds dynamic particle backgrounds for interactive designs.
- **Usage**:
  ```javascript
  myLibrary.initParticles("particles-js");
  ```
- **Dependencies**:
  ```html
  <script src="https://cdn.jsdelivr.net/npm/particles.js"></script>
  ```

### 8. **Dialog Boxes**
- **Functionality**: Creates and manages modal dialogs easily.
- **Usage**:
  ```javascript
  myLibrary.openDialog("#dialogId");
  myLibrary.closeDialog("#dialogId");
  ```

### 9. **Scroll-to-Top**
- **Functionality**: Smoothly scrolls the page to the top.
- **Usage**:
  ```javascript
  myLibrary.scrollToTop();
  ```

### 10. **Visibility Change Notifications**
- **Functionality**: Notifies users when they return to the page.
- **Usage**:
  ```javascript
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      myLibrary.notify("Welcome back!", "Glad to see you again!", "icon.png");
    }
  });
  ```
### 11. **Load Video Functionalities**
- **Functionality**: Loads and controls video playback based on the given HTML video element ID.
- **Usage**:
  ```javascript
  myLibrary.loadVideo("#videoId");

### 12. **Load Audio Functionalities**
- **Functionality**: Loads and controls audio playback based on the given HTML audio element ID.
- **Usage**:
  ```javascript
  myLibrary.loadAudio("#audioId");

### 13. **Toastify Js Integration**

Use the `Toasify` method to display toast notifications with [Toastify.js](https://github.com/apvarun/toastify-js).

```javascript
document.getElementById("showToastBtn").addEventListener("click", () => {
  // Call the Toasify method
  myLibrary.Toasify({
    message: "This is a sample toast notification!",
    duration: 5000, // Display the toast for 5 seconds
    gravity: "top", // Display toast at the top
    position: "right", // Display toast on the right
    backgroundColor: "#FF5733" // Custom background color
  });
});
```
  
  
---

## Installation

### Step 1: Include MyLibrary.js
Include the library in your HTML file via the provided CDN:
```html
<script src="https://cdn.jsdelivr.net/gh/IT-Thamarai-demo/Dynamic-Feautures.js/demo.js"></script>
```

### Step 2: Include Dependencies (if required)
For features like maps, animations, and particles, include the respective dependencies as specified in the feature sections above.

### Step 3: Initialize Features
Ensure features are initialized after the DOM is fully loaded:

```javascript
document.addEventListener("DOMContentLoaded", () => {
  myLibrary.displayDimensions("#dimensions");
  myLibrary.displayDeviceInfo("#deviceInfo");
  myLibrary.displayBatteryInfo("#batteryInfo");
  myLibrary.displayGreeting("#greeting");
  myLibrary.initMap("map");

  myLibrary.initTypingAnimation("#typingElement", ["Welcome!", "Enjoy the experience!"]);

  // New features added
  myLibrary.loadVideo("#videoId");
  myLibrary.loadAudio("#audioId");
  myLibrary.launchConfetti();  // Trigger confetti effect
});

```

---

## Example Project

### HTML Example
```html
<div id="dimensions"></div>
<div id="deviceInfo"></div>
<div id="batteryInfo"></div>
<div id="greeting"></div>
<div id="typingElement"></div>
<div id="map" style="height: 300px; width: 100%;"></div>
<div id="particles-js"></div>

<!-- New Video Element -->
<video id="videoId" width="320" height="240" controls>
  <source src="path/to/your/video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<!-- New Audio Element -->
<audio id="audioId" controls>
  <source src="path/to/your/audio.mp3" type="audio/mp3">
  Your browser does not support the audio element.
</audio>

<!-- Confetti Button -->
<button id="confettiButton">Launch Confetti</button>

```
---

## Resources
- **Live Demo**: [MyLibrary.js Demo](https://it-thamarai-demo.github.io/Dynamic-Feautures.js/)
- **GitHub Repository**: [MyLibrary.js on GitHub](https://github.com/IT-Thamarai-demo/Dynamic-Feautures.js)

---

## License
This project is licensed under the MIT License. See the LICENSE file in the GitHub repository for more details.

---

## Contributing
Contributions are welcome! Submit issues or pull requests on the [GitHub repository](https://github.com/IT-Thamarai-demo/Dynamic-Feautures.js) to suggest new features, report bugs, or improve the library.

---

## Credits
- **Leaflet.js**: Interactive maps
- **Typed.js**: Typing animations
- **Particles.js**: Particle effects


## 📣 Stay Updated & Contribute

![Author Image](https://avatars.githubusercontent.com/u/120456321?v=4)  
**Author**: Thamarai Kannan  
**GitHub**: [Thamarai Kannan](https://github.com/IT-Thamarai-demo)  

![Contributor Image](https://avatars.githubusercontent.com/u/144410624?v=4)  
**Contributor**: Ragul  
**GitHub**: [Ragul](https://github.com/Ragul32111)

### How to Watch:
1. Click the **Watch** button at the top right of the repository page.
2. Select **All Activity** to get notifications for all updates or **Participating** to only get notified when you are involved.

### Why Watch?
- **Be notified** when new issues, pull requests, or discussions are created.
- **Contribute** by knowing when help is needed, including "good first issues" and other tasks.
- **Stay in the loop** about the latest project updates, releases, and announcements.

We appreciate your interest and contributions! 🙌

---

For further assistance, refer to the [GitHub repository documentation](https://github.com/IT-Thamarai-demo/Dynamic-Feautures.js).
