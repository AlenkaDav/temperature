//alert(T);
//console.log(T); // получаем массив температур
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 100;

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//var col = chroma.scale(['yellow', 'red']).domain([0,T2+0.1*T2]);

var controls = new function(){
	//this.n = 50; //40
	this.time = 20;
	this.Length = 100;
	this.T1 = 100;
	this.T2 = 310;
	this.alfa = 0.4* Math.PI;
	this.detalisation = 20;// - кол-во разбиений при интегрировании
	//l = 2;
	//w = 1;
	this.Radius = 15;
	this.Circle = true;
	};
	document.getElementById('elem').onclick = function() {
 //button.onclick = function OnClick() { //OnClick;

    cube.rotation.x += controls.rotationSpeed;
	_n += controls.n 
	_time += controls.time;
	_Length += controls.Length;
	_T1 += controls.T1;
	_T2 += controls.T2;
	_alfa += controls.direction;
	
	//detalisation = 20;// - кол-во разбиений при интегрировании
	//l = 2;
	//w = 1;
	_Radius += controls.Radius;
	_Circle += controls.Circle;
	UD(_n, _time, _T1, _T2, _Length, _Radius, _Circle,_alfa);
  };
  
  var gui = new dat.GUI();
  
  var f1 = gui.addFolder('Circle');
  f1.add(controls, 'Radius',0,40);

  var f2 = gui.addFolder('Flat wave front');
  f2.add(controls, 'direction',0,2);
 // f2.add(controls, 'maxSize');
 // f2.add(controls, 'message');

  var f3 = gui.addFolder('PARAMETERS');
  f3.add(controls,'T1',0,500);
  f3.add(controls,'T2',0,500);
  f3.add(controls,'Length',0,300);
  f3.add(controls,'time',0,60);
  f3.add(controls,'Circle');
  
  
function UD(_n, _time, _T1, _T2, _Length, _Radius, _Circle, _alfa){
	n = _n; // число разбиений в плоскости
	L = _Length; // длина и ширина
	T1 = _T1;
	T2 = _T2;
	h = L/n;
	T = $.init(_n, _time, _T1, _T2, _Length, _Radius, _Circle, _alfa)
	
	scene.remove(MyMesh);
	
	//var vertexIndex, colour, f,p;
	var faceIndices = [ 'a', 'b', 'c' ];
	
	var geometry = new THREE.PlaneGeometry(L,L,n,n);
	//alert(geometry.faces.length);
	for ( var i = 0; i < geometry.faces.length; i ++ ) {
				f  = geometry.faces[ i ];
				for( var j = 0; j < 3; j++ ) {
						vertexIndex = f[ faceIndices[ j ] ];
						p = geometry.vertices[ vertexIndex ];
						nx = (p.x+0.5*L)/h; //координата вершины по x
						ny = (p.y+0.5*L)/h;
						COLOR = T[nx][ny];
						colour = new THREE.Color(COLOR,0,1-COLOR);
						f.vertexColors[ j ] = colour;
				}
	}	
	//COLOR= col(T[1][1]);
	var materials = new THREE.MeshBasicMaterial( { vertexColors: THREE.VertexColors} );
				
	var MyMesh = new THREE.Mesh( geometry, materials );
				
	scene.add( MyMesh );
	render();
}
				
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
	