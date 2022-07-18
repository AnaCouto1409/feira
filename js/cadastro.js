
//verificar botões
let buttonCompraRef = document.querySelector('#button');
let buttonPagamentoRef = document.querySelector('#button');

buttonLoginRef.addEventListener('click', event => {
    event.preventDefault()

    let credentials = {

        compra: inputCompraRef.value,
        pagamento: inputPagamentoRef.value

    }

    let requestHeaders = {
        'Content-Type': 'application/json'
    }

    let requestConfiguration = {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: requestHeaders

    }

    fetch('https://projeto-m4.herokuapp.com/', requestConfiguration).then(
        response => {
            response.json().then(

                data => {

                    localStorage.setItem('token', data.jwt)
                    window.location.href = './roupas.html'
                    
                }


            )
        }
    )
})