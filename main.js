let currentKey
let typed=document.getElementById("typed")
let q=document.getElementById("q")
console.log(q);
window.addEventListener("keydown", function(e){
    currentKey=e.key;
    typed.innerText=e.key;
    console.log(currentKey);
    if(currentKey=="q"){
        q.style="background-color:green";
    }
})
function changeColor(event){
    const id=event.target.id;
    console.log(event.taget.id);
}
document.body.addEventListener("keydown", changeColor)

let sentences = "Was du liebst, lass frei. Kommt es zurück, gehört es dir - für immer.";
let nextKey=sentences[0]
console.log(nextKey);
// window.addEventListener("keydown", function(event) {
//     const p = document.createElement("p");
//     p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
//     document.getElementById("output").appendChild(p);
//   }, true);