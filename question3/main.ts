let gameBoard=[]

let player = 1 

function hazzy(){
//check left to right :)
for (var i=1; i<=2; i++) {
        
  for (var col = 0; col <=4; col++) {
      for (var row = 0; row <=5; row++) {
          if (gameBoard[row][col] == i) {
              if ((gameBoard[row][col+1] == i) && (gameBoard[row][col+2] == i) && (gameBoard[row][col+3] == i)) {
                  return true
              }
          }
      }
  }
}

//check top to bottom  :)
for (let i=1; i<=2; i++) {
  for (col = 0; col <=6; col++) {
      for (row = 0; row <=2; row++) {
          if (gameBoard[row][col] == i) {
              if ((gameBoard[row+1][col] == i) && (gameBoard[row+2][col] == i) && (gameBoard[row+3][col] == i)) {
                  
                  return true
              }
          }
      }
  }
}
}

export class Connect4 {
    gameActive:boolean;
    player: number;


    
    
    constructor(gameActive?:boolean,player?:number,reduceNum?:number,gameBoard?:any) {
      this.gameActive = false
      this.player= 1      
    }
  
    play(drop: number): string{
      if(!this.gameActive){
        for(var row=0; row<=5;row++){
          gameBoard[row]= []
          for(var col=0;col<=6;col++){
            gameBoard[row][col]=0
          }
        }
      }
      this.gameActive=true
      
        for (row=5; row>=0; row--) { 
          if (gameBoard[row][drop] == 0) {
              gameBoard[row][drop] = player;
              
              console.log(gameBoard)
              
              if (player == 1) { 
               
                if(hazzy()==true){
                 
                  player=1
                  return `Player 1 wins!`
                }else{
                 player=2
                return "Player 1 has a turn"}
                
              } 
              else{
                if(hazzy()==true){
                  
                  player=1
                  return "Player 2 wins!"
                }else{
                player=1
                return "Player 2 has a turn"
              }
              }  
          }
          if(!row){
           return "Column full!"
          }
          }      

         
            
          
              
          
               
        

  
 
      
      

     }
    
}