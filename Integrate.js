function Integrate(r,time,T1,T2,direction,detalisation,l,w) { //direction - вектор направления теплового фронта от Т1 к Т2
	d = detalisation; // количество отрезков, на которое разбиваем при взятии интеграла
	// все расстояния в ангстремах
	k = new Vector;
	k.x = -3.14;
	h = 6.28/d; //величина шага интегрирования
	dS = h*h;
	sum = 0;
	r1 = new Vector;
	r2 = new Vector;
		for (i=0; i<d; i++){
			k.y = -3.14;
			for (j=0; j<d; j++){
				c = k;//CalculateC (l,w,k);//вычисление вектора групповой скорости
				ct = ALG.VectNumbIncr(c,time);
				r1 = ALG.Vectsum(r,ct);
				r2 = ALG.VectDecreace(r,ct);
				if (ALG.VectScalIncr(r1,direction)>0){
					dSum1 = T2*dS;
				} else{
					dSum1 = T1*dS;
				}
				if (ALG.VectScalIncr(r2,direction)>0){
					dSum2 = T2*dS;
				} else{
					dSum2 = T1*dS;
				}
				sum = sum + dSum1 + dSum2; 
				k.y = k.y + h;
			}
			k.x = k.x + h;
		}
		sum = sum/(8*Math.PI*Math.PI);
		return sum;
		//console.log(k);
}