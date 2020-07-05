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

    obterNegociacoesDaSemanaAnterior(callBack) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/anterior');

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

    obterNegociacoesDaSemanaRetrasada(callBack) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/retrasada');

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