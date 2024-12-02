document.getElementById('submitButton').addEventListener('click', () => {
    const form = document.getElementById('temperamentTest');
    const rows = form.querySelectorAll('.row');
  
    // Inicializa as pontuações
    const scores = { 
      Sanguíneo: 0, 
      Colérico: 0, 
      Melancólico: 0, 
      Fleumático: 0 
    };
  
    // Calcula as pontuações baseadas nas seleções
    rows.forEach((row, index) => {
      const selected = form.querySelector(`input[name="row${index + 1}"]:checked`);
      if (selected) {
        const value = parseInt(selected.value);
        if (value === 1) scores['Sanguíneo']++;
        else if (value === 2) scores['Colérico']++;
        else if (value === 3) scores['Melancólico']++;
        else if (value === 4) scores['Fleumático']++;
      }
    });
  
    // Ordena os temperamentos por pontuação (decrescente)
    const sortedScores = Object.entries(scores)
      .sort((a, b) => b[1] - a[1]) // Ordena pela pontuação
      .map(([temperament, score]) => `${temperament}: ${score} ponto(s)`);
  
    // Exibe o resultado
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('temperamentResult').innerHTML = `
      <strong>Classificação dos Temperamentos:</strong><br>
      1º: ${sortedScores[0]}<br>
      2º: ${sortedScores[1]}<br>
      3º: ${sortedScores[2]}<br>
      4º: ${sortedScores[3]}
    `;
  });
  