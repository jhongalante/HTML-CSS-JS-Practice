document.getElementById('footerbtn').addEventListener('mouseover', function () {
    document.getElementById('minimodal').style.display = 'flex';
    document.getElementById('minimodal').style.transform = ''
    document.getElementById('btnFooter').style.display = 'none';
});

document.getElementById('footerbtn').addEventListener('mouseout', function () {
    document.getElementById('minimodal').style.display = 'none';
    document.getElementById('btnFooter').style.display = 'block';
});


var btnUpload = document.getElementById('btnUpload');
var btnGaleria = document.getElementById('btnGaleria');
var btnFotosComVoce = document.getElementById('btnFotosComVoce');

btnUpload.addEventListener('click', function () {
    document.getElementById('tabBody1').style.display = 'flex';
    document.getElementById('tabBody2').style.display = 'none';
    document.getElementById('tabBody3').style.display = 'none';
    document.getElementById('tabBody2-1').style.display = 'none';
    this.style.fontWeight = "bold";
    this.style.borderBottom = "2px solid blue";
    this.style.outline = 'none';
    btnGaleria.style.fontWeight = '100';
    btnGaleria.style.borderBottom = 'none';
    btnFotosComVoce.style.fontWeight = '100';
    btnFotosComVoce.style.borderBottom = 'none';
});

btnGaleria.addEventListener('click', function () {
    document.getElementById('tabBody2').style.display = 'flex';
    document.getElementById('tabBody1').style.display = 'none';
    document.getElementById('tabBody3').style.display = 'none';
    document.getElementById('tabBody2-1').style.display = 'none';
    this.style.fontWeight = "bold";
    this.style.borderBottom = "2px solid blue";
    this.style.outline = 'none';
    btnUpload.style.fontWeight = '100';
    btnUpload.style.borderBottom = 'none';
    btnFotosComVoce.style.fontWeight = '100';
    btnFotosComVoce.style.borderBottom = 'none';
});

btnFotosComVoce.addEventListener('click', function () {
    document.getElementById('tabBody3').style.display = 'flex';
    document.getElementById('tabBody1').style.display = 'none';
    document.getElementById('tabBody2').style.display = 'none';
    document.getElementById('tabBody2-1').style.display = 'none';
    this.style.fontWeight = "bold";
    this.style.borderBottom = "2px solid blue";
    this.style.outline = 'none';
    btnGaleria.style.fontWeight = '100';
    btnGaleria.style.borderBottom = 'none';
    btnUpload.style.fontWeight = '100';
    btnUpload.style.borderBottom = 'none';
});

var pastaFoto1 = document.getElementById('pastaFoto1');

pastaFoto1.addEventListener('click', function () {
    document.getElementById('tabBody2').style.display = 'none';
    document.getElementById('tabBody2-1').style.display = 'flex';
});

var voltar = document.getElementById('navegacaoVoltar');

voltar.addEventListener('click', function () {
    document.getElementById('tabBody2').style.display = 'flex';
    document.getElementById('tabBody2-1').style.display = 'none';
});

document.getElementById('btnFecharModal').addEventListener('click', function () {
    document.getElementById('modalSelectPhoto').style.display = 'none';
});

document.getElementById('btnGravarVoz').addEventListener('click', function () {
    document.getElementById('paginaDeVoz').style.display = 'flex';
});

document.getElementById('btnFecharPaginaVoz').addEventListener('click', function () {
    document.getElementById('paginaDeVoz').style.display = 'none';
});

var addAtalho = document.getElementById('addAtalho');
addAtalho.addEventListener('click', function () {
    document.getElementById('modalAddAtalho').style.display = 'block';
});

function fecharModal() {
    document.getElementById('modalAddAtalho').style.display = 'none';
}
function checkCampoUrl(url) {
    var btnConcluido = document.getElementById('btnConcluido');
    if (url !== '') {
        btnConcluido.style.backgroundColor = 'blue';
        btnConcluido.style.color = '#fff';
    } else {
        btnConcluido.style.backgroundColor = 'rgba(0,0,0,0.05)';
        btnConcluido.style.color = 'rgba(0,0,0,0.5)';
    }
}

var btnPersonalizar = document.getElementById('btnPersonalizar');
btnPersonalizar.addEventListener('click', function () {
    document.getElementById('modalPersonalizarPagina').style.display = "block";
})

document.addEventListener('click', function (e) {
    var modal = document.getElementById('modalBtnMenu');
    var modal2 = document.getElementById('modalNotificacoes');
    var modal3 = document.getElementById('modalUsuario');
    var modal4 = document.getElementById('modalPersonalizarPagina');

    if (e.target.id == 'btnMenu' || e.target.id == 'listaMenuApps') {
        modal.style.display = 'block';
    } else {
        modal.style.display = 'none';
    }

    if (e.target.id == 'btnSino' || e.target.id == 'imgSino' ||
        e.target.className == 'cabecalho' || e.target.className == 'corpo' ||
        e.target.className == 'footerbtn' || e.target.id == 'minimodal') {
        modal2.style.display = 'block';
    } else {
        modal2.style.display = 'none';
    }

    if (e.target.id == 'btnPerfil' || e.target.id == 'corpoModal' ||
        e.target.id == 'userData' || e.target.id == 'footerModal') {
        modal3.style.display = 'block';
    } else {
        modal3.style.display = 'none';
    }

    if (e.target.id == "btnPersonalizar" || e.target.id == "restaurarPadrao" || e.target.id == "iconePersonalizar") {
        modal4.style.display = 'block';
    } else {
        modal4.style.display = 'none';
    }
});

document.getElementById('btnAlterarFoto').addEventListener('click', function () {
    document.getElementById('modalSelectPhoto').style.display = 'block';
});

document.getElementById('btnDeslogar').addEventListener('click', function () {
    document.getElementById('btnPerfil').style.display = 'none';
});