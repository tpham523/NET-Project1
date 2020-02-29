
 CPSC 335-03
Project 1 - Cella Rule 150
Team: NETs
Members: 
	Nidhi Shah ( nidhi989@csu.fullerton.edu)& 
	Emily Pham ( tpham523@csu.fullerton.edu)&
	Tai Nguyen ( tainguyen@csu.fullerton.edu)
Time-stamp: <2020-02-29 23:00:00 NETs Team>
------------------------------------------------------------

Introduction:

  This project is to display the generational progress of Wolfram's Rule-150 cellular Automaton.
  The program is written in Javascript and P5.JS (for animation) with an HTML web page for
display. The cella "growth generations" will be shown in 101 by 101 square grid canvas.Each row is representing the generation.
The top row being the initial setup generation. Each generation is a stage in the “life” of the cellular automaton.

How Prpgram works:

  The program initializes a 101 by 101 square grid canvas with each cell size is 10*10. The initialize color for the cell will be black as representing state 1. The Wolfram's Rule-150 automaton animation will start by setting the top row's 201st (the center) cell with state 0.(showing by changing it from black to white color) The first row becomes the initial generation. Then,the program analyzes each 3-cell triple from the left – moving at 3-cell “window” to the right by 1 cell. Those 3-cell state generate the state of the center cell, below those triple-cell in the next generation by Wolfram's Rule-150. If the state result is 1 -the center cell remains black. But, if the center cell state become 0 , the color of the cell will be white. More, the animation by using the P5.JS will highlight the center cell in each cycle with yellow border changes.
  

Zip Contents

  File readme.txt.

  File BigOAnalysis-Project1.docx

  File p5.js

  File sketch.js.

  File assets/styles.css.  
  
  File assets/draw-stuff.js.

Installation & Running

  1. Extract the .zip file into a folder.

  2. Drag the index HTML file, index.html, into a browser
    window.  The program should start immediately.

External Requirements: N/A

Known Bugs: 
  o- Yellow borders of the last generation's cells might slightly stays higher the bottom edge of the grid.

Warnings

  o- Testing was light.  Not all keys are tried. Only Google Chrome Browser is tested on.

Testing

  o- Following installation instruction, used a few keypresses to see if the program stops and starts as designed.

Credits

  The code is based on the source code provided by Professor Siska with our own modification.
