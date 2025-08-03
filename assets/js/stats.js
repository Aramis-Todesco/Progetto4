// stats.js
export default function () {
  document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("salesChart").getContext("2d");

    // Dati di vendita di esempio
    const salesData = {
      labels: ["Gennaio", "Febbraio", "Marzo", "Aprile"],
      datasets: [
        {
          label: "Vendite (migliaia €)",
          data: [45, 60, 52, 75],
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    };

    // Opzioni del grafico
    const chartOptions = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    };

    // Crea il grafico a barre
    const salesChart = new Chart(ctx, {
      type: "bar",
      data: salesData,
      options: chartOptions,
    });
  });
}
