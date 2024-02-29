
// MOBILE DROPDOWN MENU & TOGGLE BUTTON

const mobileMenuBtn = document.querySelector(".hamburger");
const mobileMenuDropdown = document.querySelector(".bottom-mobile-menu");
const navOverlay = document.querySelector(".overlay");
const topHeader = document.querySelector(".top-header");

mobileMenuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  mobileMenuDropdown.classList.toggle("active");
  navOverlay.classList.toggle("active");
  mobileMenuBtn.classList.toggle("cross");
  topHeader.classList.toggle("active");

  // Toggle a class on the body to handle overflow
  document.body.classList.toggle("no-scroll", mobileMenuDropdown.classList.contains("active"));
}






// HEADER SCROLL
const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.add("scroll-up");
  }
  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  }
  if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
})


//  MOBILE DROP DOWN MENU
const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    mobileMenuDropdown.classList.toggle("active");
    mobileMenuBtn.classList.toggle("cross");
    
    navOverlay.classList.remove("active");
    

  });
}


document.addEventListener('DOMContentLoaded', function () {
  // Wait for the DOM to be fully loaded before attaching the event listener.

  // Get the phone link element by its class name.
  let phoneLink = document.querySelector('.phone-icon');

  // Check if the phone link element exists.
  if (phoneLink) {
      // Attach a click event listener to the phone link.
      phoneLink.addEventListener('click', function (event) {
          // Prevent the default behavior of the anchor tag (preventing the navigation).
          event.preventDefault();
          
          // Call the function with the desired phone number.
          callPhoneNumber('+01904 900159');
      });
  }
});

function callPhoneNumber(phoneNumber) {
  // Open the phone dialer with the specified phone number.
  window.location.href = 'tel:' + phoneNumber;
}







document.addEventListener('DOMContentLoaded', function () {
    var video = document.querySelector('.video-bg');

    // Check if the video is paused and if user interaction is required
    if (video.paused && video.play) {
        // Attempt to play the video
        video.play()
            .then(function () {
                // Video playback started successfully
            })
            .catch(function (error) {
                // Autoplay was prevented, handle the error or inform the user
                console.error('Autoplay was prevented:', error);
            });
    }
});