let button = document.getElementById("bottle");
console.log("🚀 ~ file: index.js:2 ~ button:", button)
button.addEventListner("onclick", ()=>{
    alert("button clicked")
})

function clickFunction(){
    alert("buttonClicked")
    console.log("ButtonClicked")
}
document.getElementById("bottle").addEventListener("onclick", clickFunction);
