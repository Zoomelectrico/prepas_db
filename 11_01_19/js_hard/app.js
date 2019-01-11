(function() {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  const data = [
    { x: 1, y: 7000 },
    { x: 2, y: 9000 },
    { x: 3, y: 5000 },
    { x: 4, y: 11000 },
    { x: 5, y: 10000 },
    { x: 6, y: 13000 }
  ];
  function linearRegression(data) {
    const n = data.length;
    const SumXiYi = data.reduce(
      (acumulador, { x, y }) => (acumulador += x * y),
      0
    );
    const SumXi = data.reduce((acc, { x }) => (acc += x), 0);
    const xbar = SumXi / (n - 1);
    const SumYi = data.reduce((acc, { y }) => (acc += y), 0);
    const ybar = SumYi / (n - 1);
    const SumXi2 = data.reduce((acc, { x }) => (acc += Math.pow(x, 2)), 0);
    const b1 =
      (SumXiYi - (1 / n) * SumXi * SumYi) /
      (SumXi2 - (1 / n) * Math.pow(SumXi, 2));
    const b0 = ybar - b1 * xbar;
    const fx = val => b0 + b1 * val;
    return fx;
  }

  const regressionFunction = linearRegression(data);

  const dataLine = data.map(({ x }) => ({ x, y: regressionFunction(x) }));
  console.log(dataLine);
  const lineChart = new Chart(ctx, {
    type: "line",
    data: {
      datasets: [
        {
          label: "Scatter Dataset",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data,
          fill: false
        },
        {
          label: "Linear Data",
          backgroundColor: "rgb(125, 99, 132)",
          borderColor: "rgb(125, 99, 132)",
          data: dataLine
        }
      ]
    },
    options: {
      scales: {
        xAxes: [
          {
            type: "linear",
            position: "bottom"
          }
        ]
      }
    }
  });
})();
