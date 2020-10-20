const BotaoDeleta = () => {
  const botaoDeleta = document.createElement('button');

  botaoDeleta.innerText = 'Deleta';

  botaoDeleta.addEventListener('click', deletarTarefa)
  return botaoDeleta
}

const deletarTarefa = (evento) => {
  const botaoDeletar = evento.target

  const tarefaCompleta = botaoDeletar.parentElement

  tarefaCompleta.remove()
  return botaoDeletar
}

export default BotaoDeleta