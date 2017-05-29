$.InstantTemperature = function (n,time,Length,T1,T2,direction,detalisation,l,w,Radius,Circle,h,triang){ // n - число детализации
	T = [];//двумернй массив температуры от координаты
	//var h = Length/n; //шаг детализации
	var r = new Vector;
	//TempDiap = Math.abs(T1-T2)*1.2; //диапазон температур (немного расширен, на всякий случай)
	//OTempDiap = 1/TempDiap;
	LowTemp = 10000; // минимальная температура (для нормировки)
	MaxTemp = 0;//Math.max(T1,T2)+TempDiap/12; //максимальная
	for (var i=0; i<n+1; i++){
		T[i] = [];
		r.x = (i*h - (Length/2)); 
		for (var j=0; j<n+1; j++){
			r.y = (j*h - (Length/2));
			if (Circle == true){
				T[i][j] = $.IntegrateCircle(r,time,T1,T2,direction,detalisation,l,w, Radius,triang)//-LowTemp)*OTempDiap);
			} else {
				T[i][j] = $.Integrate(r,time,T1,T2,direction,detalisation,l,w,triang);//-LowTemp)*OTempDiap);
			}
			if (T[i][j] >MaxTemp){
				MaxTemp = T[i][j];
			}; 
			if (T[i][j] < LowTemp){
				LowTemp = T[i][j];
			};
			//двумерный массив температур от 0 до 1
		}
	}
	TempDiap = MaxTemp - LowTemp;
	OTempDiap = 1/TempDiap;
	for (var i=0; i<n+1; i++){
		for (var j=0; j<n+1; j++){
			T[i][j] = (T[i][j] - LowTemp)*OTempDiap;
		}
	}
	
	return T;
	
}
