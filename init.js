$.init = function(_n, _time, _T1, _T2, _Length, _Radius, _Circle, _alfa,h,_triang){
	//n = ; //40
	//time = 20;
	//Length = 100;
	//T1 = 100;
	//T2 = 310;
	//alfa = 0.4* Math.PI;
	//alert(alfa);
	direction = new Vector;
	direction.x = Math.cos(_alfa);
	direction.y = Math.sin(_alfa);
	detalisation = 20;// - кол-во разбиений при интегрировании
	l = 2;
	w = 1;
	//Radius = 15;
	//Circle = 1;
	//r = new Vector;
	//r = direction;
	T_ = $.InstantTemperature(_n,_time,_Length,_T1,_T2,direction,detalisation,l,w,_Radius,_Circle,h,_triang);
//sum = $.Integrate(r,time,T1,T2,direction,detalisation,l,w);
	//console.log(T);
	//console.log(sum);
	return T_;
} //надо разобраться с количеством разбиений