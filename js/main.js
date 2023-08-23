/*
* Criada a constante 'robotron' que receberá 
* o objeto da pesquisa via 'querySelector'
*/
const robotron = document.querySelector("#robotron")

/*
* Monitorador de eventos de clique com a chamada para
* a função 'enviarMensagem' atribuído ao objeto 'robotron'
*/
robotron.addEventListener("click", enviarMensagem);

/*
* Função que envia uma mensagem utilizando 'console.log'
*/
function enviarMensagem(){
    console.log("Mensagem!");
}
