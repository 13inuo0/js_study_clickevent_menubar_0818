window.addEventListener("load",function(){
    const taps = this.document.querySelectorAll(".tap-btn")
    const content = this.document.querySelectorAll(".tap-content")
    taps.forEach((tap,index)=>{
        // console.log(tap);
        // console.log(index);
        tap.addEventListener("click",function(){
            // content[index]
            taps.forEach((t)=>{
                console.log(t);
                t.classList.remove("active")
                
            })
            content.forEach((j)=>{
                console.log(j);
                j.classList.remove("active")
                
            })
            // console.log(index);
            // console.log(content[index]);
            tap.classList.add("active")
            content[index].classList.add("active")
        })
    })
})