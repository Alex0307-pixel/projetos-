const card = document.getElementById("card");

document.addEventListener("mousemove", (e)=>{

    let x = (window.innerWidth/2 - e.pageX)/25;
    let y = (window.innerHeight/2 - e.pageY)/25;

    card.style.transform =
    `rotateY(${x}deg) rotateX(${-y}deg)`;
});

function copiarEmail(){

    navigator.clipboard.writeText(
        "alex@email.com"
    );

    alert("E-mail copiado!");
}

function atualizarHora(){

    const agora = new Date();

    document.getElementById("hora").innerHTML =
    agora.toLocaleTimeString("pt-BR");
}

setInterval(atualizarHora,1000);

atualizarHora();