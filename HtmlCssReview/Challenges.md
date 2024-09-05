# Challenges
Attempt either of the challenges below, or both!

## W3 Schools HTML Challenges
[Click here for HTML Exercises on W3 Schools.](https://www.w3schools.com/html/exercise.asp)

![W3Schools Challenge](../Assets/W3schoolschallenge.png)

## 3D Transforms CSS Challenges
[Click here for some interesting 3D transform CSS challenges.](https://3dtransforms.desandro.com/)

<style>
* { box-sizing: border-box; }




code .s1,
code .s { color: #0A2; } /* string */
code .mi, /* integer */
code .cp { color: #07D; } /* doctype */
code .k { color: #E31; } /* keyword */
code .kd, /* storage */
code .na { color: #D31; } /* markup attribute */
code .p  { color: #456; } /* punctuation */
code .o  { color: #A62; }   /* operator */
code .nb { color: #3A3; } /* support, CSS color value */

/* comment */
code .c,
code .c1 { color: #999; font-style: italic; }

code .nt { color: #37B; } /* Markup open tag */

code .nf { color: #567; } /* css id */
code .nc { color: #486; }  /* CSS class */
code .m  { color: #35B; } /* CSS value */
code .nd { color: #38D; } /* CSS pseudo selector */



.scene--set-persp {
  width: 200px;
  height: 200px;
}

.set-persp-panel {
  width: 100%;
  height: 100%;
}

.set-persp-panel--red {
  background: red;
  transform: perspective(400px) rotateY(45deg);
}

.scene--set-persp--blue {
  perspective: 400px;
}

.set-persp-panel--blue {
  background: blue;
  transform: rotateY(45deg);
}



.scene--persp-children {
  width: 200px;
  height: 200px;
}

.persp-children-panel {
  width: 55px;
  height: 55px;
  float: left;
  margin: 5px;
}

.persp-children-panel--separate {
  background: red;
  transform: perspective(400px) rotateY(45deg);
}

.scene--persp-children--together {
  perspective: 400px;
}

.persp-children-panel--together {
  background: blue;
  transform: rotateY(45deg);
}


.scene--cube {
  width: 200px;
  height: 200px;
  margin: 80px 0;
  perspective: 500px;
}

.scene--persp-cube {
  perspective: 400px;
}

.cube {
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-100px);
}

.scene--hero {
  height: 200px;
  margin: 80px 0;
  perspective: 500px;
  border: none;
}

.cube--hero {
  margin: 0 auto;
}

.cube.is-spinning {
  animation: spinCube 8s infinite ease-in-out;
}

@keyframes spinCube {
    0% { transform: translateZ(-100px) rotateX(  0deg) rotateY(  0deg); }
  100% { transform: translateZ(-100px) rotateX(360deg) rotateY(360deg); }
}

.cube__face {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 2px solid black;
  line-height: 200px;
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-align: center;
}

.cube.is-backface-hidden .cube__face {
  backface-visibility: hidden;
}

.cube__face--front  { background: hsla(  0, 100%, 50%, 0.7); }
.cube__face--right  { background: hsla( 60, 100%, 50%, 0.7); }
.cube__face--back   { background: hsla(120, 100%, 50%, 0.7); }
.cube__face--left   { background: hsla(180, 100%, 50%, 0.7); }
.cube__face--top    { background: hsla(240, 100%, 50%, 0.7); }
.cube__face--bottom { background: hsla(300, 100%, 50%, 0.7); }

.cube__face--front  { transform: rotateY(  0deg) translateZ(100px); }
.cube__face--right  { transform: rotateY( 90deg) translateZ(100px); }
.cube__face--back   { transform: rotateY(180deg) translateZ(100px); }
.cube__face--left   { transform: rotateY(-90deg) translateZ(100px); }
.cube__face--top    { transform: rotateX( 90deg) translateZ(100px); }
.cube__face--bottom { transform: rotateX(-90deg) translateZ(100px); }

.cube.show-front  { transform: translateZ(-100px) rotateY(   0deg); }
.cube.show-right  { transform: translateZ(-100px) rotateY( -90deg); }
.cube.show-back   { transform: translateZ(-100px) rotateY(-180deg); }
.cube.show-left   { transform: translateZ(-100px) rotateY(  90deg); }
.cube.show-top    { transform: translateZ(-100px) rotateX( -90deg); }
.cube.show-bottom { transform: translateZ(-100px) rotateX(  90deg); }

/* cube--step0 */

.cube--step0 {
  position: relative;
  width: auto;
  height: auto;
  transform: none;
}

.cube--step0 .cube__face {
  display: inline-block;
  position: static;
  margin: 0 10px 10px 0;
  transform: none;
}



.cube--step1 {
  transform: none;
}

.cube--step1 .cube__face {
  transform: none;
}



.cube--step2 {
  transform: none;
}

.cube--step2 .cube__face--front  { transform: rotateY(  0deg); }
.cube--step2 .cube__face--right  { transform: rotateY( 90deg); }
.cube--step2 .cube__face--back   { transform: rotateY(180deg); }
.cube--step2 .cube__face--left   { transform: rotateY(-90deg); }
.cube--step2 .cube__face--top    { transform: rotateX( 90deg); }
.cube--step2 .cube__face--bottom { transform: rotateX(-90deg); }



.cube--step3 {
  transform: none;
}



.cube--rotate { transition: transform 1s; }


.scene--transform-func {
  display: inline-block;
  width: 200px;
  height: 200px;
  margin: 60px 60px 60px 0;
  perspective: 600px;
}

.transform-func-panel {
  width: 200px;
  height: 200px;
  background: hsla(0, 100%, 50%, 0.7);
  line-height: 200px;
  color: white;
  font-size: 18px;
  text-align: center;
}




.pixelation-p {
  text-align: center;
  margin: 40px 0;
}



.scene--card {
  width: 200px;
  height: 260px;
  perspective: 600px;
}

.card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.card.is-flipped {
  transform: rotateY(180deg);
}

.card--slide {
  transform-origin: center right;
}

.card--slide.is-flipped {
  transform: translateX(-100%) rotateY(-180deg);
}

.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 260px;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  backface-visibility: hidden;
}

.card__face--front {
  background: red;
}

.card__face--back {
  background: blue;
  transform: rotateY( 180deg );
}

/* card--step0 */

.card--step0 .card__face {
  display: inline-block;
  position: static;
  width: 200px;
  height: 260px;
  margin: 0 10px 10px 0;
  transform: none;
  cursor: default;
}


/* ---- box ---- */


.scene--box {
  width: 300px;
  height: 200px;
  margin: 60px 0;
  perspective: 500px;
}

.box {
  width: 300px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-50px);
}

.box__face {
  position: absolute;
  border: 2px solid black;
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-align: center;
}

.box__face--front,
.box__face--back {
  width: 300px;
  height: 200px;
  line-height: 200px;
}

.box__face--right,
.box__face--left {
  width: 100px;
  height: 200px;
  left: 100px;
  line-height: 200px;
}

.box__face--top,
.box__face--bottom {
  width: 300px;
  height: 100px;
  top: 50px;
  line-height: 100px;
}

.box__face--front  { background: hsla(  0, 100%, 50%, 0.7); }
.box__face--right  { background: hsla( 60, 100%, 50%, 0.7); }
.box__face--back   { background: hsla(120, 100%, 50%, 0.7); }
.box__face--left   { background: hsla(180, 100%, 50%, 0.7); }
.box__face--top    { background: hsla(240, 100%, 50%, 0.7); }
.box__face--bottom { background: hsla(300, 100%, 50%, 0.7); }

.box__face--front  { transform: rotateY(  0deg) translateZ( 50px); }
.box__face--back   { transform: rotateY(180deg) translateZ( 50px); }

.box__face--right  { transform: rotateY( 90deg) translateZ(150px); }
.box__face--left   { transform: rotateY(-90deg) translateZ(150px); }

.box__face--top    { transform: rotateX( 90deg) translateZ(100px); }
.box__face--bottom { transform: rotateX(-90deg) translateZ(100px); }

.box.show-front  { transform: translateZ( -50px) rotateY(   0deg); }
.box.show-back   { transform: translateZ( -50px) rotateY(-180deg); }
.box.show-right  { transform: translateZ(-150px) rotateY( -90deg); }
.box.show-left   { transform: translateZ(-150px) rotateY(  90deg); }
.box.show-top    { transform: translateZ(-100px) rotateX( -90deg); }
.box.show-bottom { transform: translateZ(-100px) rotateX(  90deg); }



.box--step0 {
  position: relative;
  width: auto;
  height: auto;
  transform: none;
}

.box--step0 .box__face {
  display: inline-block;
  position: static;
  margin: 0 10px 10px 0;
  transform: none;
}



.box--step1 {
  transform: none;
}

.box--step1 .box__face {
  transform: none;
}

.box--step1a .box__face {
  top: 0;
  left: 0;
}



.box--rotate { transition: transform 1s; }


    </style>

<div class="scene scene--hero">
        <div class="cube cube--hero is-spinning">
          <div class="cube__face cube__face--front">front</div>
          <div class="cube__face cube__face--right">right</div>
          <div class="cube__face cube__face--back">back</div>
          <div class="cube__face cube__face--left">left</div>
          <div class="cube__face cube__face--top">top</div>
          <div class="cube__face cube__face--bottom">bottom</div>
        </div>
      </div>