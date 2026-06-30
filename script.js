// ==========================================================================
// EXISTING SCROLL REVEAL SCRIPT
// ==========================================================================
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));


// ==========================================================================
// NEW: LOOPING TYPE/DELETE ANIMATION
// ==========================================================================
const typewriterElement = document.getElementById('typewriter');

// Defensive check: only run the script if the element exists on the current page
if (typewriterElement) {
    // You can add more phrases inside this array if you want them to loop alternatingly!
    const phrases = ["Jade Patrick", "a ComScie Student", "a Tech Explorer"];
    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function playTypewriter() {
        const currentPhrase = phrases[phraseIdx];
        
        if (isDeleting) {
            // Remove a character
            typewriterElement.textContent = currentPhrase.substring(0, charIdx - 1);
            charIdx--;
        } else {
            // Add a character
            typewriterElement.textContent = currentPhrase.substring(0, charIdx + 1);
            charIdx++;
        }

        // Speed settings: Deleting is usually faster than typing
        let dynamicSpeed = isDeleting ? 50 : 120;

        // If the phrase is completely typed out
        if (!isDeleting && charIdx === currentPhrase.length) {
            dynamicSpeed = 2000; // Pause at the end for 2 seconds so people can read it
            isDeleting = true;
        } 
        // If the phrase is completely erased
        else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length; // Safely cycle to the next phrase loop
            dynamicSpeed = 400; // Small pause before typing the next word
        }

        setTimeout(playTypewriter, dynamicSpeed);
    }

    // Initialize the typewriter cycle on load
    document.addEventListener("DOMContentLoaded", playTypewriter);
}

// ==========================================================================
// IMAGE LIGHTBOX LOGIC
// ==========================================================================
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("expanded-img");
const closeBtn = document.getElementsByClassName("close-modal")[0];

// Get all certificate images
const certImages = document.querySelectorAll(".cert-img");

// Loop through each image and add a click event
certImages.forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src; // Sets the popup image to the one you clicked
    });
});

// Close the modal when the "X" is clicked
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close the modal if you click anywhere in the dark background
modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

/* ==========================================================================
   VIDEO LIGHTBOX MODAL (For Projects Page)
   ========================================================================== */
const videoModal = document.getElementById('video-modal');
const expandedVideo = document.getElementById('expanded-video');
const projectVideos = document.querySelectorAll('.project-video');
const closeVideoBtn = document.querySelector('.close-video-modal');

if (videoModal && expandedVideo) {
    // 1. When a project video is clicked
    projectVideos.forEach(video => {
        video.addEventListener('click', () => {
            videoModal.style.display = 'block';
            expandedVideo.src = video.src; // Copy the video source
            expandedVideo.play(); // Auto-play the zoomed video
        });
    });

    // 2. When the 'X' is clicked
    if (closeVideoBtn) {
        closeVideoBtn.addEventListener('click', () => {
            videoModal.style.display = 'none';
            expandedVideo.pause(); // Stop playing
            expandedVideo.src = ""; // Clear source so it doesn't play in background
        });
    }

    // 3. When clicking anywhere outside the video to close it
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            videoModal.style.display = 'none';
            expandedVideo.pause();
            expandedVideo.src = "";
        }
    });
}