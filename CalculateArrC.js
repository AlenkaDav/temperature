
	
$.CalculateArrC = function(l,w,detalisation){ //вычисление групповой скорости для данного волногого вектора
		kk = new Vector;
		kk.x = -3.14;
		//k.y = 0.26;
		
var d = detalisation;	
var H = 6.28/d;	
var a = [];		
a[0] = new Vector;		
a[1] = new Vector;
a[2] = new Vector;
a[3] = new Vector;
a[4] = new Vector;
a[5] = new Vector;
a[6] = new Vector; // создание векторов к соседям в кристаллической решетке

	a[1].x = l;
	a[1].y = 0;
	a[2].x = 0.5*l;
	a[2].y = l*Math.sqrt(3)/2;
	a[3].x = -0.5*l;
	a[3].y = l*Math.sqrt(3)/2;
	a[4].x = -l;
	a[4].y = 0;
	a[5].x = -0.5*l;
	a[5].y = -l*Math.sqrt(3)/2;
	a[6].x = 0.5*l;
	a[6].y = -l*Math.sqrt(3)/2;
	
CalculateC = function(l,w,k){
	var SumChislitel = new Vector;
	var c = new Vector;
	SumChislitel.x = 0;
	SumChislitel.y = 0;
	var SumZnamenatel = 6;
	for (var ii=1;ii<4;ii++){
		var arg = ALG.VectScalIncr(k,a[ii]);
		var alfa = ALG.VectNumbIncr(a[ii],Math.sin(arg)*w);
		SumChislitel = 	ALG.Vectsum(alfa,SumChislitel);
		SumZnamenatel = SumZnamenatel-(2*Math.cos(arg));
	};
	var Znamenatel = 1.0/Math.sqrt(SumZnamenatel);
	c = ALG.VectNumbIncr(SumChislitel,Znamenatel);
	return c;
};
	
	var C = [];
	for (var m=0; m<d; m++){
			C[m] = [];
			kk.y = -3.14;
			for (var o=0; o<d; o++){
				C[m][o] = CalculateC (l,w,kk);	
				kk.y = kk.y + H;
			}/**/
			kk.x = kk.x + H;
		};
return C;
	//console.log(c); посмотреть let
};

