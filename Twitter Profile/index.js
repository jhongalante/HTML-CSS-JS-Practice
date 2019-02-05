document.getElementById('btn-mais').addEventListener('click', function(){
    if(document.getElementById('modal-mais').style.display == "none"){
        document.getElementById('modal-mais').style.display = "flex";
    }else{
        document.getElementById('modal-mais').style.display = "none";
    }
    
});