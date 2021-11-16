var is_pressed=false;

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
  //alert(suma);


  
    document.getElementById("punkty_1").innerHTML +=  suma ;

   
  

  

}


}















