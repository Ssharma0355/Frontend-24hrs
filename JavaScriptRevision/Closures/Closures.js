// Closures

function parent(){

    let clouserData = "Clouser data";

    function child(){
        console.log(clouserData) // O/P : Clouser data
    }

    // child()
    return child
}
// parent()
let itRemembers = parent(); // function is invoked here

// 1000 lines of code

itRemembers(); // even after parent is executed 
// the child() still remembers the parents variable with the help of variable name(clouserData) reference

