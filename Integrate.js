$.Integrate = function (r,time,T1,T2,direction,detalisation,l,w) { //direction - вектор направления теплового фронта от Т1 к Т2
	//alert(r+' '+time+' '+T1+' '+T2+' '+direction+' '+detalisation+' '+l+' '+w);
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
		for (m=0; m<d; m++){
			k.y = -3.14;
			for (o=0; o<d; o++){
				c = $.CalculateC (l,w,k);//вычисление вектора групповой скорости
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
				k.y = k.y + H;
			}/**/
			k.x = k.x + H;
		}
		sum = sum/(8*Math.PI*Math.PI);
		return sum;
		//console.log(k);
}