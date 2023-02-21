import BotaoConclui from "./componentes/concluiTarefa.js";
import BotaoDeleta from "./componentes/deletaTarefa.js";

    const criarTarefa = (evento)=> {

        evento.preventDefault();
    
        const input = document.querySelector('[data-form-input]');
        const lista = document.querySelector('[data-list');
    
        const valor = input.value; //valor do input
        const tarefa = document.createElement('li'); //criar elemento (tag)
        tarefa.classList.add('task'); //adicionar estilo do css pelo js
        const conteudo = `<p class="content"> ${valor} </p>`; //interpolação entre html com js
    
        tarefa.innerHTML = conteudo; 
        tarefa.appendChild(BotaoConclui()); //efeito de nó entre tag pai e filho
        tarefa.appendChild(BotaoDeleta());
        lista.appendChild(tarefa); // elementos aparecem um embaixo do outro
        input.value = " "; // inicia vazio
    };
    
    const novaTarefa = document.querySelector('[data-form-button]');
    
    novaTarefa.addEventListener('click', criarTarefa);
