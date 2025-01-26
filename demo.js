(function (_global) {
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
          video, audio {
            max-width: 100%;
            border-radius: 8px;
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
  
      lazyLoadCSS: function (href) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
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
  
      endIntro: function (containerId) {
        const introDiv = document.getElementById("festivalIntro");
        if (introDiv) {
          introDiv.style.opacity = "0";
          setTimeout(() => {
            introDiv.remove();
            const content = document.getElementById(containerId);
            if (content) content.style.display = "block";
          }, 500);
        }
      },
  
      // Festival intro
      festivalIntro: function ({
        festivalName = "Happy Festival",
        containerId = "content",
        buttonText = "Skip Intro",
        color = "#ff4500",
        imageUrl = "",
        message = "",
      }) {
        // Create festival intro container
        const introDiv = document.createElement("div");
        introDiv.style = `
        position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(255, 255, 255, 0.8); /* Semi-transparent white */
          backdrop-filter: blur(10px); /* Adds a blur effect */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Adds subtle shadow */
          border: 1px solid rgba(255, 255, 255, 0.6); /* Optional border for better visibility */
          border-radius: 15px; /* Adds rounded corners */
          transition: opacity 0.5s ease, transform 0.3s ease; /* Smooth opacity and transform transitions */
        
        `;
        introDiv.id = "festivalIntro";
  
        // Add image
        if (imageUrl) {
          const image = document.createElement("img");
          image.src = imageUrl.startsWith("http") ? imageUrl : `/${imageUrl}`;
          image.alt = "Festival Image";
          image.style = `
            max-width: 50%;
            height: auto;
            border-radius: 10px;
            margin-bottom: 20px;
          `;
          introDiv.appendChild(image);
        }
  
        // Add festival name
        const h1 = document.createElement("h1");
        h1.style = `
          font-size: 2.5rem;
          font-weight: bold;
          text-align: center;
          color: ${color};
          margin-bottom: 10px;
        `;
        h1.id = "festivalTitle";
  
        // Add custom message
        if (message) {
          const p = document.createElement("p");
          p.textContent = message;
          p.style = `
            font-size: 1.2rem;
            color: #333;
            text-align: center;
            margin: 10px 0;
          `;
          introDiv.appendChild(p);
        }
  
        // Add "Skip Intro" button
        const button = document.createElement("button");
        button.textContent = buttonText;
        button.style = `
          padding: 10px 20px;
          font-size: 1rem;
          color: white;
          background-color: #007BFF;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 20px;
        `;
        button.addEventListener("click", () => {
          this.endIntro(containerId);
        });
  
        introDiv.appendChild(h1);
        introDiv.appendChild(button);
        document.body.appendChild(introDiv);
        console.log(introDiv)
  
        // Lazy-load confetti and launch effect
        this.launchConfetti();
  
        // Lazy-load and initialize typing animation
        this.lazyLoadScript("https://cdn.jsdelivr.net/npm/typed.js@2.0.12", () => {
          new Typed("#festivalTitle", {
            strings: [festivalName],
            typeSpeed: 50,
            showCursor: false,
            onComplete: () => {
              setTimeout(() => this.endIntro(containerId), 1000);
            },
          });
        });
      },
    }

    // Initialize library on page load
    window.onload = function () {
      myLibrary.festivalIntro({
        festivalName: "Happy Republic Day 🎉",
        containerId: "content",
        buttonText: "Skip Intro",
        color: "#ff4500",
        imageUrl: "https://www.hindustantimes.com/ht-img/img/2025/01/25/original/Happy_Republic_Day_2_1737788348490.jpg",
        message: "U Academy celebrates this Republic Day with you! 🎓",
      });
    };
  })(this);
  
