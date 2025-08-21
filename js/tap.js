window.addEventListener("load",function(){
    const taps = this.document.querySelectorAll(".tap-btn")
    const content = this.document.querySelectorAll(".tap-content")
    taps.forEach((tap,index)=>{
        // console.log(tap);
        // console.log(index);
        tap.addEventListener("click",function(){
            // content[index]
            console.log(index);
            
            console.log(content[index]);
            
        })
        
        
    })
})