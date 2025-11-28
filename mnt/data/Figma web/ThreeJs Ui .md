**Image transition**



**HTML**

&nbsp;	<div id="three-container"></div>



<div id="instructions">

&nbsp;	click and drag to control the animation

</div>





**CSS**



&nbsp;	body {

&nbsp;	margin: 0;

&nbsp;	overflow: hidden;

}



canvas {

&nbsp;	background-image: radial-gradient(#666, #333);

}



\#instructions {

&nbsp;	position: absolute;

&nbsp;	color: #fff;

&nbsp;	bottom: 0;

&nbsp;	padding-bottom: 6px;

&nbsp;	font-family: sans-serif;

&nbsp;	width: 100%;

&nbsp;	text-align: center;

&nbsp;	pointer-events: none;

}





**JS**

&nbsp;	

&nbsp;	window.onload = init;

console.ward = function() {}; // what warnings?



function init() {

&nbsp; var root = new THREERoot({

&nbsp;   createCameraControls: !true,

&nbsp;   antialias: (window.devicePixelRatio === 1),

&nbsp;   fov: 80

&nbsp; });



&nbsp; root.renderer.setClearColor(0x000000, 0);

&nbsp; root.renderer.setPixelRatio(window.devicePixelRatio || 1);

&nbsp; root.camera.position.set(0, 0, 60);



&nbsp; var width = 100;

&nbsp; var height = 60;



&nbsp; var slide = new Slide(width, height, 'out');

&nbsp;	var l1 = new THREE.ImageLoader();

&nbsp;	l1.setCrossOrigin('Anonymous');

&nbsp;	l1.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/winter.jpg', function(img) {

&nbsp;	  slide.setImage(img);

&nbsp;	})

&nbsp; root.scene.add(slide);



&nbsp; var slide2 = new Slide(width, height, 'in');

&nbsp; var l2 = new THREE.ImageLoader();

&nbsp;	l2.setCrossOrigin('Anonymous');

&nbsp;	l2.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/spring.jpg', function(img) {

&nbsp;		slide2.setImage(img);

&nbsp;	})

&nbsp;	

&nbsp; root.scene.add(slide2);



&nbsp; var tl = new TimelineMax({repeat:-1, repeatDelay:1.0, yoyo: true});



&nbsp; tl.add(slide.transition(), 0);

&nbsp; tl.add(slide2.transition(), 0);



&nbsp; createTweenScrubber(tl);



&nbsp; window.addEventListener('keyup', function(e) {

&nbsp;   if (e.keyCode === 80) {

&nbsp;     tl.paused(!tl.paused());

&nbsp;   }

&nbsp; });

}



////////////////////

// CLASSES

////////////////////



