//codes for cart clicks
function Opencart() {
   this.drop = function () {
      let cart = document.querySelector("#carts");
      if (cart.style.display == "none") {
         cart.style.display = "block";
      }
      else {
         cart.style.display = "none";  
      }
   }
}    
let droper = new Opencart();
function fill (){
   droper.drop();
}  


   //codes for item counter;
let sum = (function () {
    counter = 0;
   return function () {
      counter += 1;
      document.getElementById("num-count").innerHTML = counter;
      return counter;
     
   }
   
})();
let min = (function () {
   counter = counter;
   return function () {
      
      if (counter>=1) {
         --counter;
      }
      document.getElementById("num-count").innerHTML = counter;
      return counter;
     
   }
   
})();  
//code for svg thumbnail mouse event
document.getElementById("prev").addEventListener("mouseover", () => {
   
  let a=document.getElementById("ones").style.display="none"
 let b= document.getElementById("twos").style.display="block"
   
});
document.getElementById("prev").addEventListener("mouseout", () => {
   
  let a=document.getElementById("ones").style.display="block"
 let b= document.getElementById("twos").style.display="none"
   
});
document.getElementById("next").addEventListener("mouseover", () => {
   
  let a=document.getElementById("seco").style.display="none"
 let b= document.getElementById("secons").style.display="block"
   
});
document.getElementById("next").addEventListener("mouseout", () => {
   
  let a=document.getElementById("seco").style.display="block"
 let b= document.getElementById("secons").style.display="none"
   
});


let price =  125.00;
document.getElementById('summ').addEventListener("click",take)
function take() {
   let v = price  * counter;

   document.getElementById('prices').innerHTML = "$" + v;
   document.getElementById('xs').innerHTML = counter;
   document.getElementById('little-num').innerHTML = counter;

   document.getElementById('cartinfo-enc').style.display="block";
  document.getElementById('empty').style.display = "none";
   
   
   if (counter==0) {
      document.getElementById('empty').style.display = "block";
      document.getElementById('cartinfo-enc').style.display="none";

   
   }
   else if(counter>0) {
      document.getElementById('empty').style.display = "none";
      document.getElementById('cartinfo-enc').style.display="block";

   
   };
  
};

document.getElementById('dusts').addEventListener("click", dust);
function dust() {
   document.getElementById('cartinfo-enc').style.display="none";
   document.getElementById('empty').style.display = "block";
   document.getElementById('little-num').innerHTML = counter - counter;
   
   
     
}



//codes for opening and closing side menu
function OpenMenu(open) {
   this.open = function () {
      
         document.getElementById("menu-drop").style.left = "0";
         document.getElementById("shadow-menu-drop").style.display = "block";
  
      
   }
 
   this.close= function(){
      document.getElementById("menu-drop").style.left = "-50%";
      document.getElementById("shadow-menu-drop").style.display="none";  
   }
      
 
   
}

function showIt() {
   let show = new OpenMenu();
    show.open();
      
}
function closeIt() {
   let show = new OpenMenu();
   show.close(); 
}


//codes for image change with thumbnails
let a;
let b;

let thumbIndex = 0;
changeIndex(thumbIndex);
function pick(n) {
   changeIndex(thumbIndex = n);
}

function changeIndex(n) {

a = document.querySelectorAll(".mov");
for (let i = 0; i < a.length; i++) {
   a[i].style.display = "none";
   
   }
   d = document.querySelectorAll(".t-shoes");
for (let i = 0; i < d.length; i++) {

   d[i].style.border = "none";
   
   }

b = document.querySelectorAll("img.shoes");
for (let q = 0; q < b.length; q++) {
   b[q].style.display = "none"; 
     
   }


   b[thumbIndex].style.display = "block";
   d[thumbIndex].style.border = "1px solid  hsl(26, 100%, 55%)";
   
   
    
     
   
      a[thumbIndex].style.display = "block";
      d[0].addEventListener("mouseover", () => {
         a[0].style.display = 'block';
         thumbIndex = 0;
         
      });
   if (thumbIndex == 0) {
      d[0].addEventListener("mouseout", () => {
         a[0].style.display = 'block';
      });
   }
   else {
      d[0].addEventListener("mouseout", () => {
         a[0].style.display = 'none';
      });
 }
   
   
      d[1].addEventListener("mouseover", () => {
         a[1].style.display = 'block';
         thumbIndex = 1;
      });
      if (thumbIndex == 1) {
         d[1].addEventListener("mouseout", () => {
            a[1].style.display = 'block';
         });
      } else {
         d[1].addEventListener("mouseout", () => {
            a[1].style.display = 'none';
     });
      }
   
      
      d[2].addEventListener("mouseover", () => {
         a[2].style.display = 'block';
         thumbIndex =2
      });
      if (thumbIndex == 2) {
         d[2].addEventListener("mouseout", () => {
            a[2].style.display = 'block';
            
            
         
         });
      } else {
         d[2].addEventListener("mouseout", () => {
            a[2].style.display = 'none';
      
            
         
         });
      }
   
      d[3].addEventListener("mouseover", () => {
         a[3].style.display = 'block';
      
         thumbIndex = 3;
      });
   
   if (thumbIndex == 3) {
      d[3].addEventListener("mouseout", () => {
         a[3].style.display = 'block';
        
            
         
      });
   } else {
      d[3].addEventListener("mouseout", () => {
         a[3].style.display = 'none';
        
            
         
      });
   }

}

