document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu a");
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile nav toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isExpanded));
      navMenu.classList.toggle("active");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Contact form
  const form = document.getElementById("contact-form");
  const statusEl = document.getElementById("form-status");
  const submitBtn = document.getElementById("submit-btn");

  if (!form || !statusEl || !submitBtn) {
    console.error("Contact form elements not found.");
    return;
  }

  const API_URL = "https://uqlhji7m76.execute-api.ca-central-1.amazonaws.com/contact";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    statusEl.textContent = "";
    statusEl.style.color = "";

    const name = document.getElementById("name")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const message = document.getElementById("message")?.value.trim() || "";
    const website = document.getElementById("website")?.value.trim() || "";

    if (website) {
      statusEl.textContent = "Spam detected.";
      statusEl.style.color = "red";
      return;
    }

    if (name.length < 2 || name.length > 80) {
      statusEl.textContent = "Name must be between 2 and 80 characters.";
      statusEl.style.color = "red";
      return;
    }

    if (!isValidEmail(email)) {
      statusEl.textContent = "Please enter a valid email address.";
      statusEl.style.color = "red";
      return;
    }

    if (message.length < 10 || message.length > 2000) {
      statusEl.textContent = "Message must be between 10 and 2000 characters.";
      statusEl.style.color = "red";
      return;
    }

    const payload = { name, email, message };

    try {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      console.log("Submitting payload:", payload);

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      console.log("Response status:", response.status);

      const rawText = await response.text();
      console.log("Raw response:", rawText);

      let data = {};
      try {
        data = rawText ? JSON.parse(rawText) : {};
      } catch (parseError) {
        console.error("JSON parse error:", parseError);
        throw new Error("Server returned invalid JSON.");
      }

      if (response.ok && data.ok) {
        statusEl.textContent = "Message sent successfully.";
        statusEl.style.color = "green";
        form.reset();
      } else {
        statusEl.textContent = data.error || data.message || "Something went wrong. Please try again.";
        statusEl.style.color = "red";
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      statusEl.textContent = error.message || "Network error. Please try again later.";
      statusEl.style.color = "red";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    }
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});