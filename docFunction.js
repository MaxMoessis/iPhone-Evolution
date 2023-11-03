$(document).ready(function() {
    var steveVideo = $('#announcement-vid');
    var playButton = $('#playButton');
    var playIcon = $('#playIcon');
    var pauseIcon = $('#pauseIcon');
    var vidContainer = $('#vid-container');
    var scrollHelp = $('#indication');

    steveVideo.on('ended', function() {
        // Use jQuery's animate method to scroll smoothly
        $('html, body').animate({
            scrollTop: 900
        }, 1500);
    });

    // Functions to control when the play/pause button is showing (and scroll text)

    function hideScrollHelp() {
        scrollHelp.delay(2000).fadeOut();
    }

    function showScrollHelp() {
        scrollHelp.stop(true, true).css('display', 'block');
        hideScrollHelp();
    }
    
    function hidePlayButton() {
        playButton.delay(2000).fadeOut();
    }
    
    function showPlayButton() {
        playButton.stop(true, true).css('display', 'block'); 
        hidePlayButton();
    }    
    
    // handles the play/pause button functionality
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

    vidContainer.on('mousemove', function() {
        showPlayButton(); // Show the button on mousemove
        showScrollHelp(); // Show the 'scroll down to pause/play' text
    });


    hidePlayButton(); // Initially start hiding the button
    hideScrollHelp(); // Initially start hiding the scroll help

    // Function to handle scroll animation for elements with the "text-animate" class
    function handleTextAnimations() {
        $('.text-animate').each(function() {
            var text = $(this);
            var triggerPoint = text.offset().top - 550;

            var scrollPos = $(window).scrollTop();
            if (scrollPos >= triggerPoint && scrollPos <= triggerPoint + 510) {
                text.addClass('visible');
            } else {
                text.removeClass('visible');
            }
        });
    }

    // I wanted some animations (like iPhone headers) to stay when the user scrolls past them
    function handleStayingTextAnimations() {
        $('.text-animate-stay').each(function() {
            var text = $(this);
            var triggerPoint = text.offset().top - 550;

            var scrollPos = $(window).scrollTop();
            if (scrollPos >= triggerPoint) {
                text.addClass('visible');
            } else {
                text.removeClass('visible');
            }
        });
    }

    $(window).scroll(function () {
        // Handle animation on scroll
        handleTextAnimations();
        handleStayingTextAnimations();

        var _scrollPos = $(window).scrollTop();

        // Pause the video when the pageYOffset is 20 or more
        if (_scrollPos >= 20) {
            steveVideo.get(0).pause();
            playIcon.css('display', 'block');
            pauseIcon.css('display', 'none');
        } else {
            steveVideo.get(0).play();
            playIcon.css('display', 'none');
            pauseIcon.css('display', 'block');
        }
    });

});