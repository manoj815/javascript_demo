//consider below example and guess the result

function add(a,b){
return a+b;
}

add(2,3) //5

add('2','3') //23
add(-'2',-'3') //-5
add(-'+2',-'+3')// -5
add(-'-2',-'-3') //5

//Plus sign before the operand is called ad uniry operator
add(+'2',+'3') //5 
add(+'d',+'3') //NaN
add(+'0xFF',+'0xFF'); //510 //0xFF is 255
