export function isValidWalk(walk: string[]) {
     //starting point :)
     let walker =[0,0]

     //end point :)
     let destination =[0,0]

     //minutes
     if (walk.length !== 10) return false;

     for(let i=0; i<walk.length; i++){
         if(walk[i]==="n"){
             walker[0]++
         }
 
         if (walk[i] === "e") {
             walker[1]++;
         }
 
         if (walk[i] === "s") {
             walker[0]--;
         }
         
         if (walk[i] === "w") {
             walker[1]--;
         }        
     }
 
     if (walker[0] === destination[0] &&
     walker[1] === destination[1]) {
     return true;
 }
 else {
   return false;
 }
 
 
}