function Slide(width, height, animationPhase) {

&nbsp; var plane = new THREE.PlaneGeometry(width, height, width \* 2, height \* 2);



&nbsp; THREE.BAS.Utils.separateFaces(plane);



&nbsp; var geometry = new SlideGeometry(plane);



&nbsp; geometry.bufferUVs();



&nbsp; var aAnimation = geometry.createAttribute('aAnimation', 2);

&nbsp; var aStartPosition = geometry.createAttribute('aStartPosition', 3);

&nbsp; var aControl0 = geometry.createAttribute('aControl0', 3);

&nbsp; var aControl1 = geometry.createAttribute('aControl1', 3);

&nbsp; var aEndPosition = geometry.createAttribute('aEndPosition', 3);



&nbsp; var i, i2, i3, i4, v;



&nbsp; var minDuration = 0.8;

&nbsp; var maxDuration = 1.2;

&nbsp; var maxDelayX = 0.9;

&nbsp; var maxDelayY = 0.125;

&nbsp; var stretch = 0.11;



&nbsp; this.totalDuration = maxDuration + maxDelayX + maxDelayY + stretch;



&nbsp; var startPosition = new THREE.Vector3();

&nbsp; var control0 = new THREE.Vector3();

&nbsp; var control1 = new THREE.Vector3();

&nbsp; var endPosition = new THREE.Vector3();



&nbsp; var tempPoint = new THREE.Vector3();



&nbsp; function getControlPoint0(centroid) {

&nbsp;   var signY = Math.sign(centroid.y);



&nbsp;   tempPoint.x = THREE.Math.randFloat(0.1, 0.3) \* 50;

&nbsp;   tempPoint.y = signY \* THREE.Math.randFloat(0.1, 0.3) \* 70;

&nbsp;   tempPoint.z = THREE.Math.randFloatSpread(20);



&nbsp;   return tempPoint;

&nbsp; }



&nbsp; function getControlPoint1(centroid) {

&nbsp;   var signY = Math.sign(centroid.y);



&nbsp;   tempPoint.x = THREE.Math.randFloat(0.3, 0.6) \* 50;

&nbsp;   tempPoint.y = -signY \* THREE.Math.randFloat(0.3, 0.6) \* 70;

&nbsp;   tempPoint.z = THREE.Math.randFloatSpread(20);



&nbsp;   return tempPoint;

&nbsp; }



&nbsp; for (i = 0, i2 = 0, i3 = 0, i4 = 0; i < geometry.faceCount; i++, i2 += 6, i3 += 9, i4 += 12) {

&nbsp;   var face = plane.faces\[i];

&nbsp;   var centroid = THREE.BAS.Utils.computeCentroid(plane, face);



&nbsp;   // animation

&nbsp;   var duration = THREE.Math.randFloat(minDuration, maxDuration);

&nbsp;   var delayX = THREE.Math.mapLinear(centroid.x, -width \* 0.5, width \* 0.5, 0.0, maxDelayX);

&nbsp;   var delayY;



&nbsp;   if (animationPhase === 'in') {

&nbsp;     delayY = THREE.Math.mapLinear(Math.abs(centroid.y), 0, height \* 0.5, 0.0, maxDelayY)

&nbsp;   }

&nbsp;   else {

&nbsp;     delayY = THREE.Math.mapLinear(Math.abs(centroid.y), 0, height \* 0.5, maxDelayY, 0.0)

&nbsp;   }



&nbsp;   for (v = 0; v < 6; v += 2) {

&nbsp;     aAnimation.array\[i2 + v]     = delayX + delayY + (Math.random() \* stretch \* duration);

&nbsp;     aAnimation.array\[i2 + v + 1] = duration;

&nbsp;   }



&nbsp;   // positions



&nbsp;   endPosition.copy(centroid);

&nbsp;   startPosition.copy(centroid);



&nbsp;   if (animationPhase === 'in') {

&nbsp;     control0.copy(centroid).sub(getControlPoint0(centroid));

&nbsp;     control1.copy(centroid).sub(getControlPoint1(centroid));

&nbsp;   }

&nbsp;   else { // out

&nbsp;     control0.copy(centroid).add(getControlPoint0(centroid));

&nbsp;     control1.copy(centroid).add(getControlPoint1(centroid));

&nbsp;   }



&nbsp;   for (v = 0; v < 9; v += 3) {

&nbsp;     aStartPosition.array\[i3 + v]     = startPosition.x;

&nbsp;     aStartPosition.array\[i3 + v + 1] = startPosition.y;

&nbsp;     aStartPosition.array\[i3 + v + 2] = startPosition.z;



&nbsp;     aControl0.array\[i3 + v]     = control0.x;

&nbsp;     aControl0.array\[i3 + v + 1] = control0.y;

&nbsp;     aControl0.array\[i3 + v + 2] = control0.z;



&nbsp;     aControl1.array\[i3 + v]     = control1.x;

&nbsp;     aControl1.array\[i3 + v + 1] = control1.y;

&nbsp;     aControl1.array\[i3 + v + 2] = control1.z;



&nbsp;     aEndPosition.array\[i3 + v]     = endPosition.x;

&nbsp;     aEndPosition.array\[i3 + v + 1] = endPosition.y;

&nbsp;     aEndPosition.array\[i3 + v + 2] = endPosition.z;

&nbsp;   }

&nbsp; }



&nbsp; var material = new THREE.BAS.BasicAnimationMaterial(

&nbsp;   {

&nbsp;     shading: THREE.FlatShading,

&nbsp;     side: THREE.DoubleSide,

&nbsp;     uniforms: {

&nbsp;       uTime: {type: 'f', value: 0}

&nbsp;     },

&nbsp;     shaderFunctions: \[

&nbsp;       THREE.BAS.ShaderChunk\['cubic\_bezier'],

&nbsp;       //THREE.BAS.ShaderChunk\[(animationPhase === 'in' ? 'ease\_out\_cubic' : 'ease\_in\_cubic')],

&nbsp;       THREE.BAS.ShaderChunk\['ease\_in\_out\_cubic'],

&nbsp;       THREE.BAS.ShaderChunk\['quaternion\_rotation']

&nbsp;     ],

&nbsp;     shaderParameters: \[

&nbsp;       'uniform float uTime;',

&nbsp;       'attribute vec2 aAnimation;',

&nbsp;       'attribute vec3 aStartPosition;',

&nbsp;       'attribute vec3 aControl0;',

&nbsp;       'attribute vec3 aControl1;',

&nbsp;       'attribute vec3 aEndPosition;',

&nbsp;     ],

&nbsp;     shaderVertexInit: \[

&nbsp;       'float tDelay = aAnimation.x;',

&nbsp;       'float tDuration = aAnimation.y;',

&nbsp;       'float tTime = clamp(uTime - tDelay, 0.0, tDuration);',

&nbsp;       'float tProgress = ease(tTime, 0.0, 1.0, tDuration);'

&nbsp;       //'float tProgress = tTime / tDuration;'

&nbsp;     ],

&nbsp;     shaderTransformPosition: \[

&nbsp;       (animationPhase === 'in' ? 'transformed \*= tProgress;' : 'transformed \*= 1.0 - tProgress;'),

&nbsp;       'transformed += cubicBezier(aStartPosition, aControl0, aControl1, aEndPosition, tProgress);'

&nbsp;     ]

&nbsp;   },

&nbsp;   {

&nbsp;     map: new THREE.Texture(),

&nbsp;   }

&nbsp; );



&nbsp; THREE.Mesh.call(this, geometry, material);



&nbsp; this.frustumCulled = false;

}

