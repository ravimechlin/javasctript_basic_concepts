// creating arrray
const ar=[1,2,33,4]
console.log(ar)


// converting array into the string
const string_array=ar.toString()
console.log(string_array)
// accessing last elemnr
const last_element=ar[ar.length-1]
console.log(last_element,"this is last")


// recognise the array 
console.log(Array.isArray(ar))



// foreach  in this


ar.forEach(testing_for_loop);




 function testing_for_loop(value,index){

    console.log("index is:",index,"value is:",value);
}



// map in this 


const get_mapresult=ar.map(mymapfunction)



console.log(get_mapresult)


function mymapfunction(value)
{
 return value*2
}