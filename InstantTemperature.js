$.InstantTemperature = function (n,time,Length,T1,T2,direction,detalisation,l,w){ // n - число детализации
	T = [];//двумернй массив температуры от координаты
	var h = Length/n; //шаг детализации
	var r = new Vector;
	//alert(h+' '+n);
	//r = direction;
	for (var i=0; i<n; i++){
		T[i] = [];
		r.x = (i*h - (Length/2)); 
		for (var j=0; j<n; j++){
			r.y = (j*h - (Length/2)); 
			T[i][j] = $.Integrate(r,time,T1,T2,direction,detalisation,l,w);//
			//T[i][j].y = r.y;
		}
	}
	return T;
	
}
