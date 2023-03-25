let light = document.getElementById("batti");
setInterval(function (){
  light.classList.add("blue")
  light.classList.remove("red");
  setTimeout(()=>{
 light.classList.remove("blue")
 light.classList.add("red")
  }, 500)
}, 1000);

