const BotaoConcluir = () => {
  const botaoConcluir = document.createElement('button');

  botaoConcluir.classList.add('check-button')

  botaoConcluir.innerText = 'Concluir';

  botaoConcluir.addEventListener('click', concluirTarefa)

  return botaoConcluir
} 

const concluirTarefa = (evento) => {
  //Descobri um evento que foi clicado.
  const botaoConclui = evento.target
  
  //Pai do elemento
  const tarefaCompleta = botaoConclui.parentElement

  //faz a acao de rapisgar o li 
  tarefaCompleta.classList.toggle('done');
}

export default BotaoConcluir;