//code for closing lightbox.
function Closebig(close) {
   this.close = function () {
   
      document.getElementById("cover").style.display="none";
      
   }
      
}let show = new Closebig();
document.getElementById("closed").onclick=function closebig() {
   show.close();
}
document.getElementById("closec").onclick=function closebig() {
   show.close();
}
//codes for changing close svg.
document.getElementById("closed").addEventListener("mouseover", () => {
   document.getElementById("closec").style.display = 'block';
   document.getElementById("closed").style.display = 'none';
});
  
   document.getElementById("closec").addEventListener("mouseout", () => {
      document.getElementById("closed").style.display = 'block';
      document.getElementById("closec").style.display = 'none';
   });
  
      
//codes for thumbnails navigation for big images.

let slideIndex = 1;
showIndex(slideIndex);
function plusIndex(m) {
   showIndex(slideIndex+=m);
}
function current(m) {
   showIndex(slideIndex=m);
}

function showIndex(m) {
   let j;
   let i;
   let x = document.querySelectorAll("img.sh");
   let y = document.querySelectorAll(".t-shoe");
   let z = document.querySelectorAll(".light");
   
 if (m > x.length) {
      slideIndex = 1;
   }
  
   if (m < 1) {
      slideIndex = x.length;
   }
   
   for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
     }
  
   for (j = 0; j < y.length; j++) {
      y[j].style.border = "none";
    }
   for (u = 0; u < z.length; u++) {
      z[u].style.display = "none";
   }
   y[slideIndex - 1].style.border = "1px solid  hsl(26, 100%, 55%)";
   z[slideIndex - 1].style.display = "block";
   x[slideIndex - 1].style.display = "block";

   //codes to show exact image from normal image in home to lightbox 
   
   b[0].addEventListener("click",
      () => {
         document.getElementById("cover").style.display = "flex";
         
         changeIndex(0);
         slideIndex = 1;
        
         showIndex(1);
   
   });

   b[1].addEventListener("click",
      () => {
         document.getElementById("cover").style.display = "flex";
         thumbIndex = 1;
         changeIndex(1);
         slideIndex = 2;
         showIndex(2);
   
   });
  b[2].addEventListener("click",
      () => {
         document.getElementById("cover").style.display = "flex";
         slideIndex = 3;

         showIndex(3);
 });
   b[3].addEventListener("click",
      () => {
         document.getElementById("cover").style.display = "flex";
   
         slideIndex = 4;

         showIndex(4);
   
      
   
      });
      var one = document.getElementById("t-1");
      document.getElementById("ts-i").addEventListener("click", wan);
      function wan() {
         slideIndex = 1
         showIndex(1);
      }
      
      let two = document.getElementById("t-2");
      document.getElementById("ts-ii").addEventListener("click", twu);
   function twu() {
      slideIndex = 2;
      showIndex(2);
   }
      
      let three = document.getElementById("t-3");
      document.getElementById("ts-iii").addEventListener("click", tri);
      function tri() {
         slideIndex = 3;
         showIndex(3);
        
      };
      
      let four = document.getElementById("t-4");
      document.getElementById("ts-iv").addEventListener("click", fri);
      function fri() {
         slideIndex = 4;
         showIndex(4);
       
      }
      

   //event listeners for image thumbnails
   y[0].addEventListener("mouseover", () => {
      z[0].style.display = 'block';
   
     
   });
   if (slideIndex==1) {
      y[0].addEventListener("mouseout", () => {
         z[0].style.display = 'block';
         
         
      
      });
   } else {
      y[0].addEventListener("mouseout", () => {
         z[0].style.display = 'none';
     
         
      
      });
   }
   
   y[1].addEventListener("mouseover", () => {
      z[1].style.display = 'block';
    
   });
   if (slideIndex==2) {
      y[1].addEventListener("mouseout", () => {
         z[1].style.display = 'block';
         
         
      
      });
   } else {
      y[1].addEventListener("mouseout", () => {
         z[1].style.display = 'none';
        
         
      
      });
   }
  
    y[2].addEventListener("mouseover", () => {
      z[2].style.display = 'block';
     });
   if (slideIndex==3) {
      y[2].addEventListener("mouseout", () => {
         z[2].style.display = 'block';
       
         
      
      });
   } else {
      y[2].addEventListener("mouseout", () => {
         z[2].style.display = 'none';
      });
   }
   y[3].addEventListener("mouseover", () => {
      z[3].style.display = 'block';
   });
   if (slideIndex==4) {
      y[3].addEventListener("mouseout", () => {
         z[3].style.display = 'block';
         });
   } else {
      y[3].addEventListener("mouseout", () => {
         z[3].style.display = 'none';
         y[3].style.border = "none";
          });
   }
 } 

  

