const price = document.getElementById('price'); 
const planleft = document.getElementById('planleft');
const planmiddle = document.getElementById('planmiddle');
const planright = document.getElementById('planright');
const tog = document.getElementById('button-tog');

  
flag = true

butt.addEventListener('click', ()=>{
  toggle()
})

const toggle = ()=>{
  tog.className = flag ? "block w-4 h-4 bg-white rounded-full shadow-md transform duration-200 ease-in-out absolute left-1 top-1" : "block w-4 h-4 bg-white rounded-full shadow-md transform duration-200 ease-in-out absolute right-1 top-1"

  planleft.innerHTML = flag ? "199.99" : "19.99"
  planmiddle.innerHTML = flag ? "249.99" : "24.99"
  planright.innerHTML = flag ? "399.99" : "39.99"


  flag = !flag
}

