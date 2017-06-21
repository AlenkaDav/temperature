//alert(T);
//console.log(T); // получаем массив температур
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 80;

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//var ColScale = chroma.scale(['red', 'yellow', 'white']);
var _n = 100;
var _time = 40;
var _Length = 100;
var _T1 = 300;
var _T2 = 200; 
var _alfa = 0.25;
var _Radius = 5;
var _Circle = true;
var _triang = true;
var _detalisation = 20;
	l = 2;
	w = 1;
  
  var controls = new function(){
	this.n = _n; //40
	this.time = _time;
	this.Length = _Length;
	this.T1 = _T1;
	this.T2 = _T2;
	this.alfa = _alfa;
	this.detalisation = _detalisation;// - кол-во разбиений при интегрировании
	//l = 2;
	//w = 1;
	this.Radius = _Radius;
	this.Circle = _Circle;
	this.triang = _triang;
	//alert(Radius);
	};
	
  
  var gui = new dat.GUI();
  
  var f1 = gui.addFolder('Circle');
  f1.add(controls, 'Radius',0,40);

  var f2 = gui.addFolder('Flat wave front');
  f2.add(controls, 'alfa',0,2);
 // f2.add(controls, 'maxSize');
 // f2.add(controls, 'message');

  var f3 = gui.addFolder('PARAMETERS');
  f3.add(controls,'T1',0,500);
  f3.add(controls,'T2',0,500);
  //f3.add(controls,'Length',0,300);
  f3.add(controls,'time',0,60);
  f3.add(controls,'Circle');
  f3.add(controls,'triang');
  f3.add(controls,'n');
  f3.add(controls,'detalisation');
  
function UD( _time, _T1, _T2, _Length, _Radius, _Circle, _alfa,_triang,_n,_detalisation){
	
	n = _n; // число разбиений в плоскости
	L = _Length; // длина и ширина
	T1 = _T1;
	T2 = _T2;
	detalisation = _detalisation;
	h = L/n;
	//alert(_n+' '+ _time+' '+ _T1+' '+ _T2+' '+ _Length+' '+ _Radius+' '+ _Circle+' '+ _alfa);
	if (_triang == true){
		C = $.CalculateArrC(l,w,_detalisation);
	} else {
		C = $.CalculateArrCSquare(l,w,_detalisation);
	}
	T = $.init(_n, _time, _T1, _T2, _Length, _Radius, _Circle, _alfa,h,_triang,C,_detalisation)
	scene.remove(MyMesh);
	//console.log(T);
	var vertexIndex, colour, f,p;
	var faceIndices = [ 'a', 'b', 'c' ];
	var Txy;
	var geometry = new THREE.PlaneGeometry(L,L,n,n);
	//alert(geometry.faces.length);
	for ( var I = 0; I < geometry.faces.length; I++ ) {
				f  = geometry.faces[ I ];
				for( var J = 0; J < 3; J++ ) { 
						vertexIndex = f[ faceIndices[ J ] ];
						p = geometry.vertices[ vertexIndex ];
						//console.log(geometry.faces[0]);
						nx = (p.x+0.5*L)/h; //координата вершины по x
						ny = p.y/h+0.5*L/h;
						//Txy = T[nx][ny];
						
						COLOR = T[nx][ny];
						var r, g, b;
						r = 1;
						if (COLOR <1/3) {
							r = COLOR*3;
							g = 0;
							b = 0;
						} else if (COLOR <2/3){
							r = 1;
							g = COLOR*3 - 1;
							b = 0;
						} else{
							r = 1;
							g = 1;
							b = COLOR*3 - 2;
						}
						//alert(p.y+' ' +h+' '+0.5*L/h+'  '+ny);
						colour = new THREE.Color(r,g,b);//(COLOR,0,1-COLOR);
						f.vertexColors[ J ] = colour;
						
						 // var COLOR = ColScale(Txy);
						// COLOR = String(COLOR);
						// //alert (COLOR);
						// /*function hex2rgb(hex) {
							// return (function (v) {
							// return [v >> 16 & 255, v >> 8 & 255, v & 255];
							// })(parseInt(hex, 16));
						// }*/
						// //console.log(COLOR)
						// function HexTo_R(h) { return parseInt((cut_Hex(h)).substring(0, 2), 16) };
						// function HexTo_G(h) { return parseInt((cut_Hex(h)).substring(2, 4), 16) };
						// function HexTo_B(h) { return parseInt((cut_Hex(h)).substring(4, 6), 16) };
						// function cut_Hex(h) { return h.substring(1, 7)};
							
						// colour = new THREE.Color(HexTo_R(COLOR),HexTo_G(COLOR), HexTo_B(COLOR));//hex2rgb(COLOR);
						// //colour = new THREE.Color;//(COLOR,0,1-COLOR);
						// //colour = COLOR;
						// console.log(colour)
						// f.vertexColors[ J ] = colour;

				}
	}	
	//COLOR= col(T[1][1]);
	var materials = new THREE.MeshBasicMaterial( { vertexColors: THREE.VertexColors} );
				
	var MyMesh = new THREE.Mesh( geometry, materials );
				
	scene.add( MyMesh );
	render();
	 
  document.getElementById('elem').onclick = OnClick; 
}

function OnClick() { //OnClick;
	var _time = controls.time;
	var _Length = controls.Length;
	var _T1 = controls.T1;
	var _T2 = controls.T2;
	var _alfa = controls.alfa;
	
	//detalisation = 20;// - кол-во разбиений при интегрировании
	//l = 2;
	//w = 1;
	//alert(_time);
	var _Radius = controls.Radius;
	var _Circle = controls.Circle;
	var _triang = controls.triang;
	var _n = controls.n;
	var _detalisation = controls.detalisation;
	UD ( _time, _T1, _T2, _Length, _Radius, _Circle,_alfa, _triang,_n,_detalisation);
  };
  
  window.onload = OnClick;
  
				
	var render = function () {
		requestAnimationFrame(render);
		renderer.render(scene, camera);
	};
			
			
	function onResize(){ //moving of camera
		camera.aspect = window.innerWidth/window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth,window.innerHeight);
	} //пока не работает - разобраться

	//window.onload = init;
	window.addEventListener('resize',onResize,false);
	