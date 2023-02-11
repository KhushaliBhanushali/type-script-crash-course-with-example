let reviews: number[] = [4,5,7.5,3,1,8];

let total: number = 0;

for(let i=0; i<reviews.length; i++){
    console.log(reviews[i]);

    total += reviews[i];
}

let average: number = total / reviews.length;
console.log("Review average: " + average);