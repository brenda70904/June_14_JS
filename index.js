//1. connect button (id= "ClickMe") to JavaScript
const test = document.getElementById("ClickMe");

//2.Define a function that does things when the button is clicked.
function clicked (/** parameter **/ ) {
    alert("I'm clicked");
}

//3. connect "test" (variable) to the functions to trigger the function
test.addEventListener("click", clicked );

//chinging 寫法
//document.getElementById("ClickMe").addEventListener("click", clicked);



const test2 = document.querySelector(".push");
function pushIt (){
    alert("我被點擊了！");
}
test2.addEventListener("click", pushIt);
