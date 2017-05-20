$.InstantTemperature = function (n,time,Length,T1,T2,direction,detalisation,l,w){ // n - ����� �����������
	T = [];//�������� ������ ����������� �� ����������
	var h = Length/n; //��� �����������
	var r = new Vector;
	TempDiap = Math.abs(T1-T2)*1.2;
	OTempDiap = 1/TempDiap;
	LowTemp = Math.min(T1,T2)-TempDiap/12;
	MaxTemp = Math.max(T1,T2)+TempDiap/12;
	//alert(h+' '+n);
	//r = direction;
	for (var i=0; i<n+1; i++){
		T[i] = [];
		r.x = (i*h - (Length/2)); 
		for (var j=0; j<n+1; j++){
			r.y = (j*h - (Length/2)); 
			T[i][j] = (($.Integrate(r,time,T1,T2,direction,detalisation,l,w)-LowTemp)*OTempDiap);//
			//T[i][j].y = r.y;
		}
	}
	return T;
	
}
