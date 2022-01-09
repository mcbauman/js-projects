let currentKey;
const allKeys=["q","w","e","r","t","z","u","i","o","p","ue","a","s","d","f","g","h","j","k","l","oe","ae","y","x","c","v","b","n","m"];
let counter=0
let sentences = "was du liebst, lass frei. kommt es zurück, gehört es dir - für immer!";
let nextKey=sentences[0];
let typed=document.getElementById("typed");
window.addEventListener("keydown", function(e){
    currentKey=e.key;
    typed.innerText=e.key;
    console.log("currentKey",currentKey);
    console.log("nextKey",nextKey);
    if(currentKey!=nextKey){
        for(i=0;i<allKeys.length;i++){
            if(currentKey==allKeys[i]){
                document.getElementById(allKeys[i]).style.backgroundColor="pink";
            }else{
                document.getElementById(allKeys[i]).style.backgroundColor="grey";
                }
        }
    }
    if(currentKey==nextKey){
        for(i=0;i<allKeys.length;i++){
            if(currentKey==allKeys[i]){
                document.getElementById(allKeys[i]).style.backgroundColor="lightgreen";
            }else{
                document.getElementById(allKeys[i]).style.backgroundColor="grey";
                }
        }
        counter ++
        nextKey=sentences[counter]
        for(i=0;i<allKeys.length;i++){
            if(nextKey==allKeys[i]){
                document.getElementById(allKeys[i]).style.color="green";
            }else{
                document.getElementById(allKeys[i]).style.color="black";
            }
        }
        
        console.log("counter",counter);
        console.log("nextKey",nextKey);
    }
})

