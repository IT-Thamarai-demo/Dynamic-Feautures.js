(function (global, factory) {
  if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = factory(); // CommonJS/Node.js support
  } else if (typeof define === "function" && define.amd) {
    define(factory); // AMD support
  } else {
    global.MyLibrary = factory(); // Attach to global object for browser
  }
})(this, () => {
  "use strict";

  const MyLibrary = {
    /**
     * Show a stylized browser notification.
     * @param {string} title - Notification title.
     * @param {string} body - Notification body.
     * @param {string} [icon] - Optional icon URL.
     */
    notify(title, body, icon) {
      if ("Notification" in window) {
        Notification.requestPermission()
          .then(res => {
            if (res === "granted") {
              new Notification(title, {
                body,
                icon,
              });
            } else {
              console.warn("Notification permission denied.");
            }
          })
          .catch(err => console.error("Notification error:", err));
      } else {
        console.warn("Notifications are not supported by this browser.");
      }
    },

    /**
     * Create a styled button with animations.
     * @param {string} label - Button text.
     * @param {Function} onClick - Function to execute on button click.
     * @param {string} [selector] - CSS selector for attaching the button.
     */
    createStyledButton(label, onClick, selector) {
      const button = document.createElement("button");
      button.textContent = label;
      button.style.cssText = `
        padding: 12px 20px;
        font-size: 16px;
        color: #fff;
        background: linear-gradient(90deg, #4b6cb7, #182848);
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: transform 0.2s ease-in-out, box-shadow 0.3s;
      `;

      button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.05)";
        button.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
      });

      button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
        button.style.boxShadow = "none";
      });

      button.addEventListener("click", onClick);

      const target = selector ? document.querySelector(selector) : document.body;
      target.appendChild(button);
    },

    /**
     * Create a styled modal popup.
     * @param {string} content - HTML content for the modal.
     */
    createStyledModal(content) {
      const modal = document.createElement("div");
      modal.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        padding: 20px;
        width: 80%;
        max-width: 500px;
        z-index: 9999;
      `;

      const overlay = document.createElement("div");
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 9998;
      `;

      const closeButton = document.createElement("button");
      closeButton.textContent = "Close";
      closeButton.style.cssText = `
        margin-top: 20px;
        padding: 10px 15px;
        font-size: 14px;
        color: #fff;
        background: #e74c3c;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      `;
      closeButton.addEventListener("click", () => {
        document.body.removeChild(modal);
        document.body.removeChild(overlay);
      });

      modal.innerHTML = content;
      modal.appendChild(closeButton);
      document.body.appendChild(overlay);
      document.body.appendChild(modal);
    },

    /**
     * Add a ripple effect to any element.
     * @param {string} selector - CSS selector for the target element.
     */
    addRippleEffect(selector) {
      const elements = document.querySelectorAll(selector);

      elements.forEach(el => {
        el.style.position = "relative";
        el.style.overflow = "hidden";

        el.addEventListener("click", function (e) {
          const ripple = document.createElement("span");
          ripple.style.cssText = `
            position: absolute;
            width: 100px;
            height: 100px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
          `;
          const rect = el.getBoundingClientRect();
          ripple.style.left = `${e.clientX - rect.left - 50}px`;
          ripple.style.top = `${e.clientY - rect.top - 50}px`;

          el.appendChild(ripple);
          ripple.addEventListener("animationend", () => el.removeChild(ripple));
        });
      });

      // Ripple animation styles
      const rippleStyle = document.createElement("style");
      rippleStyle.textContent = `
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(rippleStyle);
    },

    /**
     * Add a styled tooltip to any element.
     * @param {string} selector - CSS selector for the target element.
     * @param {string} tooltipText - Tooltip text to display.
     */
    addStyledTooltip(selector, tooltipText) {
      const elements = document.querySelectorAll(selector);

      elements.forEach(el => {
        const tooltip = document.createElement("span");
        tooltip.textContent = tooltipText;
        tooltip.style.cssText = `
          position: absolute;
          background: #333;
          color: #fff;
          padding: 5px 10px;
          border-radius: 5px;
          font-size: 12px;
          display: none;
          z-index: 1000;
        `;

        el.style.position = "relative";
        el.addEventListener("mouseover", () => {
          tooltip.style.display = "block";
          tooltip.style.left = `${el.offsetWidth / 2 - tooltip.offsetWidth / 2}px`;
          tooltip.style.top = `${-tooltip.offsetHeight - 5}px`;
          el.appendChild(tooltip);
        });

        el.addEventListener("mouseout", () => {
          tooltip.style.display = "none";
          el.removeChild(tooltip);
        });
      });
    },
  };

  return MyLibrary;
});
