function largestOfFour(arr) {
  
  let largestNum = []; // created empty array 

    // loop through the length of array
    for (var i = 0; i < arr.length; i++){
    // declared a variable and set the value to equal array [i] index [0]
        var largestNumber = arr[i][0];
    // created another for loop that iterates through the length of each element in Array    
        for (var j = 1; j <arr[i].length; j++){
    // if statement stating if arr [i][j] is less than the variable largestNumber        
            if (arr[i][j] > largestNumber){
    // here I am continuing the code and just declaring largestNumber and setting it to arr [i][j];            
                largestNumber = arr[i][j] ;
            }
        }
        // here I am saying the empty array largestNum[i] is equal to the largestnumber variable
         largestNum[i] = largestNumber;
    }
   
    
    console.log(largestNum);
  return largestNum;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);