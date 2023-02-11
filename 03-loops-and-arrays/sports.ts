let sportSOne: string[] = ["Golf", "Cricket", "Swimming", "TableTennis"]

/*for(let i=0; i<sportSOne.length; i++){
    console.log(sportSOne[i]);
}

//Let's use the simplied for loop

for(let tempSport of sportSOne){
    console.log(tempSport);
}*/

// Using if condition
for(let tempSport of sportSOne){
    if(tempSport == "Cricket"){
    console.log(tempSport + " << My Favourite");
    }else{
        console.log(tempSport);
    }
}