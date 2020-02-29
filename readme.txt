
 CPSC 335-03
Project 1 - Cella Rule 150
Team: NETs
Members: 
	Nidhi Shah ( nidhi989@csu.fullerton.edu)& 
	Emily Pham ( tpham523@csu.fullerton.edu)&
	Tai Nguyen ( tainguyen@csu.fullerton.edu)
Time-stamp: <2020-02-29 23:00:00 NETs Team>
------------------------------------------------------------

Intro

  This project is to write a program to display the generational progress of Wolfram's Rule-150 cellular
automaton. The program will be written in Javascript and P5.JS (for animation) with an HTML web page for
display. The cella "growth generations" will be shown in a 2D grid of black and white cells. Each row after the top
will show the next generation; the top row being the initial setup generation. Each generation is a stage in the
“life” of the cellular automaton.
  The program initializes a 101 by 101 square grid to have all cells full (state 1). Each row will
represent a growth generation, with the top row being the initial generation. Then set the top row's 201st (the
center) cell in state 0. This represents the initial generation.
  The program analyzes each 3-cell triple from the left – moving a 3-cell “window” to
the right by 1 cell, and generating the correct center cell state on the row below the triple-cell by Wolfram's Rule-150
  

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