Slide.prototype = Object.create(THREE.Mesh.prototype);

Slide.prototype.constructor = Slide;

Object.defineProperty(Slide.prototype, 'time', {

&nbsp; get: function () {

&nbsp;   return this.material.uniforms\['uTime'].value;

&nbsp; },

&nbsp; set: function (v) {

&nbsp;   this.material.uniforms\['uTime'].value = v;

&nbsp; }

});



Slide.prototype.setImage = function(image) {

&nbsp; this.material.uniforms.map.value.image = image;

&nbsp; this.material.uniforms.map.value.needsUpdate = true;

};



Slide.prototype.transition = function() {

&nbsp; return TweenMax.fromTo(this, 3.0, {time:0.0}, {time:this.totalDuration, ease:Power0.easeInOut});

};





function SlideGeometry(model) {

&nbsp; THREE.BAS.ModelBufferGeometry.call(this, model);

}

SlideGeometry.prototype = Object.create(THREE.BAS.ModelBufferGeometry.prototype);

SlideGeometry.prototype.constructor = SlideGeometry;

SlideGeometry.prototype.bufferPositions = function () {

&nbsp; var positionBuffer = this.createAttribute('position', 3).array;



&nbsp; for (var i = 0; i < this.faceCount; i++) {

&nbsp;   var face = this.modelGeometry.faces\[i];

&nbsp;   var centroid = THREE.BAS.Utils.computeCentroid(this.modelGeometry, face);



&nbsp;   var a = this.modelGeometry.vertices\[face.a];

&nbsp;   var b = this.modelGeometry.vertices\[face.b];

&nbsp;   var c = this.modelGeometry.vertices\[face.c];



&nbsp;   positionBuffer\[face.a \* 3]     = a.x - centroid.x;

&nbsp;   positionBuffer\[face.a \* 3 + 1] = a.y - centroid.y;

&nbsp;   positionBuffer\[face.a \* 3 + 2] = a.z - centroid.z;



&nbsp;   positionBuffer\[face.b \* 3]     = b.x - centroid.x;

&nbsp;   positionBuffer\[face.b \* 3 + 1] = b.y - centroid.y;

&nbsp;   positionBuffer\[face.b \* 3 + 2] = b.z - centroid.z;



&nbsp;   positionBuffer\[face.c \* 3]     = c.x - centroid.x;

&nbsp;   positionBuffer\[face.c \* 3 + 1] = c.y - centroid.y;

&nbsp;   positionBuffer\[face.c \* 3 + 2] = c.z - centroid.z;

&nbsp; }

};





function THREERoot(params) {

&nbsp; params = utils.extend({

&nbsp;   fov: 60,

&nbsp;   zNear: 10,

&nbsp;   zFar: 100000,



&nbsp;   createCameraControls: true

&nbsp; }, params);



&nbsp; this.renderer = new THREE.WebGLRenderer({

&nbsp;   antialias: params.antialias,

&nbsp;   alpha: true

&nbsp; });

&nbsp; this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));

&nbsp; document.getElementById('three-container').appendChild(this.renderer.domElement);



&nbsp; this.camera = new THREE.PerspectiveCamera(

&nbsp;   params.fov,

&nbsp;   window.innerWidth / window.innerHeight,

&nbsp;   params.zNear,

&nbsp;   params.zfar

&nbsp; );



&nbsp; this.scene = new THREE.Scene();



&nbsp; if (params.createCameraControls) {

&nbsp;   this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);

&nbsp; }



&nbsp; this.resize = this.resize.bind(this);

&nbsp; this.tick = this.tick.bind(this);



&nbsp; this.resize();

&nbsp; this.tick();



&nbsp; window.addEventListener('resize', this.resize, false);

}

THREERoot.prototype = {

&nbsp; tick: function () {

&nbsp;   this.update();

&nbsp;   this.render();

&nbsp;   requestAnimationFrame(this.tick);

&nbsp; },

&nbsp; update: function () {

&nbsp;   this.controls \&\& this.controls.update();

&nbsp; },

&nbsp; render: function () {

&nbsp;   this.renderer.render(this.scene, this.camera);

&nbsp; },

&nbsp; resize: function () {

&nbsp;   this.camera.aspect = window.innerWidth / window.innerHeight;

&nbsp;   this.camera.updateProjectionMatrix();



&nbsp;   this.renderer.setSize(window.innerWidth, window.innerHeight);

&nbsp; }

};



