$(document).ready(function() {
    var steveVideo = $('#announcement-vid');
    var playButton = $('#playButton');
    var playIcon = $('#playIcon');
    var pauseIcon = $('#pauseIcon');
    var vidContainer = $('#vid-container');

    steveVideo.on('ended', function() {
        // Use jQuery's animate method to scroll smoothly
        $('html, body').animate({
            scrollTop: 900
        }, 1500);
    });
    
    function hidePlayButton() {
        playButton.delay(2000).fadeOut();
    }
    
    function showPlayButton() {
        playButton.stop(true, true).css('display', 'block'); 
        hidePlayButton();
    }    
    
    // handles the play/pause button
    playButton.on('click', function() {
        if (steveVideo.get(0).paused) {
            steveVideo.get(0).play();
            playIcon.css('display', 'none');
            pauseIcon.css('display', 'block');
        } else {
            steveVideo.get(0).pause();
            playIcon.css('display', 'block');
            pauseIcon.css('display', 'none');
        }
    });


    vidContainer.on('mousemove', showPlayButton); // Show the button on mousemove
    hidePlayButton(); // Initially start hiding the button

    /* Header Animation */
    var animatedHeader = $('#main-header');
    var headerAnimationTriggerpoint = animatedHeader.offset().top - 500;

    var introText = $('#introduction-txt');
    var introTextTP = introText.offset().top - 500;

    $(window).scroll(function () {
        var scrollPos = $(this).scrollTop();

        // handles when the text fade in animations activate
        if (scrollPos >= headerAnimationTriggerpoint) {
            animatedHeader.addClass('visible');
            console.log("ayoyoyeyoyoyo"); // debugging purposes (ignore)
        } else {    
            animatedHeader.removeClass('visible'); // let's the animation redo when the user scrolls down again
        }

        if (scrollPos >= introTextTP) {
            introText.addClass('visible');
            console.log("uhhhhh");
        } else {
            introText.removeClass('visible');
        }

        // Pause the video when the pageYOffset is 20 or more
        if (scrollPos >= 20) {
            steveVideo.get(0).pause();
        } else {
            steveVideo.get(0).play();
        }
    });

});