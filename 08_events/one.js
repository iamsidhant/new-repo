// document.getElementById('owl').onclick = function () {
//     alert("owl clicked")
// }

// attachEvent()
// jQuery - on

// *************    Properties     *************

// type - returns a string containing event's type
// timestamp - returns time in milliseconds
// preventDefault - method tells the user agent that if event does not handled explicitly then its default actions should not be taken as normally would be.

// target - reference to a object onto which element was dispatched

// currentTarget - identifies the current target for the event, as the event traverses the DOM. It always refers to the  element to which the event handler has been attached

// clientX - Provides the horizontal coordinate within the application's viewport at which event occured
// clientY - Provides the vertical coordinate within the application's viewport at which event occured

// screenX - Provides the horizontal coordinate (offset) of the mouse pointer in global (screen) coordinates 
// screenY - Provides the vertical coordinate (offset) of the mouse pointer in global (screen) coordinates


// altkey - boolean value that indicates whether the alt key was pressed or not when a given mouse event occurs
// ctrlkey - boolean value that indicates whether the ctrl key was pressed or not when a given mouse event occurs
// shiftkey - boolean value that indicates whether the shift key was pressed or not when a given mouse event occurs
// code - this property returns a value that isn't altered by keyboard layout or the state of the modifier keys


// document.getElementById('images').addEventListener('click', function(e) {
//     console.log("clicked inside the ul");
// }, false)

// document.getElementById('owl').addEventListener('click', function(e) {
//     console.log("owl clicked");
//     e.stopPropagation();
// }, false)

// document.getElementById('google').addEventListener('click', function(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("google clicked");
// }, false)


document.querySelector('#images').addEventListener('click', function(e) {
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
    }

})

// removeIt.parentNode.removeChild(removeIt)
