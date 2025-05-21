const cepInput = document.querySelector("#cep")

cepInput.addEventListener("blur", () => {

    /*
    Sobre a regex /\D/g
    /.../ - Delimita a expressão regular
    
    D - É o inverso de /d, ou seja , "qualquer caractere que não seja digito" (0 a 9)
    
    g - É a flag global, que faz a substituição ocorrer em todas as acorrências do texto
    
    Exemplo:
     se o usuario digita 88.000-000, A função fará '88.000-000'.replace(/\D/g,' ') // 
     Resultado: '88000000'
    
    */


    const cep = cepInput.value.replace(/\D/g, ' ')
    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    document.querySelector("#logradouro").value = data.logradouro
                    document.querySelector("#complemento").value = data.complemento
                    document.querySelector("#bairro").value = data.bairro
                    document.querySelector("#cidade").value = data.localidade
                    document.querySelector("#estado").value = data.uf
                } else {
                    console.log("Cep não encontrado")
                }
            })
            .catch(error => {
                alert("Erro ao buscar o CEP")
                console.error(error)
            })
    } else {
        alert("CEP inválido")
    }
})