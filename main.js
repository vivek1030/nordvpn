// Toggle menu 
document.querySelector('.btn-dropdown').onclick = (e)=>{
    e.preventDefault();
    document.querySelector('.dropdown-drawer').classList.toggle('active');
}


//navigation fixed scroll script
window.onscroll = ()=>{
    let val = window.pageYOffset;
    console.log(val);
    if(val > 80){
        document.querySelector('.headermain').classList.remove('static');
        document.querySelector('.headermain').classList.add('fixed');
    }
    else{
        document.querySelector('.headermain').classList.add('static');
        document.querySelector('.headermain').classList.remove('fixed');
    }
}