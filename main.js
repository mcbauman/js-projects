let currentKey
let typed=document.getElementById("typed")
let q=document.getElementById("q")
console.log(q);
window.addEventListener("keydown", function(e){
    currentKey=e.key;
    typed.innerText=e.key;
    console.log(currentKey);
})

let sentences = "Was du liebst, lass frei. Kommt es zurück, gehört es dir - für immer."
// window.addEventListener("keydown", function(event) {
//     const p = document.createElement("p");
//     p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
//     document.getElementById("output").appendChild(p);
//   }, true);