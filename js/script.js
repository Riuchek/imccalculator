let arrDados = []
function calcular() {
  let nome = document.getElementById("nome").value
  let altura = parseFloat(document.getElementById("altura").value)
  let peso = parseFloat(document.getElementById("peso").value)
  let imc = calculaIMC(altura, peso)
  let situacao = geraSituacao(imc)
  if (nome == "" || isNaN(altura) || isNaN(peso)) {
    return false
  }
  let pessoa = {
    nome: nome,
    altura: altura,
    peso: peso,
    imc: imc.toFixed(2),
    situacao: situacao
  }
  arrDados.push(pessoa)
  exibirCadastro()
}
function calculaIMC(altura, peso) {
  return peso / (altura ^ 2)
}
function geraSituacao(imc) {
  if (imc < 18.5) {
    return "magreza insana ಠ_ಠ"

  } else if (imc >= 18.5 && imc <= 24.99) {
    return "peso normal ༼ つ ◕_◕ ༽つ"
  }
  else if (imc >= 25 && imc <= 29.99) {
    return "tetudo sobre peso ಥ_ಥ"

  }
  else if (imc >= 30 && imc <= 34.99) {
    return "gordo obesidade I (⌐■_■)"

  }
  else if (imc >= 35 && imc <= 39.99) {
    return "gordo obesidade II (•_•)"

  }
  else if (imc >= 40) {
    return "GORDASSO OBESIDADE III (⊙_⊙))"

  }
}
let linhaTabela = ""
function exibirCadastro() {
  for (let i = 0; i < arrDados.length; i++) {
    linhaTabela +=
      `<tr>
<td>${arrDados[i].nome}</td>
<td>${arrDados[i].altura}</td>
<td>${arrDados[i].peso}</td>
<td>${arrDados[i].imc}</td>
<td>${arrDados[i].situacao}</td>
</tr>`
  }
  document.getElementById("cadastro").innerHTML = linhaTabela

}