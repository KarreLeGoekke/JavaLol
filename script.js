const onClick = function(url) {
    var playPromise = new Audio(url).play();

    if (playPromise !== undefined) {
        playPromise.then(function() {
          console.log("Yay!");
        }).catch(function(error) {
            console.log("Nay! Error: ", error);
        });
    }
}