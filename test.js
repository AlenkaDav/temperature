//alert(T);
//console.log(T); // �������� ������ ����������
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 80;

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//var col = chroma.scale(['yellow', 'red']).domain([0,T2+0.1*T2]);
var _n = 40;
var _time = 20;
var _Length = 100;
var _T1 = 200;
var _T2 = 300; 
var _alfa = 0.25;
var _Radius = 20;
var _Circle = true;
  
  var controls = new function(){
	//this.n = 50; //40
	this.time = _time;
	this.Length = _Length;
	this.T1 = _T1;
	this.T2 = _T2;
	this.alfa = _alfa;
	//this.detalisation = 20;// - ���-�� ��������� ��� ��������������
	//l = 2;
	//w = 1;
	this.Radius = _Radius;
	this.Circle = _Circle;
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
  
function UD( _time, _T1, _T2, _Length, _Radius, _Circle, _alfa){
	
	n = _n; // ����� ��������� � ���������
	L = _Length; // ����� � ������
	T1 = _T1;
	T2 = _T2;
	h = L/n;
	//alert(_n+' '+ _time+' '+ _T1+' '+ _T2+' '+ _Length+' '+ _Radius+' '+ _Circle+' '+ _alfa);
	T = $.init(_n, _time, _T1, _T2, _Length, _Radius, _Circle, _alfa,h)
	scene.remove(MyMesh);
	//console.log(T);
	var vertexIndex, colour, f,p;
	var faceIndices = [ 'a', 'b', 'c' ];
	
	var geometry = new THREE.PlaneGeometry(L,L,n,n);
	//alert(geometry.faces.length);
	for ( var I = 0; I < geometry.faces.length; I++ ) {
				f  = geometry.faces[ I ];
				for( var J = 0; J < 3; J++ ) { 
						vertexIndex = f[ faceIndices[ J ] ];
						p = geometry.vertices[ vertexIndex ];
						//console.log(geometry.faces[0]);
						nx = (p.x+0.5*L)/h; //���������� ������� �� x
						ny = p.y/h+0.5*L/h;
						COLOR = T[nx][ny];
						//alert(p.y+' ' +h+' '+0.5*L/h+'  '+ny);
						colour = new THREE.Color(COLOR,0,1-COLOR);
						f.vertexColors[ J ] = colour;
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
	
	//detalisation = 20;// - ���-�� ��������� ��� ��������������
	//l = 2;
	//w = 1;
	//alert(_time);
	var _Radius = controls.Radius;
	var _Circle = controls.Circle;
	UD ( _time, _T1, _T2, _Length, _Radius, _Circle,_alfa);
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
	} //���� �� �������� - �����������

	//window.onload = init;
	window.addEventListener('resize',onResize,false);
	