// Closures

function parent(){
    
    let clouserData = "Clouser data";

    function child(){
        console.log(clouserData) // O/P : Clouser data
    }

    child()
}
parent()