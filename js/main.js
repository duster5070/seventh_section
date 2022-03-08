var x = document.querySelectorAll(".drop_btn");
var y = document.querySelectorAll(".dropdown_content");
var z = document.querySelectorAll(".fa-angle-down")

x[0].addEventListener('click', ()=>
{
    y[0].classList.toggle("dropdown_content1");
    z[0].classList.toggle("first_i");
})

x[1].addEventListener('click', ()=>
{
    y[1].classList.toggle("dropdown_content2");
    z[1].classList.toggle("first_i");
})

x[2].addEventListener('click', ()=>
{
    y[2].classList.toggle("dropdown_content3");
    z[2].classList.toggle("first_i");
})