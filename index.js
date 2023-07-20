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




Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});




 //script grafico
 const data = [10, 30, 50, 20, 40, 70, 80, 25, 45, 60, 15, 35];
 const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

 const canvas = document.getElementById('barChart');
 const ctx = canvas.getContext('2d');

 // Configurações do gráfico
 const barWidth = 40;
 const barSpacing = 10;
 const chartMargin = 30;
 const chartHeight = canvas.height - 2 * chartMargin;
 const chartWidth = canvas.width - 2 * chartMargin;

 //barras
 function drawBarChart(data) {
   const maxValue = Math.max(...data);
   const scale = chartHeight / maxValue;

   for (let i = 0; i < data.length; i++) {
     const barHeight = data[i] * scale;
     const x = chartMargin + i * (barWidth + barSpacing);
     const y = canvas.height - chartMargin - barHeight;

     // Gradiente barras 
     const gradient = ctx.createLinearGradient(x, y, x, canvas.height - chartMargin);
     gradient.addColorStop(0, 'rgb(5, 68, 104)'); // Cor inicial do gradiente 
     gradient.addColorStop(1, 'rgba(0, 123, 255, 0.2)'); // Cor final do gradiente 

     ctx.fillStyle = gradient;
     ctx.fillRect(x, y, barWidth, barHeight);

     // Escreve o valor das barras
     ctx.fillStyle = '#000'; // Cor do texto 
     ctx.font = '12px Arial';
     ctx.fillText(data[i], x + barWidth / 2 - 8, y - 8);
   }
 }

 // Função  meses em baixo das barras
 function drawMonths() {
   ctx.fillStyle = '#000'; // Cor do texto 
   ctx.font = '12px Arial';

   for (let i = 0; i < months.length; i++) {
     const x = chartMargin + i * (barWidth + barSpacing) + barWidth / 2;
     const y = canvas.height - chartMargin + 15;

     ctx.fillText(months[i], x - 12, y);
   }
 }

 drawBarChart(data);
 drawMonths();