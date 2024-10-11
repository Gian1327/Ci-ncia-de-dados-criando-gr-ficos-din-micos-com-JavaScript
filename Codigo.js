<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projeto de Ciência de Dados</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <h1>Ciência de Dados: Relatórios Visuais com JavaScript</h1>

    <h2>Gráfico de Acessos às Redes Sociais</h2>
    <canvas id="socialMediaChart" width="400" height="200"></canvas>

    <script>
        // Exemplo de dados que seriam retirados de uma API (dados simulados)
        const socialMediaData = {
            labels: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok'],
            datasets: [{
                label: 'Acessos Diários (milhares)',
                data: [120, 200, 150, 80, 250],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        };

        // Configuração do gráfico
        const config = {
            type: 'bar', // Pode ser 'line', 'pie', etc.
            data: socialMediaData,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };

        // Renderizando o gráfico
        const socialMediaChart = new Chart(
            document.getElementById('socialMediaChart'),
            config
        );
    </script>
</body>
</html>
