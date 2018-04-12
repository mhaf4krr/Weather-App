 document.querySelector('button').addEventListener('click',getInfo);

 function getInfo(){
    console.log('event heard');

   let city=document.querySelector('#city').value;
   console.log(city);
    let weather=new XMLHttpRequest();
    
    weather.open('GET',`https://api.apixu.com/v1/current.json?key=11de647993324c438fe175647181204&q=${city}`,true);

    weather.send();
    
   weather.onload=function(){

   if(this.status===200)
   {
      let newWeather=JSON.parse(this.responseText);
      
      
      document.querySelector('#city-name').value=newWeather.location.name;
      document.querySelector('#region-name').value=newWeather.location.region;
      document.querySelector('#condition').value=newWeather.current.condition.text;
      document.querySelector('#temp').value=newWeather.current.temp_c;
      
   }

   else if(this.status===400 || this.status===404)
   {
      alert('please check your entry');
   }

}

  
 }
