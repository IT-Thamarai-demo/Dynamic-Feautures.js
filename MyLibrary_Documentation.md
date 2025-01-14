
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
<button id="confettiButton">Launch Confetti</button>
```

### JavaScript Example
```javascript
document.addEventListener("DOMContentLoaded", () => {
  myLibrary.displayDimensions("#dimensions");
  myLibrary.displayDeviceInfo("#deviceInfo");
  myLibrary.displayBatteryInfo("#batteryInfo");
  myLibrary.displayGreeting("#greeting");
  myLibrary.initTypingAnimation("#typingElement", ["Welcome!", "Enjoy the experience!"]);
  myLibrary.initMap("map");
  myLibrary.initParticles("particles-js");

  document.getElementById("confettiButton").addEventListener("click", () => {
    myLibrary.launchConfetti();
  });
});
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

---

For further assistance, refer to the [GitHub repository documentation](https://github.com/IT-Thamarai-demo/Dynamic-Feautures.js).
