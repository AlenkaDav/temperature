
	
$.CalculateC = function(l,w,kk){ //���������� ��������� �������� ��� ������� ��������� �������
		//k = new Vector;
		//k.x = 0.9656;
		//k.y = 0.26;
		
var a = [];		
a[0] = new Vector;		
a[1] = new Vector;
a[2] = new Vector;
a[3] = new Vector;
a[4] = new Vector;
a[5] = new Vector;
a[6] = new Vector;

	a[1].x = l;
	a[1].y = 0;
	a[2].x = 0.5*l;
	a[2].y = 0.866*l;
	a[3].x = -0.5*l;
	a[3].y = 0.866*l;
	a[4].x = -l;
	a[4].y = 0;
	a[5].x = -0.5*l;
	a[5].y = -0.866*l;
	a[6].x = 0.5*l;
	a[6].y = -0.866*l;
	
	SumChislitel = new Vector;
	c = new Vector;
	SumChislitel.x = 0;
	SumChislitel.y = 0;
	SumZnamenatel = 6;
	for (ii=1;ii<7;ii++){
		arg = ALG.VectScalIncr(kk,a[ii]);
		alfa = ALG.VectNumbIncr(a[ii],Math.sin(arg)*w*0.5);
		SumChislitel = 	ALG.Vectsum(alfa,SumChislitel);
		SumZnamenatel = SumZnamenatel-Math.cos(arg);
	};
	Znamenatel = 1.0/Math.sqrt(SumZnamenatel);
	var c = ALG.VectNumbIncr(SumChislitel,Znamenatel);
	return c;
	//console.log(c); ���������� let
};
