

        $(document).ready(function() {
            var video = document.getElementById('announcement-vid');
            var playButton = document.getElementById('playButton');
            var playIcon = document.getElementById('playIcon');
            var pauseIcon = document.getElementById('pauseIcon');
            var vidContainer = document.getElementById('vid-container');
            var timeout; // Variable to store the timeout ID for hiding the button

            video.addEventListener('ended', function() {
                $('html, body').animate({
                    scrollTop: $(document).height()
                }, {
                    duration: 3000, // Animation duration in milliseconds
                    easing: 'swing', // Use 'swing' for ease-in-ease-out effect
                    complete: function() {
                        $('html').css('display', 'block');
                    }
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
        });