const criarTarefa = (evento)=> {

    evento.preventDefault();

    const input = document.querySelector('[data-form-input]');
    const lista = document.querySelector('[data-list');

    const valor = input.value; 
    const tarefa = document.createElement('li');
    tarefa.classList.add('task'); //adicionar estilo do css pelo js
    const conteudo = `<p class="content"> ${valor} </p>`; //interpolação entre html com js

    tarefa.innerHTML = conteudo;
    lista.appendChild(tarefa); // elementos aparecem um embaixo do outro
    input.value = " ";
};

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);