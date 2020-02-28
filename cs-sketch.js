// cs-sketch.js; P5 key animation fcns.  // CF p5js.org/reference
// Time-stamp: <2020-02-02 15:58:23 Chuck Siska>

// Make global g_canvas JS 'object': a key-value 'dictionary'.
var g_canvas = { cell_size:10, wid:41, hgt:41 }; // JS Global var, w canvas size info.
var g_frame_cnt = 0; // Setup a P5 display-frame counter, to do anim
var g_frame_mod = 2; // Update ever 'mod' frames.
var g_stop = 0; // Go by default.

function setup() // P5 Setup Fcn
{
    let sz = g_canvas.cell_size;
    let width = sz * g_canvas.wid;  // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height = sz * g_canvas.hgt;
    createCanvas( width, height );  // Make a P5 canvas.
    draw_grid( 10, 50, 'white', 'yellow' );
    fill('white');
    noStroke();
    rect(200, 0, 10, 10);
}

var g_bot = { x:-1, y:0 }; // Dir is 0..7 clock, w 0 up.
var g_box = { t:1, hgt:40, l:1, wid:40 }; // Box in which bot can move.

function move_bot( )
{ 
    g_bot.x += 1;

    if (g_bot.x === g_box.wid - 1 ) {
        g_bot.x = 0;
        g_bot.y += 1;
    }
}

function draw_bot( ) // Convert bot pox to grid pos & draw bot.
{
    let sz = g_canvas.cell_size;
    let sz2 = sz / 3;
    let x = 1+ g_bot.x*sz; // Set x one pixel inside the sz-by-sz cell.
    let y = 1+ g_bot.y*sz;
     // Stay inside cell walls.
    // Fill 'color': its a keystring, or a hexstring like "#5F", etc.  See P5 docs.
    //console.log( "x,y,big = " + x + "," + y + "," + big );
    let acolors1 = get( x + sz2, y + sz2 ); // Get cell interior pixel color [RGBA] array.
    let acolors2 = get( x+10 + sz2, y + sz2);
    let acolors3 = get( x+20 + sz2, y+ sz2)
    let pix1 = acolors1[ 0 ] + acolors1[ 1 ] + acolors1[ 2 ]
    let pix2 = acolors2[ 0 ] + acolors2[ 1 ] + acolors2[ 2 ]
    let pix3 = acolors3[ 0 ] + acolors3[ 1 ] + acolors3[ 2 ]
    console.log("pix1, pix2, pix3:" + pix1 + " " + pix2 + " " + pix3);
    //let pix = pix1 + pix2 + pix3;
    //console.log( "pix: " + pix);

    if (pix1 == 0 && pix2 == 0 && pix3 == 0)
        fillCell( x+sz, y+sz, 'black');
    if (pix1 == 0 && pix2 == 0 && pix3 == 765)
        fillCell( x+sz, y+sz, 'white');
    if (pix1 == 0 && pix2 == 765 && pix3 == 0)
        fillCell( x+sz, y+sz, 'white');
    if (pix1 == 0 && pix2 == 765 && pix3 == 765)
        fillCell( x+sz, y+sz, 'black');
    if (pix1 == 765 && pix2 == 0 && pix3 == 0)
        fillCell( x+sz, y+sz, 'white');
    if (pix1 == 765 && pix2 == 0 && pix3 == 765)
        fillCell( x+sz, y+sz, 'black');
    if (pix1 == 765 && pix2 == 765 && pix3 == 0)
        fillCell( x+sz, y+sz, 'black');
    if (pix1 == 765 && pix2 == 765 && pix3 == 765)
        fillCell( x+sz, y+sz, 'white');

    // (*) Here is how to detect what's at the pixel location.  See P5 docs for fancier...
    //if (0 != pix) { fill( 0 ); stroke( 0 ); } // Turn off color of prior bot-visited cell.
    //else { stroke( 'white' ); } // Else Bot visiting this cell, so color it.

    // Paint the cell.
    //fillCell( x, y, 'black');
}

function fillCell(rx, ry, rcolor) {
    let sz = g_canvas.cell_size;
    let big = sz -2;
    fill(rcolor);
    stroke('yellow');
    rect( rx, ry, big, big );

}

function draw_update()  // Update our display.
{
    //console.log( "g_frame_cnt = " + g_frame_cnt );
    move_bot( );
    draw_bot( );
    //fillCell( );
}

function draw()  // P5 Frame Re-draw Fcn, Called for Every Frame.
{
    ++g_frame_cnt;
    if (0 == g_frame_cnt % g_frame_mod)
    {
        if (!g_stop) draw_update();
    }

}

function keyPressed( )
{
    g_stop = ! g_stop;
}

