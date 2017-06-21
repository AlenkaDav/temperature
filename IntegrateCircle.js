$.IntegrateCircle = function (r,time,T1,T2,direction,detalisation,l,w,Radius,triang,C){
	d = detalisation; // количество отрезков, на которое разбиваем при взятии интеграла
	// все расстояния в ангстремах
	k = new Vector;
	c = new Vector;
	k.x = -3.14;
	H = 6.28/d; //величина шага интегрирования
	dS = H*H;
	sum = 0;
	r1 = new Vector;
	r2 = new Vector;
		for (mm=0; mm<d; mm++){
			k.y = -3.14;
			for (oo=0; oo<d; oo++){
				// if (triang != true){
					// c = $.CalculateCSquare (l,w,k);//вычисление вектора групповой скорости
				// } else {
					// c = $.CalculateC(l,w,k);
				// };
				c = C[mm][oo];
				ct = ALG.VectNumbIncr(c,time);
				r1 = ALG.Vectsum(r,ct);
				r2 = ALG.VectDecreace(r,ct);
				if (ALG.VectLenth(r1)>Radius){
					dSum1 = T2*dS;
				} else{
					dSum1 = T1*dS;
				}
				if (ALG.VectLenth(r2)>Radius){
					dSum2 = T2*dS;
				} else{
					dSum2 = T1*dS;
				}
				sum = sum + dSum1 + dSum2; 
				k.y = k.y + H;
			}/**/
			k.x = k.x + H;
		}
		sum = sum/(8*Math.PI*Math.PI);
		return sum;
}