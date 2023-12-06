// let koha
// koha = new Date()
// console.log(koha)


// var intervalli = setInterval(test, 6000);

// function test() {

// }


// var count = 0;
// var detyra = setInterval(test, 1000);

// function test() {
//     console.log(count);
//     count ++;
//     if(count == 10) {
//         clearInterval(detyra);
//     }
// }


// function shfaqOren() {
//     const clock = new Date();
//     const org = clock.toLocaleDateString();
//     document.getElementById('ora').innerHTML
// }

// function startInterval() {
//     shfaqOren();
//     intervalId = setInterval(shfaqOren, 1000);
// }

// function stopInterval() {
//     clearInterval(intervalId);
// }

let intervalId;

function shfaqOren() {
    const clock = new Date();
    const ora = clock.toLocaleTimeString();
    document.getElementById('ora').innerHTML = ora;
}

function startInterval() {
    shfaqOren();
    intervalId = setInterval(shfaqOren, 1000);
}

function stopInterval(){
    clearInterval(intervalId)
}
// strg z = zurück