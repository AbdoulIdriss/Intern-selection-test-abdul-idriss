
// function createCounter() {
//     var count = 0;
    
//     setInterval(function() {
//         count++;
//         console.log(count);
//     }, 1000);
// }

// createCounter()

// setTimeout(function() {
//     console.log(count);
    
// } , 5000);

// 1-) ReferenceError: count is not defined

// 2- The variable count is declared inside createCounter, making it accessible only within that function. The setTimeout callback tries to access count from the global scope, but it does not exist there.
// The setInterval will keep running indefinitely without stopping .

// 3
function createCounter() {
    let count = 0;

    setInterval(function () {
        count++;
        console.log(count);
    }, 1000);

    return function getCount() {
        return count;
    };
}

const getCount = createCounter();

setTimeout(function () {
    console.log(getCount());
}, 5000);