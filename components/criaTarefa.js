// A ideia do immediately invoked function expression é
// pra ter um bloco de código que tem um escopo próprio, onde
// as variáveis nao escapam pra fora e é executada uma única vez

import { carregaTarefa } from './carregaTarefa.js';
import BotaoConclui from './concluiTarefa.js';
import BotaoDeleta from './deletaTarefa.js';

export const handleNovoItem = (event) => {
  event.preventDefault();
  const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
  const input = document.querySelector('[data-form-input]');
  const valorInput = input.value;

  const calendario = document.querySelector('[data-form-date]');
  const data = moment(calendario.value);
  const dataFormatada = data.format('DD/MM/YYYY');

  const dados = {
    valorInput,
    dataFormatada,
  };

  const tarefasAtualizadas = [...tarefas, dados];

  // localStorage guarda informações somente no formato de strings
  localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas));

  input.value = ''; // Zerando o valor do input

  carregaTarefa();
};

export const Tarefa = ({ valorInput, dataFormatada }) => {
  const tarefa = document.createElement('li');
  tarefa.classList.add('task'); // Adicionando classe
  const conteudo = `<p class="content">${dataFormatada} * ${valorInput}</p>`;

  tarefa.innerHTML = conteudo; // Incluindo conteúdo dentro da tarefa
  tarefa.appendChild(BotaoConclui());
  tarefa.appendChild(BotaoDeleta());

  return tarefa;
};
