//Modo claro e escuro

function trocar(fundo, cor, logo, separador, borda) {
    document.body.style.background = fundo
    document.body.style.color = cor
    document.getElementById('logo').src = logo
    document.getElementById('separador').src = separador

    var sections = document.querySelectorAll('.section');
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.borderColor = borda;
    }
}

//Data e hora do navegador
let hora = new Date()
document.write('<div id="centralizaData">Página atualizada em: ' + hora.toLocaleString()+'</div>').slice(0)


