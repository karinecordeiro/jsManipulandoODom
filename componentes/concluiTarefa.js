const BotaoConclui = ()=> { //criando um componente
    const botaoConcluido = document.createElement('button');

    botaoConcluido.classList.add('check-button');
    botaoConcluido.innerText = 'Concluir' //adicionar texto
    botaoConcluido.addEventListener('click', concluiTarefa);
    
    return botaoConcluido;
}

const concluiTarefa = (evento)=>{
    const botaoConclui = evento.target; // alvo do evento (saber o que foi clicado)
    const tarefaCompleta = botaoConclui.parentElement;

    tarefaCompleta.classList.toggle('done');// toggle devolve um booleano
}

export default BotaoConclui