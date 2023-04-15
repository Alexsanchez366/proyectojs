let array1= [2,20,35,45,50]

function sumatotal(array){
    let sumatoria=0
    for (let i = 0; i < array.length; i++) {
     
      sumatoria += array[i]*5
    }
return sumatoria;

}
console.log(sumatotal(array1));