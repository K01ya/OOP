function testfunction1() {
    document.getElementById("test").innerHTML = "Hello";
    }
    function testfunction2() {
    document.getElementById("tes").innerHTML = "Hello";
    }
	
	
    let btn = document.getElementsById("click")
    function Poruka(){
     let mess = prompt("Sta vas interesuje?");
     localStorage.setItem('poruka', mess);
     
   }

   document.querySelector('#ev').addEventListener('click', btn.onclick = function()
   {document.getElementById("test").innerHTML = "Event radi"; });

   let el = document.querySelector('#mess');
   if(!localStorage.getItem('mess')) {saveMess();}
   el.textContent = localStorage.getItem('mess')

   let projekti {}
     name = "Proj",
     Projekat : [
       { 
         p1 = "3D",
         podaci = "text"
       }
      ]
   }
   function Fill(obj){
     let p1El = document.querySelector('#menu');
     let podaciEl = document.querySelector('#menu');

     p1El.textContent = obj['naziv'];
     
   }
   */
 let projektii = {
   Projekat1 : [
     {
    name: "3D Landscape",
    description: "Just trying to figure stuff out.",
    program:[ { naziv:"Blender", verzija:"2.9.8", format_fajla:"FBX"} ],
    cena: "200e"
     }
   ],
   Projekat2 : [
    {
   name: "Photo edit",
   description: "Just trying to figure stuff out.",
   program: [ { naziv:"Photoshop", verzija:"CC-2020", format_fajla:"JPG"} ],
   cena: "100e"
    }
  ],
  Projekat3 : [
    {
   name: "Website design",
   description: "Just trying to figure stuff out.",
   program : [ { naziv:"Illustrator", verzija:"CC", format_fajla:"EPS"} ],
   cena: "500e"
    }
  ]
  };
  
  console.log(projektii); 



  const url = 'Base.json'; // OVDE JAVLJA GRESKU
  async function getData(){
  const response = await fetch(url);
  const data = await response.json;
  console.log(data);
  }
  getData();