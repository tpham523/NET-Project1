/* Project 1: Cella Rule 150 - CS335-02 
by Nidhi Shah ( nidhi989@csu.fullerton.edu)& 
Emily Pham ( tpham523@csu.fullerton.edu)&
Tai Nguyen ( tainguyen@csu.fullerton.edu)

This Javascript file includes the functions to make the bot move, check the color of each cells in a 3-cell
window, then generate the appropriate color for the child cell 

The code is based on the source code provided by Professor Siska with our own modification */

// Make global g_canvas JS 'object': a key-value 'dictionary'.
var g_canvas = {
    cell_size: 10,
    wid: 41,
    hgt: 41
}; // JS Global var, w canvas size info.
var g_frame_cnt = 0; // Setup a P5 display-frame counter, to do anim
var g_frame_mod = 16; // Update ever 'mod' frames.
var g_stop = 0; // Go by default.


function setup() // P5 Setup Fcn
{
    let sz = g_canvas.cell_size;
    let width = sz * g_canvas.wid; // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height = sz * g_canvas.hgt;
    createCanvas(width, height); // Make a P5 canvas.
    draw_grid(10, 50, 'white');
    fill('white');
    noStroke();
    rect(200, 0, 10, 10);
}

var g_bot = {
    x: -1,
    y: 0
}; // Coordinates of the bot
var g_box = {
    t: 1,
    hgt: 40,
    l: 1,
    wid: 40
}; // Box in which bot can move.

function move_bot() 
{
    g_bot.x++;

    if (g_bot.x === g_box.wid - 1) { // update bot's position when it hits the edges of the grid
        g_bot.x = 0;
        g_bot.y += 1;
    }

    if (g_bot.y === g_box.hgt) { // stop the bot when it reaches the end of the grid
        g_stop = !g_stop;
    }
}

function draw_bot() // Convert bot pox to grid pos & draw bot.
{
    let sz = g_canvas.cell_size;
    let sz2 = sz / 3;
    let x = 1 + g_bot.x * sz; // Set x one pixel inside the sz-by-sz cell.
    let y = 1 + g_bot.y * sz;
    
    // Get interior pixel color [RGBA] array for each cell in a 3-cell window.
    let acolors1 = get(x + sz2, y + sz2);       // cell 1
    let acolors2 = get(x + 10 + sz2, y + sz2);  // cell 2
    let acolors3 = get(x + 20 + sz2, y + sz2)   // cell 3

    // Get the sum of color array to check whether the cell is black or white
    let pix1 = acolors1[0] + acolors1[1] + acolors1[2]
    let pix2 = acolors2[0] + acolors2[1] + acolors2[2]
    let pix3 = acolors3[0] + acolors3[1] + acolors3[2]
    //console.log("pix1, pix2, pix3:" + pix1 + " " + pix2 + " " + pix3);

    // Color child cell based on ruleset 150
    if (pix1 == 0 && pix2 == 0 && pix3 == 0)
        fillCell(x + sz, y + sz, 1);
    if (pix1 == 0 && pix2 == 0 && pix3 == 765)
        fillCell(x + sz, y + sz, 0);
    if (pix1 == 0 && pix2 == 765 && pix3 == 0)
        fillCell(x + sz, y + sz, 0);
    if (pix1 == 0 && pix2 == 765 && pix3 == 765)
        fillCell(x + sz, y + sz, 1);
    if (pix1 == 765 && pix2 == 0 && pix3 == 0)
        fillCell(x + sz, y + sz, 0);
    if (pix1 == 765 && pix2 == 0 && pix3 == 765)
        fillCell(x + sz, y + sz, 1);
    if (pix1 == 765 && pix2 == 765 && pix3 == 0)
        fillCell(x + sz, y + sz, 1);
    if (pix1 == 765 && pix2 == 765 && pix3 == 765)
        fillCell(x + sz, y + sz, 0);

}

function fillCell(rx, ry, rcolor) { // paint the child cell
    let sz = g_canvas.cell_size;
    let big = sz - 2;

    if (rcolor === 1)
        fill("black");
    else
        fill("white");

    stroke("#cfd186");
    rect(rx, ry, big, big);
}


function draw() // P5 Frame Re-draw Fcn, Called for Every Frame.
{
    ++g_frame_cnt;
    if (0 == g_frame_cnt % g_frame_mod) {
        if (!g_stop) {
            move_bot();
            draw_bot();
        }
    }

}

function keyPressed() { // stop the application if a key is pressed
    g_stop = !g_stop;
}