// declare 
function go (){
var xreq = new XMLHttpRequest(); 
// open 
  xreq.open('GET','dev.json',true); 
// load  
xreq.onload= function (){ 
  
  var xdata =JSON.parse(xreq.responseText)  ;  
  for( i=0; i<xdata.length;i++)
  {
document.write("<p> "+xdata[i].name     +"  "+xdata[i].age +"<hr></p>");
  }
}
xreq.send(); 
// send 

} 

//  get text  

function text() 
{ 
  var xreq =new XMLHttpRequest(); 
  xreq.open('GET','ssm.txt',true); 

  xreq.onload=function (){
  var xdata = xreq.responseText; 
  document.write(xdata); 

  }
xreq.send();



}