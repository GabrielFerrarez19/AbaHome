const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});









 //script grafico
 document.addEventListener('DOMContentLoaded', function () {
  // Função para obter os últimos 6 meses
  function getLast6Months() {
    const months = [];
    const currentDate = new Date();
    for (let i = 5; i >= 0; i--) {
      const month = currentDate.getMonth() - i;
      const year = currentDate.getFullYear();
      months.push(`${month + 1}/${year}`);
    }
    return months;
  }

  // Dados dos últimos 6 meses (substitua com seus próprios dados)
  const data = [100, 150, 200, 180, 250, 300];

  // Meses dos últimos 6 meses (obtidos automaticamente)
  const months = getLast6Months();

  // Crie o contexto do gráfico
  const ctx = document.getElementById('lineChart').getContext('2d');

  // Crie o gráfico de linhas
  const lineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: months, // Use os meses como rótulos do eixo X
      datasets: [{
        label: '',
        borderColor: 'rgb(5, 68, 104)   ',
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
        data: data, // Use os dados dos últimos 6 meses
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            display: false // Ocultar linhas de grade no eixo X
          }
        },
        y: {
          beginAtZero: true // Começar o eixo Y a partir do valor zero
        }
      }
    }
  });
});