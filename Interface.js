Intreface = function(){
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


};
elem.onclick = function() {
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
  