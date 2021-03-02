Create a node/c# application that satisfies this question and provide proof of it answering correctly. This can be shared via repl.it or a repo.


Please keep it to one file for each solution.
You can use Javascript / C# / Typescript.


I have created an empty file, that has a base set up for each question.


Please note for question 3, solving the question is not the main outcome. 
The main outcome is to look at how you approach it. Don't worry if you cannot solve it.


There are automated test / jest you can run to see if you implementation is working correctly.






# Getting Started
```
git clone https://github.com/shavyg2/DevTest.git
cd DevTest
npm install
```




# running the test
```
npx jest
```







## Question 1
You live in the city of Cartesian where all roads are laid out in a perfect grid. 
You arrived ten minutes too early to an appointment, so you decided to take the 
opportunity to go for a short walk. 





The city provides its citizens with a Walk Generating App on their phones -- 
every time you press the button it sends you an array of one-letter strings representing 
directions to walk (eg. ['n', 's', 'w', 'e']). 





You always walk only a single block in a direction and you know it takes you one minute 
to traverse one city block, so create a function that will return true if the walk the 
app gives you will take you exactly ten minutes (you don't want to be early or late!) 
and will, of course, return you to your starting point. Return false otherwise.






> Note: you will always receive a valid array containing a random assortment of 
> direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array 
> (that's not a walk, that's standing still!).






## Question 2 

You are given an array (which will have a length of at least 3, but could be very large)
containing integers. The array is either entirely comprised of odd integers or entirely
comprised of even integers except for a single integer N. Write a method that takes the
array as an argument and returns this "outlier" N.







## Question 3

**Introduction**  
We all love to play games especially as children. I have fond memories playing Connect 4 with my brother so decided to create this Kata based on the classic game. Connect 4 is known as several names such as “Four in a Row” and “Captain’s Mistress" but was made popular by Hasbro MB Games.



![](https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/connect4.jpg)     




### Connect 4
**Task**  
The game consists of a grid (7 columns and 6 rows) and two players that take turns to drop their discs. The pieces fall straight down, occupying the next available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.
Your task is to create a Class called Connect4 that has a method called play which takes one argument for the column where the player is going to place their disc.

 
**Rules**  
If a player successfully has 4 discs horizontally, vertically or diagonally then you should return "Player n wins!” where n is the current player either 1 or 2.

If a player attempts to place a disc in a column that is full then you should return "Column full!" and the next move must be taken by the same player.

If the game has been won by a player, any following moves should return ”Game has finished!”.

Any other move should return ”Player n has a turn” where n is the current player either 1 or 2.

Player 1 starts the game every time and alternates with player 2.

The columns are numbered 0-6 left to right.
 
Good luck and enjoy!
