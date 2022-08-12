const barIcon = document.getElementById("bar-icon");
const bar = document.getElementById("bar");

barIcon.addEventListener('click',()=>{
    if(bar.className ==='bar'){
        bar.classList.remove('bar')
    }else{
        bar.classList.add('bar')
    }
})