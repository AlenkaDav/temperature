ALG = {}

ALG.sum = function(a, b) {
	return a + b;
}
ALG.VectNumbIncr = function(a,n){
	c = new Vector;
	c.x=a.x*n;
	c.y=a.y*n;
	return c;	
}
ALG.VectLenth = function(a){
	 c=a.x*a.x+a.y*a.y;
	 return Math.sqrt(c);
}

ALG.Vectsum = function(a,b) {
	c = new Vector;
	c.x=a.x+b.x;
	c.y=a.y+b.y;
	return c;
}
ALG.VectScalIncr = function (a,b){
	return a.x*b.x+a.y*b.y;
}
ALG.VectDecreace = function(a,b){
	c = new Vector;
	c.x = a.x-b.x;
	c.y = a.y-b.y;
	return c;
}


ALG.moment_accel=function(r1,r2,r3,m1,expm1,m3,expm3){ //ускорение тела r2 m2
	
	r21=ALG.VectDecreace(r1,r2);
	eR1=ALG.VectNumbIncr(r21,1/ALG.VectLenth(r21));
	r23=ALG.VectDecreace(r3,r2);
	eR3=ALG.VectNumbIncr(r23,1/ALG.VectLenth(r23));
	//a2= new Vector;
	//a23= new Vector;
	//a21= new Vector;
	absA21 = 2.98043 *m1/ALG.VectScalIncr(r21,r21);
	absA23 = 2.98043 *m3/ALG.VectScalIncr(r23,r23); //0.044614
	expm1=expm1-33;
	expm3=expm3-33;
	a21=ALG.VectNumbIncr(eR1,absA21);
	a23=ALG.VectNumbIncr(eR3,absA23);
	exp1 = Math.pow(10, expm1);
	exp3 = Math.pow(10, expm3);
	a21=ALG.VectNumbIncr(a21,exp1);
	a23=ALG.VectNumbIncr(a23,exp3);
	a2=ALG.Vectsum(a21,a23);
	a2=ALG.VectNumbIncr(a2,1/149597870000);
	//return a2;
	return a2;
}

ALG.momentV = function (v,a,ti){
	dv=ALG.VectNumbIncr(a,ti);
	v1=ALG.Vectsum(dv,v);
	return v1;
}
ALG.momentR = function(r,v,ti){
	dr=ALG.VectNumbIncr(v,ti);
	r1=ALG.Vectsum(dr,r);
	return r1;
}