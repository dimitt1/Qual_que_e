// Lista dos estados brasileiros 
const listaEstados = ["AC.png", "AL.png", "AM.png", "AP.png", "BA.png", "CE.png", "DF.png", "ES.png", "GO.png", "MA.png", "MG.png", "MS.png", "MT.png", "PA.png", "PB.png", "PE.png", "PI.png", "PR.png", "RJ.png", "RN.png", "RO.png", "RR.png", "RS.png", "SC.png", "SE.png", "SP.png", "TO.png"]
const estadosInfo = { // cria registro com estado e capital
    "AC" : ["Acre","Rio Branco"],
    "AL" : ["Alagoas","Maceió"],
    "AM" : ["Amazonas","Manaus"],
    "AP" : ["Amapá","Macapá"],
    "BA" : ["Bahia","Salvador"],
    "CE" : ["Ceará","Fortaleza"],
    "DF" : ["Distrito Federal","Brasília"],
    "ES" : ["Espírito Santo","Vitória"],
    "GO" : ["Goiás","Goiânia"],
    "MA" : ["Maranhão","São Luís"],
    "MG" : ["Minas Gerais","Belo Horizonte"],
    "MS" : ["Mato Grosso do Sul","Campo Grande"],
    "MT" : ["Mato Grosso","Cuiabá"],
    "PA" : ["Pará","Belém"],
    "PB" : ["Paraíba","João Pessoa"],
    "PE" : ["Pernambuco","Recife"],
    "PI" : ["Piauí","Teresina"],
    "PR" : ["Paraná","Cuiabá"],
    "RJ" : ["Rio de Janeiro","Rio de Janeiro"],
    "RN" : ["Rio Grande do Norte","Natal"],
    "RO" : ["Rondônia","Porto Velho"],
    "RR" : ["Roraima","Boa Vista"],
    "RS" : ["Rio Grande do Sul","Porto Alegre"],
    "SC" : ["Santa Catarina","Florianópolis"],
    "SE" : ["Sergipe","Aracaju"],
    "SP" : ["São Paulo","São Paulo"],
    "TO" : ["Tocantins","Palmas"]
}


// Função em que ao clicar em começar, habilite somente o primeiro campo e chame a função para que a bandeira seja mostrada
const comecar = () => {
    document.getElementById("s0").disabled = false
    document.getElementById("s1").disabled = true
    document.getElementById("s2").disabled = true
    mostrarBandeira()
    document.getElementById("botaoChute").disabled = false
}

//Função para mostrar a bandeira, ao clicar no botão próximo
const mostrarBandeira = () => {
    const imagem = document.getElementById("bandeira")
    const nomeArquivo = "/bandeiras/" + nomeEstado // Removi o '+png' pq nomeEstado já vem com .png no final
    imagem.src = nomeArquivo
    document.getElementById("h5").textContent = "Selecione a capital de " + estadosInfo[nomeEstado.slice(0,-4)][0]
}

const numAleatorio = (min,max) => {
    return min + Math.floor(Math.random()*max) 
}

// Essa constante armazena o nome do estado da rodada. 
const nomeEstado = listaEstados[numAleatorio(0, listaEstados.length)]

//Função que checa o palpite e habilita e desabilita os campos, por enquanto ainda sem o estado da rodada.
const palpite = () => {
    const  sigla = nomeEstado.slice(0,-4) 
    // Usando capitais[sigla] eu consigo acessar a capital pelo registro das capitais 
    if(document.getElementById("s0").value == estadosInfo[sigla][1]){
       document.getElementById("saida").textContent = "Correto!!"
       document.getElementById("botaoProximo").disabled = false
       //Testa com Aracaju para poder generalizar depois aos demais estados.
    }
    else if(document.getElementById("s1").value == estadosInfo[sigla][1]){
        document.getElementById("saida").textContent = "Correto!!"
        document.getElementById("botaoProximo").disabled = false
     }
     else if(document.getElementById("s2").value == estadosInfo[sigla][1]){
        document.getElementById("saida").textContent = "Correto!!"
        document.getElementById("botaoProximo").disabled = false
     }
    else if (document.getElementById("s1").disabled == false){
        document.getElementById("s1").disabled = true
        document.getElementById("s2").disabled = false
        document.getElementById("saida").textContent = "Incorreto"
    }
    else if (document.getElementById("s2").disabled == false) {
        document.getElementById("s1").disabled = true
        document.getElementById("s2").disabled = true
        document.getElementById("botaoChute").disabled = true
        document.getElementById("botaoProximo").disabled = false
        document.getElementById("saida").textContent = estadosInfo[sigla][1]
    }
    else {
        document.getElementById("s0").disabled = true
        document.getElementById("s1").disabled = false
        document.getElementById("saida").textContent = "Incorreto"
    }
}
// Função que recarrega a página ao clicar no "Próximo".
const reload = () => {
    window.location.reload(true); 
}