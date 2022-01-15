const BotaoConclui = () => {
  const botaoConclui = document.createElement('button');
  botaoConclui.classList.add('check-button');
  botaoConclui.innerText = 'concluir';

  botaoConclui.addEventListener('click', concluirTarefa);

  return botaoConclui;
};

const concluirTarefa = (event) => {
  const botaoConclui = event.target;

  // Pega o pai do botão, ou seja a tag <li>
  const tarefaCompleta = botaoConclui.parentElement;

  tarefaCompleta.classList.toggle('done');
};

export default BotaoConclui;
