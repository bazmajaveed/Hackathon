// // Get toggle button  element
// const toggle_button= document.getElementById("toggleButton") as HTMLButtonElementconst
// // Function to toggle button
// function toggle_btn(){
//     if(toggle_button.textContent ==="OFF"){
//         toggle_button.textContent ="ON";
//         toggle_button.classList.add("ON")
//     }else{
//         toggle_button.textContent ="OFF";
//         toggle_button.classList.remove("ON")
//     }
// }
// // Add an event listner to the button
// toggle_button.addEventListener("click", toggle_btn)
var btn = function toggle_button() {
    if (toggle_button.arguments === "OFF") {
        toggle_button.arguments = "ON";
        toggle_button.arguments("ON");
    }
    else {
        toggle_button.arguments = "OFF";
        toggle_button.arguments("ON");
    }
};
console.log(btn);
