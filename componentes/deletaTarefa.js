const BotaoDeleta = ()=> {
    const botaoDeletado = document.createElement('button');

    botaoDeletado.classList.add('check-button');
    botaoDeletado.innerText = 'Deletar'
    botaoDeletado.addEventListener('click', deletarTarefa);

    return botaoDeletado;
}

const deletarTarefa = (evento)=>{
    const botaoDeleta = evento.target;
    const tarefaDeletada = botaoDeleta.parentElement;

    tarefaDeletada.remove(); // vai excluir elemento

    return botaoDeleta;
}

export default BotaoDeleta