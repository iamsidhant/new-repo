const saySidhant = function(){
    console.log("Sidhant");
}

// setTimeout(saySidhant, 2000)


const changeText  = function(){
    document.querySelector("h1").innerHTML = "Best JavaScript Series"
}

const ChangeMe = setTimeout(changeText, 2000)

document.querySelector("#stop").addEventListener('click', function(){
    clearTimeout(ChangeMe)
    console.log("STOPPED");
})

