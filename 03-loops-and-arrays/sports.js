var sportSOne = ["Golf", "Cricket", "Swimming", "TableTennis"];
/*for(let i=0; i<sportSOne.length; i++){
    console.log(sportSOne[i]);
}

//Let's use the simplied for loop

for(let tempSport of sportSOne){
    console.log(tempSport);
}*/
// Using if condition
for (var _i = 0, sportSOne_1 = sportSOne; _i < sportSOne_1.length; _i++) {
    var tempSport = sportSOne_1[_i];
    if (tempSport == "Cricket") {
        console.log(tempSport + " << My Favourite");
    }
    else {
        console.log(tempSport);
    }
}
