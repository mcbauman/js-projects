let currentKey;
const allKeys=["q","w","e","r","t","z","u","i","o","p","ü","a","s","d","f","g","h","j","k","l","ö","ä","y","x","c","v","b","n","m"];
let counter=0
let sentences = "was du liebst, lass frei. kommt es zurück, gehört es dir - für immer.";
let nextKey=sentences[0];
let typed=document.getElementById("typed");
// let q=document.getElementById("q")
console.log(q);
window.addEventListener("keydown", function(e){
    currentKey=e.key;
    typed.innerText=e.key;
    console.log(currentKey);
    // for(i=0;i<allKeys.length;i++){
    //     if(currentKey==allKeys[i]){
    //         allKeys[i].style="background-color:lightgreen";
    //     }
    // }

    if(currentKey==nextKey){
        counter ++
        nextKey=sentences[counter]
        console.log("counter",counter);
        console.log("nextKey",nextKey);
    }

    if(nextKey=="q"){
        q.style="color:green";
    }
    if(currentKey=="q"){
        if(nextKey==currentKey){
            q.style="background-color:lightgreen";
        }else{
            q.style="background-color:red";
        }
        
    }else{
        q.style="background-color:rgb(218, 218, 218)";
    }

    if(nextKey=="w"){
        w.style="color:green";
    }
    if(currentKey=="w"){
        if(nextKey==currentKey){
            w.style="background-color:lightgreen";
        }else{
            w.style="background-color:red";
        }
        
    }else{
        w.style="background-color:rgb(218, 218, 218)";
    }

    if(nextKey=="a"){
        a.style="color:green";
    }
    if(currentKey=="a"){
        if(nextKey==currentKey){
            a.style="background-color:lightgreen";
        }else{
            a.style="background-color:red";
        }
        
    }else{
        a.style="background-color:rgb(218, 218, 218)";
    }
    
    
})


function changeColor(event){
    const id=event.target.id;
    console.log(event.target.id);
}
document.body.addEventListener("keydown", changeColor)


// function changeColor(event){
//     const id=event.target.id;
//     console.log(event.target.id);
// }
// document.body.addEventListener("keydown", changeColor)


