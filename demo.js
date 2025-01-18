(function (global) {
  // Main library object
  const myLibrary = {
    // Load default styles for the library
    loadStyles: function () {
      const style = document.createElement('style');
      style.textContent = `
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        #map {
          height: 300px;
          margin: 20px auto;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
        }
        button {
          background-color: #007BFF;
          color: white;
          border: none;
          padding: 10px 20px;
          margin: 10px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
        }
        button:hover {
          background-color: #0056b3;
        }
        dialog {
          padding: 20px;
          border: none;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        dialog::backdrop {
          background: rgba(0, 0, 0, 0.5);
        }
      `;
      document.head.appendChild(style);
    },

    // Lazy-load external library
    lazyLoadScript: function (src, callback) {
      const script = document.createElement("script");
      script.src = src;
      script.onload = callback;
      document.head.appendChild(script);
    },

    // Launch confetti (lazy-load canvas-confetti)
    launchConfetti: function () {
      this.lazyLoadScript(
        "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js",
        () => {
          const duration = 2000;
          const animationEnd = Date.now() + duration;

          const interval = setInterval(() => {
            if (Date.now() > animationEnd) clearInterval(interval);
            confetti({
              particleCount: 100,
              spread: 360,
              origin: { x: Math.random(), y: Math.random() },
            });
          }, 250);
        }
      );
    },

    // Initialize typing animation (lazy-load Typed.js)
    initTypingAnimation: function (selector, strings, typeSpeed = 70, loop = true) {
      this.lazyLoadScript("https://cdn.jsdelivr.net/npm/typed.js@2.0.12", () => {
        new Typed(selector, { strings, typeSpeed, loop });
      });
    },

    // Initialize particles effect (lazy-load particles.js)
    initParticles: function (elementId) {
      this.lazyLoadScript("https://cdn.jsdelivr.net/npm/particles.js", () => {
        particlesJS(elementId, {
          particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            links: { enable: true, distance: 150, color: '#ffffff' },
            move: { enable: true, speed: 2, out_mode: 'out' },
          },
          interactivity: {
            events: {
              onhover: { enable: true, mode: 'repulse' },
              onclick: { enable: true, mode: 'push' },
            },
          },
        });
      });
    },

    // Notification API
    messege: function (title, body, icon) {
      Notification.requestPermission().then((res) => {
        if (res === "granted") {
          new Notification(title, { body, icon });
        }
      });
    },

    // Display device dimensions
    displayDimensions: function (selector) {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const element = document.querySelector(selector);
      if (element) {
        element.textContent = `Device Dimensions: ${width}px (Width) x ${height}px (Height)`;
      }
    },

    // Display device information
    displayDeviceInfo: function (selector) {
      const element = document.querySelector(selector);
      if (element) {
        if (navigator.userAgentData) {
          const deviceName = navigator.userAgentData.brands[0].brand;
          element.textContent = "Device Name: " + deviceName;
        } else {
          const userAgent = navigator.userAgent;
          const match = userAgent.match(/\((.*?)\)/);
          element.textContent = match ? "Your Device Name Is: " + match[1] : "Unable to Find Device Info";
        }
      }
    },

    // Display battery information
    displayBatteryInfo: function (selector) {
      const element = document.querySelector(selector);
      if (element && 'getBattery' in navigator) {
        navigator.getBattery().then(function (battery) {
          function updateBatteryStatus() {
            element.textContent = `Battery Percentage: ${(battery.level * 100).toFixed(2)}%`;
          }
          updateBatteryStatus();
          battery.addEventListener('levelchange', updateBatteryStatus);
        });
      } else if (element) {
        element.textContent = "Battery API is not supported by your browser.";
      }
    },

    // Display greeting based on time
    displayGreeting: function (selector) {
      const element = document.querySelector(selector);
      if (element) {
        const hour = new Date().getHours();
        const greeting =
          hour >= 5 && hour < 12
            ? "Good morning 🌄!"
            : hour >= 12 && hour < 17
            ? "Good afternoon 😋!"
            : hour >= 17 && hour < 22
            ? "Good evening 🌆!"
            : "Good night 🌙!";
        element.textContent = greeting;
      }
    },

    // Vibration function
    vibrate: function (ms) {
      navigator.vibrate(ms);
    },

    // Leaflet map with user location
    initMap: function (mapId) {
      const mapElement = document.getElementById(mapId);
      if (mapElement) {
        mapElement.style.border = "2px solid #007BFF";
        mapElement.style.borderRadius = "10px";
        mapElement.style.margin = "20px auto";
      }

      const map = L.map(mapId);
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
          const { latitude, longitude } = position.coords;
          map.setView([latitude, longitude], 15);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
          }).addTo(map);
          const marker = L.marker([latitude, longitude]).addTo(map);
          marker.bindPopup("<b>Your Location ❤️</b>").openPopup();
        });
      } else {
        alert('Geolocation is not supported by your browser.');
      }
    },

    // Show/close dialog
    openDialog: function (dialogId) {
      const dialog = document.querySelector(dialogId);
      if (dialog) dialog.showModal();
    },
    closeDialog: function (dialogId) {
      const dialog = document.querySelector(dialogId);
      if (dialog) dialog.close();
    },

    // Handle visibility change
    handleVisibilityChange: function () {
      document.addEventListener('visibilitychange', function () {
        if (!document.hidden) {
          myLibrary.messege("Welcome back to the page!", "Glad to have you back 💓!", "IMG-20230719-WA0007.jpg");
        }
      });
    },

    // Scroll to top
    scrollToTop: function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Export the library
  if (typeof module !== "undefined" && module.exports) {
    module.exports = myLibrary;
  } else {
    global.myLibrary = myLibrary;
  }
})(this);
