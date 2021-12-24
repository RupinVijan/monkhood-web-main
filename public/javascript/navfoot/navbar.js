// window.addEventListener("scroll",()=>{
//     document.querySelector("nav").style.backgroundColor="#FCCD1F"
// })

$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('nav').addClass('blackkk');
    }
    else{
        $('nav').removeClass('blackkk');
    }
})
