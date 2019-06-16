class complex {
 
  contructor(a,b) {
    this.a=a;
    this.b=b;
  }
  
  len() {
    return sqrt( this.a*this.a + this.b*this.b );
  }
  
  real() {
    return this.a;
  }
  
  img() {
    return this.b;
  }
  
  pow2() {
    return new Complex( this.a*this.a - this.b*this.b, 2*this.a*this.b );
  }
  
  // a+bi  *  c+di = ac+adi + bci + bdii = (ac-bd) + (ad + bc)i
  multiply( c ) {
    return new Complex( this.real()*c.real() - this.img()*c.img(), this.real*c.img() + this.img()*c.real() );
  }
  
  addition(c) {
    return new Complex( this.real() + c.real(), this.img() + c.img() );
  }
  
  subtraction(c) {
    return new Complex( this.real() - c.real(), this.img() - c.img() );
  }
     
  asString() {
    return this.a+"+"+this.b+"i";
  }
}