////////////////////

// UTILS

////////////////////



var utils = {

&nbsp; extend: function (dst, src) {

&nbsp;   for (var key in src) {

&nbsp;     dst\[key] = src\[key];

&nbsp;   }



&nbsp;   return dst;

&nbsp; },

&nbsp; randSign: function () {

&nbsp;   return Math.random() > 0.5 ? 1 : -1;

&nbsp; },

&nbsp; ease: function (ease, t, b, c, d) {

&nbsp;   return b + ease.getRatio(t / d) \* c;

&nbsp; },

&nbsp; fibSpherePoint: (function () {

&nbsp;   var vec = {x: 0, y: 0, z: 0};

&nbsp;   var G = Math.PI \* (3 - Math.sqrt(5));



&nbsp;   return function (i, n, radius) {

&nbsp;     var step = 2.0 / n;

&nbsp;     var r, phi;



&nbsp;     vec.y = i \* step - 1 + (step \* 0.5);

&nbsp;     r = Math.sqrt(1 - vec.y \* vec.y);

&nbsp;     phi = i \* G;

&nbsp;     vec.x = Math.cos(phi) \* r;

&nbsp;     vec.z = Math.sin(phi) \* r;



&nbsp;     radius = radius || 1;



&nbsp;     vec.x \*= radius;

&nbsp;     vec.y \*= radius;

&nbsp;     vec.z \*= radius;



&nbsp;     return vec;

&nbsp;   }

&nbsp; })(),

&nbsp; spherePoint: (function () {

&nbsp;   return function (u, v) {

&nbsp;     u === undefined \&\& (u = Math.random());

&nbsp;     v === undefined \&\& (v = Math.random());



&nbsp;     var theta = 2 \* Math.PI \* u;

&nbsp;     var phi = Math.acos(2 \* v - 1);



&nbsp;     var vec = {};

&nbsp;     vec.x = (Math.sin(phi) \* Math.cos(theta));

&nbsp;     vec.y = (Math.sin(phi) \* Math.sin(theta));

&nbsp;     vec.z = (Math.cos(phi));



&nbsp;     return vec;

&nbsp;   }

&nbsp; })()

};



function createTweenScrubber(tween, seekSpeed) {

&nbsp; seekSpeed = seekSpeed || 0.001;



&nbsp; function stop() {

&nbsp;   TweenMax.to(tween, 1, {timeScale:0});

&nbsp; }



&nbsp; function resume() {

&nbsp;   TweenMax.to(tween, 1, {timeScale:1});

&nbsp; }



&nbsp; function seek(dx) {

&nbsp;   var progress = tween.progress();

&nbsp;   var p = THREE.Math.clamp((progress + (dx \* seekSpeed)), 0, 1);



&nbsp;   tween.progress(p);

&nbsp; }



&nbsp; var \_cx = 0;



&nbsp; // desktop

&nbsp; var mouseDown = false;

&nbsp; document.body.style.cursor = 'pointer';



&nbsp; window.addEventListener('mousedown', function(e) {

&nbsp;   mouseDown = true;

&nbsp;   document.body.style.cursor = 'ew-resize';

&nbsp;   \_cx = e.clientX;

&nbsp;   stop();

&nbsp; });

&nbsp; window.addEventListener('mouseup', function(e) {

&nbsp;   mouseDown = false;

&nbsp;   document.body.style.cursor = 'pointer';

&nbsp;   resume();

&nbsp; });

&nbsp; window.addEventListener('mousemove', function(e) {

&nbsp;   if (mouseDown === true) {

&nbsp;     var cx = e.clientX;

&nbsp;     var dx = cx - \_cx;

&nbsp;     \_cx = cx;



&nbsp;     seek(dx);

&nbsp;   }

&nbsp; });

&nbsp; // mobile

&nbsp; window.addEventListener('touchstart', function(e) {

&nbsp;   \_cx = e.touches\[0].clientX;

&nbsp;   stop();

&nbsp;   e.preventDefault();

&nbsp; });

&nbsp; window.addEventListener('touchend', function(e) {

&nbsp;   resume();

&nbsp;   e.preventDefault();

&nbsp; });

&nbsp; window.addEventListener('touchmove', function(e) {

&nbsp;   var cx = e.touches\[0].clientX;

&nbsp;   var dx = cx - \_cx;

&nbsp;   \_cx = cx;



&nbsp;   seek(dx);

&nbsp;   e.preventDefault();

&nbsp; });

}



