function mostrarServico(numero) {
    const servicos = document.querySelectorAll('.services');
    
    // Esconde todos os serviços
    servicos.forEach(servico => {
      servico.style.display = 'none';
    });
    
    // Mostra apenas o serviço correspondente
    const servicoSelecionado = document.querySelector(`.servicos${numero}`);
    if (servicoSelecionado) {
      servicoSelecionado.style.display = 'grid';
    }
  }