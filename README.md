# week-4-game
HW#4
# HW - {hw_week-4-game}

## https://blakeredwolf.github.io/week-4-game/
 - 

## Description on how to use the app
-Welcome Tenno! You will be given a random number at the start of the game.
There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.
You win the game by matching your total score to the random number, you lose the game if your total score goes above the random number.
The value of each crystal is hidden from you until you click on it.
Each time when the game starts, the game will change the values of each crystal.
- Even if you lose, you can still keep guessing and eventually you will get the answer.
## Requirements
#### 
-Create a new GitHub repo called week-4-game, then clone it to your computer.
Inside the week-4-game folder, create the following: index.html, composer.json and index.php.
Place the appropriate content in the composer.json and index.php files, so you can deploy your game to Heroku.
Still inside the week-4-game directory, make a folder called assets.
Inside the assets directory, make three additional folders: javascript, css and images.
In the javascript folder, make a file called game.js.
In the css folder, make a file called style.css.
In the css folder, make a file called reset.css. Paste into it the code found from the Meyerweb Reset.
In the images folder, save any of the images you plan on using.
Push the above changes to GitHub.

## Technologies Used
####
- HTML 5 / Bootstrap for layout.
- CSS 3 / Bootstrap for styling.
- JavaScript & JQuery for functionality.

## Code Explaination
- Started by declaring my vars for both the number to guess & 
our guess number.
-The number to guess had to be a randomly generated number
-Next i targeted the div the number to guess will go in, and added h1's around it.
-Then declared vars for all 4 crystals and set up for a randomly generated number on page load for those.
-Next i targeted my classes for the crystals, and added a with .attr, ids of crystal1 etc..
-Then added a function of newGuess followed by a if statement, targeting the hidden input on my html page, to get the val. If == No, return false. (Which prevents the page from continuing until we press the play again button at the bottom of the page)
-Then set more var's each for score, wins, losses, followed by if statements to, that will add 1 if there is a win, or keep the same score if there is a loss.
-Declared a function PlayAgain() that will reset the the random number to guess, and the crystals random number.

-------------