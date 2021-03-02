export function findOutlier(integers: number[]): number {
    
    var evenNum = [];
    var oddNum = [];
    for (var i = 0; i < integers.length; i++) 
    {
        if ((integers[i] % 2) == 0) 
        {
          evenNum.push(integers[i]);
        } 
        else 
        {
          oddNum.push(integers[i]);
        }
    }
    var allEven = evenNum.length;
    var allOdd = oddNum.length;
 
    if (allEven > allOdd)
    {
        return oddNum[0];
    } 
    else 
    {
        return evenNum[0];
    }
 }
  