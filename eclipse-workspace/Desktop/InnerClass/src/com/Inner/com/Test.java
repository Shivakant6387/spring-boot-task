package com.Inner.com;
class Outer{
		static int x=20;
		Inner i =new Inner();
class Inner{
int y=30;
public void Innerdisplay() {
	System.out.println(x+","+y);
}

	}

public void outerDisplay() {
	//Inner i =new Inner();
	i.Innerdisplay();
	System.out.println(i.y);
}	
}
public class Test {//nestedInner
public static void main(String[]args) {
	//Outer o= new Outer();
	//o.outerDisplay();
	Outer.Inner oi= new Outer().new Inner();
	oi.Innerdisplay();
}
}
