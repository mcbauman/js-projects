//Calculate the return
function Return(taken,price){
    let returnSum=taken-price;
    let give={}
    let coins=[50,20,10,5,2,1,0.5,0.2,0.1,0.05,0.02,0.01]
    console.log(returnSum);
    for(i=0;i<coins.length;i++){
        if(returnSum>coins[i]){
            give["coins[i]"]=Math.floor(returnSum/coins[i])
            returnSum=returnSum%coins[i]
        } 
        console.log(give);
    }
    // console.log(give);
}

Return(100,13.49)