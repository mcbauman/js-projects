//Calculate the return
function Return(taken,price){
    let returnSum=taken-price;
    let give={}
    console.log(returnSum);
    if(returnSum>50){
        give["50"]=Math.floor(returnSum/50)
        returnSum=returnSum%50
    }
    if(returnSum>20){
        give["20"]=Math.floor(returnSum/20)
        returnSum=returnSum%20
    }
    if(returnSum>10){
        give["10"]=Math.floor(returnSum/10)
        returnSum=returnSum%10
    }
    if(returnSum>5){
        give["5"]=Math.floor(returnSum/5)
        returnSum=returnSum%5
    }
    if(returnSum>2){
        give["2"]=Math.floor(returnSum/2)
        returnSum=returnSum%2
    }
    if(returnSum>1){
        give["1"]=Math.floor(returnSum/1)
        returnSum=returnSum%1
    }
    if(returnSum>0.5){
        give["0.5"]=Math.floor(returnSum/0.5)
        returnSum=returnSum%0.5
    }
    if(returnSum>0.2){
        give["0.2"]=Math.floor(returnSum/0.2)
        returnSum=returnSum%0.2
    }
    if(returnSum>0.1){
        give["0.1"]=Math.floor(returnSum/0.1)
        returnSum=returnSum%0.1
    }
    if(returnSum>0.05){
        give["0.05"]=Math.floor(returnSum/0.05)
        returnSum=returnSum%0.05
    }
    if(returnSum>0.02){
        give["0.02"]=Math.floor(returnSum/0.02)
        returnSum=returnSum%0.02
    }
    if(returnSum>0.01){
        give["0.01"]=Math.floor(returnSum/0.01)
        returnSum=returnSum%0.01
    }
    console.log(give);
}

Return(100,13.49)