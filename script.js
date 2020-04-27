// 1. Create a Pixi renderer and define size and a background color
var renderer = PIXI.autoDetectRenderer(400, 400, {

  // create transparent canvas
  transparent: true

});

// 2. Append canvas element to the body
document.body.appendChild(renderer.view);

// 3. Create a container that will hold your scene
var stage = new PIXI.Container();

/* TUTORIAL PART 2 CODE GOES HERE ------ */

// add stage to the canvas
render();

function render(){
    renderer.render(stage);
}


// create a PIXI sprite from an image path
var hawaii = PIXI.Sprite.fromImage('i.jpg');

// center the sprite anchor point
hawaii.anchor.x = 0;
hawaii.anchor.y = 0;

// move the sprite to the center of the canvas
hawaii.position.x = -200;
hawaii.position.y = -800;

stage.addChild(hawaii);

function render(){
  requestAnimationFrame(render);
  renderer.render(stage);
}


hawaii.position.y = -800;
var blurFilter = new PIXI.filters.BlurFilter();

blurFilter.blur = 1;
hawaii.filters = [blurFilter];

stage.addChild(hawaii);

colorMatrix = [
//R  G  B  A
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1
];
filter = new PIXI.filters.ColorMatrixFilter();
filter.matrix = colorMatrix;
stage.filters = [filter];


filter.contrast(0.5, true);
filter.desaturate();
filter.greyscale(0.4, false);
filter.hue(180, false);
filter.negative(true);
filter.saturate(2, false);
filter.sepia(false);
filter.technicolor(true);
filter.browni(true);
filter.kodachrome(true);
filter.toBGR(true);


var count = 0;

function render(){
  requestAnimationFrame(render);

colorMatrix = [
//R  G  B  A
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1
];
filter = new PIXI.filters.ColorMatrixFilter();
filter.matrix = colorMatrix;
stage.filters = [filter];
  var newVal = 180 * Math.sin(count);
  filter.hue(newVal, false);

  count += 0.01;

  renderer.render(stage);
}
