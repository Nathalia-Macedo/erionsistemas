const btnMobile = document.getElementById ('btn-mobile');

function toggleMenu (event){
    if (event.type === 'touchstart') event.preventDefault();

    const nav = document.getElementById('nav');
    nav.classList.toggle('active');    
    const active = nav.classList.contains('active');   

    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'fechar menu');
    } else{
        event.currentTarget.setAttribute('aria-label', 'abrir menu');        
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function showIt2() {document.getElementById("msg1").style.visibility = "visible";}    setTimeout("showIt2()", 5000); 
function hiddenIt() {document.getElementById("msg1").style.visibility = "hidden";}setTimeout("hiddenIt()", 15000); 
function showIt3() {document.getElementById("msg1").style.visibility = "visible";} setTimeout("showIt3()", 25000);  
msg1.onclick = function() {document.getElementById('msg1').style.visibility = "hidden"; };


const cartoes = document.querySelector("#card");
const botao = document.querySelector("#botaoSistema");
const emissor = document.querySelector("#card");
const pdv = document.querySelector("#card-pdv");
var btn_color_emissor = document.querySelector("#btn-emissor");
var btn_color_pdv = document.querySelector("#btn-pdv");

function verMais(){
    if(cartoes.className == "open"+" card"){
        cartoes.className = "card";
        botao.innerHTML = "Ver Mais";
    } else {
        cartoes.className = "open"+" card";
        botao.innerHTML = "Ver Menos";        
    }    
}

function sistema(){
    if(pdv.className == "card-pdv-visible"+" card-pdv"){
        pdv.className = "card-pdv";        
    }else {
        pdv.className = "card-pdv-visible"+" card-pdv";
    }
    
    if(pdv.className == "card-pdv-visible"+" card-pdv"){
        emissor.className = "card-emissor-hidden";
        btn_color_pdv.style.backgroundColor = "var(--cor-06)";        
        btn_color_emissor.style.backgroundColor = "var(--cor-03)";

        botao.className = "btn-hidden";
        
    }else{
        emissor.className = "card";
        btn_color_pdv.style.backgroundColor = "var(--cor-03)";
        btn_color_emissor.style.backgroundColor = "var(--cor-06)";

        botao.className = "botao";
    }
}