import { handleNovoItem, Tarefa } from './components/criaTarefa.js';
import { carregaTarefa } from './components/carregaTarefa.js';

// Selecionando botao Novo Item
const novaTarefa = document.querySelector('[data-form-button]');

// Atribuindo evento de click para o botão, criando a tarefa
novaTarefa.addEventListener('click', handleNovoItem);

carregaTarefa();
