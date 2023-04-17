/* variáveis para a função verifySelect do radio */
let inputPack = document.getElementById('inputPack')
let qntPackContainer = document.getElementById('qntPackContainer')
let productPack = false

/* Variável marca o elemento que recebe todos os registros para mostrar ao usuário */
let dados = document.getElementById('dados')

/* Configura o purchaseId que é a chave de cada registro na localStorage */
let purchaseId = localStorage.length
/* Insere visualmente todos os dados do localStorage para a div que mostra todos os registros na tela */
if (localStorage.length > 0) {
    for (index = 1; index <= localStorage.length; index++) {
        const dataLineConvert = localStorage.getItem(index)
        const dataLineObject = JSON.parse(dataLineConvert)
        
        let novaLinha = document.createElement('tr')
        novaLinha.innerHTML = `
        <td>${dataLineObject.inicioData}
        <td>${dataLineObject.fimData}
        <td>${dataLineObject.mercado}
        <td>${dataLineObject.unidadeMedida}
        <td>${dataLineObject.nomeProduto}
        <td>${dataLineObject.qntDentroPack}
        <td>${dataLineObject.pesoProduto}
        <td>${dataLineObject.price}
        `
        dados.appendChild(novaLinha)
    }
}


/* Variáveis para receber os inputs do folheto para cadastramento */
let dateStart = document.getElementById('dateStart')
let dateEnd = document.getElementById('dateEnd')
let nameMarket = document.getElementById('selectMarket')
let nameUnit = document.getElementById('selectUnit')
let productName = document.getElementById('inputProductName')
let qntPack = document.getElementById('inputQntPack')
let productWeight = document.getElementById('inputProductWeight')
let inputPrice = document.getElementById('inputPrice')

let todayDate = new Date()


/* Insere os dados no localStorage e mostra na div correspodente*/
function submit() {
    purchaseId = purchaseId + 1

    let dataLine = {
        inicioData: dateStart.value,
        fimData: dateEnd.value,
        mercado: nameMarket.value,
        unidadeMedida: nameUnit.value,
        nomeProduto: productName.value,
        qntDentroPack: qntPack.value,
        pesoProduto: productWeight.value,
        price: inputPrice.value
    }
    
    localStorage.setItem(purchaseId, JSON.stringify(dataLine))
    const dataLineConvert = localStorage.getItem(purchaseId)
    const dataLineObject = JSON.parse(dataLineConvert)


    let novaLinha = document.createElement('tr')
    novaLinha.innerHTML = `
    <td>${dataLineObject.inicioData}
    <td>${dataLineObject.fimData}
    <td>${dataLineObject.mercado}
    <td>${dataLineObject.unidadeMedida}
    <td>${dataLineObject.nomeProduto}
    <td>${dataLineObject.qntDentroPack}
    <td>${dataLineObject.pesoProduto}
    <td>${dataLineObject.price}
    `
    dados.appendChild(novaLinha)    
}

function consult() {
    console.log(todayDate)
}

function fClear() {
    if (confirm('Deseja realmente apagar todos os dados?')== true) {
        localStorage.clear()
        dados.innerHTML = ''

        purchaseId = Number()

        alert('Todos os registos foram apagados')
    }
}

/* Verifica se o formulario foi modificado e aplica algumas mudanças conforme comentado dentro do código */
function formChange() {
    /* Habilita o input número de undiades dentro do Pack */
    if (inputPack.checked ) {
        qntPackContainer.classList.remove('hide')
        productPack = true
    }
    else {
        qntPackContainer.classList.add('hide')
        productPack = false
    }


}


