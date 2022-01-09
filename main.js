let currentKey;
const allKeys=["q","w","e","r","t","z","u","i","o","p","ü","a","s","d","f","g","h","j","k","l","ö","ä","y","x","c","v","b","n","m",",","."," "];
let counter=0
let sentences = "was du liebst, lass frei. kommt es zurück, gehört es dir - für immer!";
let nextKey=sentences[0];
let typed=document.getElementById("typed");
window.addEventListener("keydown", function(e){
    currentKey=e.key;
    typed.innerText=e.key;
    if(currentKey!=nextKey){
        for(i=0;i<allKeys.length;i++){
            if(currentKey==allKeys[i]){
                document.getElementById(allKeys[i]).style.boxShadow="3px 3px 5px red inset";
            }else{
                document.getElementById(allKeys[i]).style.boxShadow="3px 3px 5px black inset";
                }
        }
    }
    if(currentKey==nextKey){
        for(i=0;i<allKeys.length;i++){
            if(currentKey==allKeys[i]){
                document.getElementById(allKeys[i]).style.boxShadow="3px 3px 5px lightgreen inset";
            }else{
                document.getElementById(allKeys[i]).style.boxShadow="3px 3px 5px black inset";
                }
        }
        counter ++
        nextKey=sentences[counter]
        for(i=0;i<allKeys.length;i++){
            if(nextKey==allKeys[i]){
                document.getElementById(allKeys[i]).style.backgroundColor="green";
            }else{
                document.getElementById(allKeys[i]).style.backgroundColor="grey";
            }
        }
    }
})

