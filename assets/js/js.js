function switchTheme() {
    document.body.classList.toggle('cs-go');
    document.body.classList.toggle('cs');

    document.body.setAttribute('aria-label', 'Trocando o tema');

    const theme = document.body.classList[0];

    document.getElementById("invert-text").innerHTML = "O jogo Counter-Strike nasceu de um simples mod, sem a pretensão de se tornar um grande sucesso, mas ao permitir que equipes de jogadores (ou clãs) entrassem em disputa, conseguiu alcançar um destaque que nem seus produtores poderiam prever.";

    document.getElementById("caminho-de-rato").src="./assets/img/cs/D4-4.png";
    document.getElementById("caixa-gorda").src="./assets/img/cs/D5-5.png";
    document.getElementById("base-ct").src="./assets/img/cs/D2-2.png";
    document.getElementById("base-t").src="./assets/img/cs/D3-3.png";
    document.getElementById("bomb-b").src="./assets/img/cs/D2-1.png";

    document.getElementById("areia-inferno").src="./assets/img/cs/Inferno-2.png";
    document.getElementById("base-ct-inferno").src="./assets/img/cs/Inferno-3.png";
    document.getElementById("ponte-t-inferno").src="./assets/img/cs/Inferno-1.png";
    document.getElementById("bomb-b-inferno").src="./assets/img/cs/Inferno-4.png";
    document.getElementById("base-t-inferno").src="./assets/img/cs/Inferno-5.png";
  }