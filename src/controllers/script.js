var initialValue = 60.00;

const diaporPg = document.getElementById("sddp");
const wireO = document.getElementById("wireo");
const laminacao = document.getElementById("laminacao");
const cantoneira = document.getElementById("cantoneira");

var valorProduto = document.getElementById("value-product");

var linkProduto = document.getElementById("comprar");

var dpp = 2;
var wire = "branco";
var lamin = "brilho";
var canto = "sem cantoneira"

function comprarProduto(){
    linkProduto.href = "https://wa.me//5583986040644?text=Olá!%20Gostaria%20de%20comprar%20um%20Planner%20personalizado%20com%20"+ddp+"%20dias%20por%20página,%20wire-o%20"+wire+",%20laminação%20"+lamin+"%20e%20"+canto+".";
}

function mudaValor(){

    if (diaporPg.selectedIndex == 0) {
        initialValue = 70
        valorProduto.textContent = "R$: " + initialValue + ",00"
        ddp = 1;
    }else if (diaporPg.selectedIndex == 1) {
        initialValue = 60
        valorProduto.textContent = "R$: " + initialValue + ",00"
        ddp = 2;
    }

    if (wireO.selectedIndex == 0){
        valorProduto.textContent = "R$: " + initialValue + ",00"
        wire = "branco"
    }else if(wireO.selectedIndex == 1){
        initialValue = initialValue + 5
        valorProduto.textContent = "R$: " + initialValue + ",00"
        wire = "dourado";
    }else if(wireO.selectedIndex == 2){
        initialValue = initialValue + 5
        valorProduto.textContent = "R$: " + initialValue + ",00"
        wire = "cobre";
    }else if(wireO.selectedIndex == 3){
        initialValue = initialValue + 5
        valorProduto.textContent = "R$: " + initialValue + ",00"
        wire = "rosê"
    }

    if (laminacao.selectedIndex == 0){
        valorProduto.textContent = "R$: " + initialValue + ",00"
        lamin = "brilho"
    }else if(laminacao.selectedIndex == 0){
        valorProduto.textContent = "R$: " + initialValue + ",00"
        lamin = "fosco";
    }else{
        initialValue = initialValue + 5
        valorProduto.textContent = "R$: " + initialValue + ",00"
        lamin = "holográfico"
    }

    if (cantoneira.selectedIndex == 1) {
        valorProduto.textContent = "R$: " + initialValue + ",00"
        canto = "com%20cantoneira"
    } else if(cantoneira.selectedIndex == 0) {
        initialValue = initialValue + 5
        valorProduto.textContent = "R$: " + initialValue + ",00"
        canto = "sem%20cantoneira"
    }
    comprarProduto()
}