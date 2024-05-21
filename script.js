function showDetails(idol) {
    let details = '';

    switch (idol) {
        case 'socrates':
            details = 'Sócrates Brasileiro Sampaio de Souza Vieira de Oliveira, conhecido como Sócrates, foi um dos maiores jogadores da história do Corinthians e do futebol brasileiro. Ele foi o líder da Democracia Corinthiana nos anos 1980.';
            break;
        case 'rivelino':
            details = 'Roberto Rivellino, conhecido como Rivelino, foi um dos maiores craques do futebol brasileiro. Seu chute potente e dribles desconcertantes o tornaram um ídolo eterno do Corinthians.';
            break;
        case 'marcelinho':
            details = 'Marcelo Pereira Surcin, conhecido como Marcelinho Carioca, é um dos maiores ídolos da história recente do Corinthians. Famoso por suas cobranças de falta precisas, foi apelidado de "Pé de Anjo".';
            break;
        default:
            details = 'Informações do ídolo não disponíveis.';
    }

    alert(details);
}
