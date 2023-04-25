
// Função para consultar dados via api e preencher os campos automaticamente.
async function buscaEndereco(cep) {
    var mensagemErro = document.querySelector("#erro")
    mensagemErro.innerHTML = "";
    
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertida = await consultaCep.json();

        if (consultaCepConvertida.erro) {
            mensagemErro.innerHTML = "<p>CEP não encontrado!</p>"
        }

        var logradouro = document.querySelector("#endereco");
        var bairro = document.querySelector("#bairro");
        var cidade = document.querySelector("#cidade");
        var estado = document.querySelector("#estado");

        logradouro.value = consultaCepConvertida.logradouro;
        bairro.value = consultaCepConvertida.bairro;
        cidade.value = consultaCepConvertida.localidade;
        estado.value = consultaCepConvertida.uf;

        console.log(consultaCepConvertida);
    } catch (erro) {
        mensagemErro.innerHTML = "<p>CEP inválido. Tente novamente!</p>"
        console.log(erro);
    }
}

var cep = document.querySelector("#cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
