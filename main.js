// A ideia do immediately invoked function expression é
// pra ter um bloco de código que tem um escopo próprio, onde
// as variáveis nao escapam pra fora e é executada uma única vez

import BotaoConclui from './components/concluiTarefa.js';
import BotaoDeleta from './components/deletaTarefa.js';

const criarTarefa = (event) => {
  event.preventDefault();
  const lista = document.querySelector('[data-list]');
  const input = document.querySelector('[data-form-input]');
  const valorInput = input.value;
  console.log(valorInput);
  input.value = ''; // Zerando o valor do input

  const tarefa = document.createElement('li');
  tarefa.classList.add('task'); // Adicionando classe
  const conteudo = `<p class="content">${valorInput}</p>`;

  tarefa.innerHTML = conteudo; // Incluindo conteúdo dentro da tarefa
  tarefa.appendChild(BotaoConclui());
  tarefa.appendChild(BotaoDeleta());
  lista.appendChild(tarefa); // Adicionando novo filho
};

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);
