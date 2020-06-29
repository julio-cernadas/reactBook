// let xhr = new XMLHttpRequest();
// xhr.open('get', "https://ipinfo.io/json");
// xhr.send();
// xhr.onload = function () {
//     console.log(xhr.response);
// };


// function reqListener() {
//     console.log(this.responseText);
// }
// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "https://ipinfo.io/json");
// oReq.send();

// create a new XMLHttpRequest
var xhr = new XMLHttpRequest()

// get a callback when the server responds
xhr.addEventListener('load', () => {
    // update the state of the component with the result here
    console.log(xhr.responseText)
})
// open the request with the verb and the url
xhr.open('GET', 'https://ipinfo.io/json')
// send the request
xhr.send()