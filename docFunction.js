$(document).ready(function() {
    var video = document.getElementById('announcement-vid');
    var playButton = document.getElementById('playButton');
    var playIcon = document.getElementById('playIcon');
    var pauseIcon = document.getElementById('pauseIcon');
    var vidContainer = document.getElementById('vid-container');
    var timeout; // Variable to store the timeout ID for hiding the button

    video.addEventListener("ended", function() {
        // Scroll to the desired pageYOffset value (850 in this case)
        window.scrollTo({
            top: 850,
            behavior: "smooth" // You can use "auto" for instant scroll
        });
    });
    
    function hidePlayButton() {
        timeout = setTimeout(function() {
            playButton.style.display = 'none';
        }, 2000);
    }

    function showPlayButton() {
        playButton.style.display = 'block';
        clearTimeout(timeout); // Clear the previous timeout
        hidePlayButton(); // Start a new timeout for hiding the button
    }

    // handles the play/pause button
    playButton.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        } else {
            video.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        }
    });

    vidContainer.addEventListener('mousemove', showPlayButton); // Show the button on mousemove
    hidePlayButton(); // Initially start hiding the button

    /* Header Animation */
    var animatedHeader = $('#main-header');
    var headerAnimationTriggerpoint = animatedHeader.offset().top - 500;

    var introText = $('#introduction-txt');
    var introTextTP = introText.offset().top - 500;

    $(window).scroll(function () {
        var scrollPos = $(this).scrollTop();

        // handles when the header animation activates
        if (scrollPos >= headerAnimationTriggerpoint) {
            animatedHeader.addClass('visible');
            console.log("ayoyoyeyoyoyo"); // debugging purposes (ignore)
        } else {    // let's the animation redo when the user scrolls down again
            animatedHeader.removeClass('visible');
        }

        if (scrollPos >= introTextTP) {
            introText.addClass('visible');
            console.log("uhhhhh");
        } else {
            introText.removeClass('visible');
        }

        // Pause the video when the pageYOffset is 20 or more
        if (scrollPos >= 20) {
            video.pause();
        }
    });

    
});