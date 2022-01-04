//Calculate the return

function returnMoney(taken,price){
    let returnSum=taken-price;
    let give={}
    let names=["50er","20er","10er","5er","2er","1er",0.5,0.2,0.1,0.05,0.02,0.01]
    let coins=[50,20,10,5,2,1,0.5,0.2,0.1,0.05,0.02,0.01]
    console.log(returnSum);
    for(i=0;i<coins.length;i++){
        if(returnSum>coins[i]){
            give[names[i]]=Math.floor(returnSum/coins[i])
            returnSum=returnSum%coins[i]
            // console.log(give);
        } 
    }
    console.log(give);
}

returnMoney(100,3.11)