
        function play() {
            var player = document.getElementById("test");
            if (player.paused) {
                player.src = 'music.mp3';
                player.play();
            } else {
                player.pause();
                player.src = '';
            }
        }