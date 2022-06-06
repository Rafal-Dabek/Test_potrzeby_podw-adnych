var is_pressed=false;

function done2()
{

  var suma = 0;

  if(document.getElementById("1_3").checked == true)
  {
      suma += 1
  }
  

  if(document.getElementById("2_5").checked == true)
  {
      suma += 1
  }
  

  if(document.getElementById("3_1").checked == true)
  {
      suma += 1
  }
 

  if(document.getElementById("4_2_2").checked == true)
  {
      suma += 1
  }
 

  if(document.getElementById("5_4").checked == true)
  {
      suma += 1
  }
  

  if(document.getElementById("6_5").checked == true)
  {
      suma += 1
  }
  

  if(document.getElementById("7_1").checked == true)
  {
      suma += 1
  }
 

  if(document.getElementById("8_4_2").checked == true)
  {
      suma += 1
  }
  

  if(document.getElementById("9_5").checked == true)
  {
      suma += 1
  }
 

  if(document.getElementById("10_3_2").checked == true)
  {
      suma += 1
  }
  

  

  var ele = document.getElementsByTagName('input');
    
        var ele = document.getElementsByTagName('input');
        var d=[];
        for(i = 0; i < ele.length; i++) {
            if(ele[i].type="radio") {
              
                if(ele[i].checked)
                {

                  if(ele[i].value!=null)d+= ele[i].value ;
                 
                }
                    

            }
        


          }


  var p=Array.from(d);

  if((d.length)!=10){
    alert("Nie wszytkie odpowiedzi są zaznaczone!")
  }

  if(d.length==10 && (is_pressed==false)){
    
    is_pressed=true;

    document.getElementById("punkty_1").innerHTML +=  suma + "/10 pkt";

  }

  
}

function done(){
  var suma=0;
  
  var ele = document.getElementsByTagName('input');
    

       


     
        var ele = document.getElementsByTagName('input');
        var d=[];
        for(i = 0; i < ele.length; i++) {
            if(ele[i].type="radio") {
              
                if(ele[i].checked)
                {

                  if(ele[i].value!=null)d+= ele[i].value ;
                 
                }
                    

            }
        


          }


  var p=Array.from(d);
 


if((d.length)!=11){
  alert("Nie wszytkie odpowiedzi są zaznaczone")
}

if(d.length==11 && (is_pressed==false)){
  for(i=0;i<p.length;i++){

    suma+=parseInt(p[i]);
    }
  is_pressed=true;
  console.log(suma);

  
 


  
    document.getElementById("punkty_1").innerHTML +=  suma ;

   
  

  

}


}















