function switchTheme() {
    document.body.classList.toggle('cs-go');
    document.body.classList.toggle('cs');

    document.body.setAttribute('aria-label', 'Trocando o tema');

    const theme = document.body.classList[0];

    document.getElementById("invert-text").innerHTML = "O jogo Counter-Strike nasceu de um simples mod, sem a pretensão de se tornar um grande sucesso, mas ao permitir que equipes de jogadores (ou clãs) entrassem em disputa, conseguiu alcançar um destaque que nem seus produtores poderiam prever.";
  }