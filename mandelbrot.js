let maxiterations=100;

var frDiv;


function setup() {
  createCanvas(800, 800);
  pixelDensity(1);
  
  //frDiv = createDiv('');
  //noStroke();
}


function draw() {
   loadPixels();
  
   for( var x=0;x<width;x++) {
     for( var y=0;y<height;y++) {
       var a=0;
       var b=0;
       var c=map(x,0,width,-2,2);
       var d=map(y,0,height,-2,2);
              
       //var z = new Complex(0,0);
       //let a = map( x,0,width,-2,2 );
       //let b = map( y,0,height,-2, 2 );
       //var c = new Complex(a,b);
       
       //print( c.asString() );
       
       print( "x: "+x+"y: "+y );
       
       var n = 0;
       
       while( n<maxiterations ) {
          var aa=a*a-b*b + c;
          var bb=2*a*b + d;
       
          a=aa;
          b=bb;
                
         if (sqrt(a*a+b*b)>2) {
            break;
         } 
         
         n++;
       }
               
       var bright = map( n,0,maxiterations,0,1 );
       bright = map(sqrt(bright), 0, 1, 0, 255 );
       
       if (n==maxiterations) {
         bright=0;
       }
       
       //fill(bright);
       //rect(x,y,4,4);
       
       let pn = 4 * ( y * width + x);       
       
       pixels[ pn + 0 ] = bright;
       pixels[ pn + 1 ] = bright;
       pixels[ pn + 2 ] = bright;
       pixels[ pn + 3 ] = 255;
     }
   }
   updatePixels();
   
   //frDiv.html(floor(frameRate()));
}  
