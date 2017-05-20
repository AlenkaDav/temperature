$.init = function(){
	n = 4;
	time = 1;
	Length = 100;
	T1 = 290;
	T2 = 310;
	alfa = 0.25* Math.PI;
	alert(alfa);
	direction = new Vector;
	direction.x = Math.cos(alfa);
	direction.y = Math.sin(alfa);
	detalisation = 10;// - кол-во разбиений при интегрировании
	l = 2;
	w = 1;
	//r = new Vector;
	//r = direction;
	T_ = $.InstantTemperature(n,time,Length,T1,T2,direction,detalisation,l,w);
//sum = $.Integrate(r,time,T1,T2,direction,detalisation,l,w);
	//console.log(T);
	//console.log(sum);
	return T_;
}