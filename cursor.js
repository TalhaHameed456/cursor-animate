var cursor = document.querySelector("#cursor");
// var frame = document.querySelector(".frame");
var frames = document.querySelectorAll(".frame")
const lerp = (x, y, a) => x * (1 - a) + y * a;

window.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.clientX+"px" 
    cursor.style.top = dets.clientY+"px"    

})
frames.forEach(function(frame){
    frame.addEventListener("mousemove",function(dets){
        var dims = frame.getBoundingClientRect();
        var xstart = dims.x;
        var xend = dims.x + dims.width;
    
        var zeroone =  gsap.utils.mapRange(xstart,xend,0,1,dets.clientX);
        // console.log(lerp(-50,50,zeroone));
        
        gsap.to(cursor,{
            scale:6,
            
        }) 
        gsap.to(frame.children,{
            color:"#fff",
            duration:.5
        })
        gsap.to(frame.children,{
         x:lerp(-50 ,50 ,zeroone),    
            duration:.3
        })
       
    })
    
    frame.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale:1
        }) 
        gsap.to(frame.children,{
            color:"#000",
            duration:.5            
        })
        gsap.to(frame.children,{
            x:0,    
               duration:.3
           })
          
    })
    
});


