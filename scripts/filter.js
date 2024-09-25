function numbed (){
    let arra = [1,200,80,70,86,89,90,7,6];


    // using filter with a callback function to check if each element is less than 50 

    let newArra = arra.filter(function(value) {
        return value < 50;

    });

        console.log(newArra);

}


numbed();