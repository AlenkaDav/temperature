$.IntegrateCircle = function (r,time,T1,T2,direction,detalisation,l,w,Radius){
	d = detalisation; // ���������� ��������, �� ������� ��������� ��� ������ ���������
	// ��� ���������� � ����������
	k = new Vector;
	c = new Vector;
	k.x = -3.14;
	h = 6.28/d; //�������� ���� ��������������
	dS = h*h;
	sum = 0;
	r1 = new Vector;
	r2 = new Vector;
		for (mm=0; mm<d; mm++){
			k.y = -3.14;
			for (oo=0; oo<d; oo++){
				c = $.CalculateC (l,w,k);//���������� ������� ��������� ��������
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
				k.y = k.y + h;
			}/**/
			k.x = k.x + h;
		}
		sum = sum/(8*Math.PI*Math.PI);
		return sum;
}