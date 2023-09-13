const sayDate = function(str) {
    console.log(str, Date.now());
}

const intervalid = setInterval(sayDate, 1000, "Hi")

clearInterval(intervalid)

document.querySelector("#start").addEventListener('click', function() {
    if (!intervalid) {
        setInterval(() => {
            console.log(Date.now());
        }, 1000);
    }
})

document.querySelector("#stop").addEventListener('click', function() {
    if (intervalid) {
        clearInterval(intervalid)
    }
})

