T = $.init()
//alert(T);
console.log(T);
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 100;

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

/*var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );*/

var col = chroma.scale(['yellow', 'red']).domain([0,T2+0.1*T2]);
alert(typeof col(T[1][1]));

	n = 4;
	L = 100;
	T1 = 290;
	T2 = 310;
	h = L/n;
	
	var vertexIndex, colour, f,p;
	var faceIndices = [ 'a', 'b', 'c' ];
	
	var geometry = new THREE.PlaneGeometry(L,L,n,n);
	//alert(geometry.faces.length);
	for ( var i = 0; i < geometry.faces.length; i ++ ) {
				f  = geometry.faces[ i ];
				for( var j = 0; j < 3; j++ ) {
						vertexIndex = f[ faceIndices[ j ] ];
						p = geometry.vertices[ vertexIndex ];
						nx = (p.x+0.5*L)/h;
						ny = (p.y+0.5*L)/h;
						//COLOR = String(col(T[nx][ny]));
						//COLOR = COLOR.substring(1);
						//alert('0x'+COLOR);
						//string = '0x'+COLOR;
						COLOR = T[nx][ny];
						colour = new THREE.Color(COLOR,0,1-COLOR);
						f.vertexColors[ j ] = colour;
				}
	}	
	//COLOR= col(T[1][1]);
	var materials = new THREE.MeshBasicMaterial( { /*color: 0xff888f,*/ vertexColors: THREE.VertexColors} );/*, */
				
	var MyMesh = new THREE.Mesh( geometry, materials );
				
	scene.add( MyMesh );
				
	var render = function () {
		requestAnimationFrame(render);
		//здесь было про поворотик кубика
		//MyMesh.rotation.x += 0.1;
		//MyMesh.rotation.y += 0.1;
		renderer.render(scene, camera);
	};
			
			
	function onResize(){ //moving of camera
		camera.aspect = window.innerWidth/window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth,window.innerHeight);
	}

	//window.onload = init;
	window.addEventListener('resize',onResize,false);
	render();