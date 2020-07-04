class NegociacaoService {

    obterNegociacoesDaSemana(callBack) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/semana');

        /* Configurações */

        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {

                    callBack(null, JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                } else {
                    console.log(xhr.responseText);
                    callBack('Não foi possível obter as negociações', null);
                }
            }
        };

        /* Executa */
        xhr.send();
    }
}

/* toda requisição AJAX passa por estados - um deles
        nos dará os dados retornados do servidor */
/**
 *     0: requisição ainda não iniciada

    1: conexão com o servidor estabelecida

    2: requisição recebida

    3: processando requisição

    4: requisição está concluída e a resposta está pronta

 */