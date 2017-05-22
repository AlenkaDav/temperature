$.InstantTemperature = function (n,time,Length,T1,T2,direction,detalisation,l,w,Radius,Circle){ // n - ����� �����������
	T = [];//�������� ������ ����������� �� ����������
	var h = Length/n; //��� �����������
	var r = new Vector;
	TempDiap = Math.abs(T1-T2)*1.2; //�������� ���������� (������� ��������, �� ������ ������)
	OTempDiap = 1/TempDiap;
	LowTemp = Math.min(T1,T2)-TempDiap/12; // ����������� ����������� (��� ����������)
	MaxTemp = Math.max(T1,T2)+TempDiap/12; //������������
	for (var i=0; i<n+1; i++){
		T[i] = [];
		r.x = (i*h - (Length/2)); 
		for (var j=0; j<n+1; j++){
			r.y = (j*h - (Length/2));
			if (Circle == true){
				T[i][j] = (($.IntegrateCircle(r,time,T1,T2,direction,detalisation,l,w, Radius)-LowTemp)*OTempDiap);
			} else {
				T[i][j] = (($.Integrate(r,time,T1,T2,direction,detalisation,l,w)-LowTemp)*OTempDiap);
			}
			//��������� ������ ���������� �� 0 �� 1
		}
	}
	return T;
	
}
