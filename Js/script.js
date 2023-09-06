let menuBtn = document.querySelector('.menu-bar')
let hideBtn = document.querySelector('.hide-btn')

menuBtn.addEventListener('click' , ()=>{
    let sidebar = document.querySelector('.sidebar');
    sidebar.style.width = "150px";

});

hideBtn.addEventListener('click', ()=>{
    let sidebar = document.querySelector('.sidebar');
    sidebar.style.width = '0';
});
