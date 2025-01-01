document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");
  
    // Function to hide all sections
    const hideAllSections = () => {
      sections.forEach((section) => {
        section.style.display = "none";
      });
    };
  
    // Function to show the target section
    const showSection = (targetId) => {
      hideAllSections();
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.style.display = "block";
      }
    };
  
    // Attach event listeners to navigation links
    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute("data-target");
        showSection(targetId);
      });
    });
  
    // Initially show only the home section
    showSection("home");
  });