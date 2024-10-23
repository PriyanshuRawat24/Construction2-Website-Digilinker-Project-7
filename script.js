/* ---- CORE SCRIPT ---- */
$(document).ready(function () {
  $(".line-progress").each(function () {
    var progressBar = $(this);
    var percentage = parseFloat(progressBar.data("percent"));
    var colorStops = getColorStops(percentage);

    progressBar.css({
      background: "linear-gradient(to right, " + colorStops.join(", ") + ")",
      width: "0%", // Set initial width to 0 for animation
    });

    if (!isNaN(percentage) && percentage > 0) {
      var displayPercentage =
        percentage % 1 === 0 ? Math.round(percentage) : percentage.toFixed(2);
      progressBar.append(
        '<div class="progress-text">' + displayPercentage + "%</div>"
      );

      // Update tooltip content with combined percentage text and quality description with color class
      var qualityDescription = getQualityDescription(percentage);
      var tooltipContent =
        'Property Score:<br><span class="text-' +
        qualityDescription.colorClass +
        '">' +
        displayPercentage +
        "% - " +
        qualityDescription.text +
        "</span>";
      progressBar.attr("title", tooltipContent);

      // Animate the width of the progress bar
      progressBar.animate(
        {
          width: percentage + "%",
        },
        1000
      ); // Adjust the duration as needed
    }
  });

  function getColorStops(percentage) {
    if (percentage >= 0 && percentage <= 25) {
      return ["#EE324B", "#EE324B"];
    } else if (percentage > 25 && percentage <= 50) {
      return ["#EE324B", "#F66026"];
    } else if (percentage > 50 && percentage <= 75) {
      return ["#F66026", "#F3B407"];
    } else if (percentage > 75 && percentage <= 100) {
      return ["#F3B407", "#6FD913"];
    }
  }

  function getQualityDescription(percentage) {
    if (percentage <= 25) {
      return { text: "Poor", colorClass: "danger" }; // Description for low progress
    } else if (percentage <= 50) {
      return { text: "Fair", colorClass: "warning" }; // Description for medium-low progress
    } else if (percentage <= 75) {
      return { text: "Good", colorClass: "info" }; // Description for medium-high progress
    } else {
      return { text: "Excellent", colorClass: "success" }; // Description for high progress
    }
  }
});

/* ---- BOOTSTRAP TOOLTIP SCRIPT ----- */
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// // navbar

// const menuList = document.querySelector(".menu-list");  // Targeting the menu list
// const iconBtn = document.querySelector(".icon-btn");

// // Initially hide the menu list
// menuList.style.display = "none";

// iconBtn.addEventListener("click", () => {
//     if (menuList.style.display === "none") {
//         menuList.style.display = "flex";  // Show the menu
//         menulist.style.animation = "fadeIn 0.5s ease";
//     } else {
//         menuList.style.display = "none";  // Hide the menu
//     }
// });
