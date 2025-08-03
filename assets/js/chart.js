document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("salesChart").getContext("2d");

  // Dati di vendita di esempio
  const salesData = {
    labels: ["Gennaio", "Febbraio", "Marzo", "Aprile"],
    datasets: [
      {
        label: "Vendite (migliaia €)",
        data: [12, 19, 3, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
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
