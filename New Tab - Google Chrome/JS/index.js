document.getElementById('footerbtn').addEventListener('mouseover', function () {
    document.getElementById('minimodal').style.display = 'flex';
    document.getElementById('minimodal').style.transform = ''
    document.getElementById('btn-footer').style.display = 'none';
});

document.getElementById('footerbtn').addEventListener('mouseout', function () {
    document.getElementById('minimodal').style.display = 'none';
    document.getElementById('btn-footer').style.display = 'block';
});


var btnUpload = document.getElementById('btn-upload');
var btnGaleria = document.getElementById('btn-galeria');
var btnFotosComVoce = document.getElementById('btn-fotos-com-voce');

btnUpload.addEventListener('click', function () {
    document.getElementById('tab-body1').style.display = 'flex';
    document.getElementById('tab-body2').style.display = 'none';
    document.getElementById('tab-body3').style.display = 'none';
    document.getElementById('tab-body2-1').style.display = 'none';
    this.style.fontWeight = "bold";
    this.style.borderBottom = "2px solid blue";
    this.style.outline = 'none';
    btnGaleria.style.fontWeight = '100';
    btnGaleria.style.borderBottom = 'none';
    btnFotosComVoce.style.fontWeight = '100';
    btnFotosComVoce.style.borderBottom = 'none';
});

btnGaleria.addEventListener('click', function () {
    document.getElementById('tab-body2').style.display = 'flex';
    document.getElementById('tab-body1').style.display = 'none';
    document.getElementById('tab-body3').style.display = 'none';
    document.getElementById('tab-body2-1').style.display = 'none';
    this.style.fontWeight = "bold";
    this.style.borderBottom = "2px solid blue";
    this.style.outline = 'none';
    btnUpload.style.fontWeight = '100';
    btnUpload.style.borderBottom = 'none';
    btnFotosComVoce.style.fontWeight = '100';
    btnFotosComVoce.style.borderBottom = 'none';
});

btnFotosComVoce.addEventListener('click', function () {
    document.getElementById('tab-body3').style.display = 'flex';
    document.getElementById('tab-body1').style.display = 'none';
    document.getElementById('tab-body2').style.display = 'none';
    document.getElementById('tab-body2-1').style.display = 'none';
    this.style.fontWeight = "bold";
    this.style.borderBottom = "2px solid blue";
    this.style.outline = 'none';
    btnGaleria.style.fontWeight = '100';
    btnGaleria.style.borderBottom = 'none';
    btnUpload.style.fontWeight = '100';
    btnUpload.style.borderBottom = 'none';
});

var pastaFoto1 = document.getElementById('pasta-foto1');

pastaFoto1.addEventListener('click', function () {
    document.getElementById('tab-body2').style.display = 'none';
    document.getElementById('tab-body2-1').style.display = 'flex';
});

var voltar = document.getElementById('navegacao-voltar');

voltar.addEventListener('click', function () {
    document.getElementById('tab-body2').style.display = 'flex';
    document.getElementById('tab-body2-1').style.display= 'none';
});

document.getElementById('btn-fechar-modal').addEventListener('click', function () {
    document.getElementById('modal-select-photo').style.display = 'none';
});

document.getElementById('btn-gravar-voz').addEventListener('click', function () {
    document.getElementById('pagina-de-voz').style.display = 'flex';
});

document.getElementById('btn-fechar-pagina-voz').addEventListener('click', function () {
    document.getElementById('pagina-de-voz').style.display = 'none';
});

var addAtalho = document.getElementById('add-atalho');
addAtalho.addEventListener('click', function () {
    document.getElementById('modal-add-atalho').style.display = 'block';
});

function fecharModal() {
    document.getElementById('modal-add-atalho').style.display = 'none';
}
function checkCampoUrl(url) {
    var btnConcluido = document.getElementById('btn-concluido');
    if (url !== '') {
        btnConcluido.style.backgroundColor = 'blue';
        btnConcluido.style.color = '#fff';
    } else {
        btnConcluido.style.backgroundColor = 'rgba(0,0,0,0.05)';
        btnConcluido.style.color = 'rgba(0,0,0,0.5)';
    }
}

var btnPersonalizar = document.getElementById('btn-personalizar');
btnPersonalizar.addEventListener('click', function () {
    document.getElementById('modal-personalizar-pagina').style.display = "block";
})

document.addEventListener('click', function (e) {
    var modal = document.getElementById('modal-btn-menu');
    var modal2 = document.getElementById('modal-notificacoes');
    var modal3 = document.getElementById('modal-usuario');
    var modal4 = document.getElementById('modal-personalizar-pagina');

    if (e.target.id == 'btn-menu' || e.target.id == 'lista-menu-apps') {
        modal.style.display = 'block';
    } else {
        modal.style.display = 'none';
    }

    if (e.target.id == 'btn-sino' || e.target.id == 'img-sino' ||
        e.target.className == 'cabecalho' || e.target.className == 'corpo' ||
        e.target.className == 'footerbtn' || e.target.id == 'minimodal') {
        modal2.style.display = 'block';
    } else {
        modal2.style.display = 'none';
    }

    if (e.target.id == 'btn-perfil' || e.target.id == 'corpo-modal' ||
        e.target.id == 'user-data' || e.target.id == 'footer-modal') {
        modal3.style.display = 'block';
    } else {
        modal3.style.display = 'none';
    }

    if (e.target.id == "btn-personalizar" || e.target.id == "restaurar-padrao" || e.target.id == "icone-personalizar") {
        modal4.style.display = 'block';
    } else {
        modal4.style.display = 'none';
    }
});

document.getElementById('btn-alterar-foto').addEventListener('click', function () {
    document.getElementById('modal-select-photo').style.display = 'block';
});

document.getElementById('btn-deslogar').addEventListener('click', function () {
    document.getElementById('btn-perfil').style.display = 'none';
});