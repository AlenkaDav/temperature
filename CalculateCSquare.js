$.CalculateCSquare = function(l,w,kk){ //вычисление групповой скорости для данного волнового вектора
		//k = new Vector;
		//k.x = 0.9656;
		//k.y = 0.26;
		
var a = [];		
a[0] = new Vector;		
a[1] = new Vector;
a[2] = new Vector;
a[3] = new Vector;
a[4] = new Vector;
 // создание векторов к соседям в кристаллической решетке

	a[1].x = l;
	a[1].y = 0;
	a[2].x = 0;
	a[2].y = l;
	a[3].x = -l;
	a[3].y = 0;
	a[4].x = 0;
	a[4].y = -l;
	
	SumChislitel = new Vector;
	c = new Vector;
	SumChislitel.x = 0;
	SumChislitel.y = 0;
	SumZnamenatel = 4;
	for (ii=1;ii<3;ii++){
		arg = ALG.VectScalIncr(kk,a[ii]);
		alfa = ALG.VectNumbIncr(a[ii],Math.sin(arg)*w);
		SumChislitel = 	ALG.Vectsum(alfa,SumChislitel);
		SumZnamenatel = SumZnamenatel-(2*Math.cos(arg));
	};
	Znamenatel = 1.0/Math.sqrt(SumZnamenatel);
	var c = ALG.VectNumbIncr(SumChislitel,Znamenatel);
	return c;
	//console.log(c); посмотреть let
};

