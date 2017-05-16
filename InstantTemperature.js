function InstantTemperature(n,time,Length,T1,T2,direction,detalisation,l,w){ // n - число детализации
	T = [];//двумернй массив температуры от координаты
	h = Length/n; //шаг детализации
	r = new Vector;
				//r = direction;
	
	for (i=0; i<n; i++){
		T[i] = [];
		r.x = i*h - (Length/2); 
		for (j=0; j<n; j++){
			r.y = j*h - (Length/2); 
			T[i][j] = Integrate(r,time,T1,T2,direction,detalisation,l,w); //
		}
	}
	return T;
	//console.log(T);
}
