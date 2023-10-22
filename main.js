const chartData = {
    labels: ["Liquidity Pool", "Burn", "Marketing", "CEX"], 
    data: [45, 40, 10, 5],
};

const myChart = document.querySelector(".my-chart"); 
const ul = document.querySelector(".token-stats .details ul");

new Chart(myChart, {
    type: "doughnut",
    data: {
        labels: chartData.labels, 
        datasets: [
            {
                label: "JIJI tokenomics",
                data: chartData.data
            },
        ], 
    },
    options: {
        borderWidth: 1,
        borderRadius: 2,
    },
});

const populateUl = () => {
    chartData.labels.forEach( (l, i) => {
        let li = document.createElement("li");
        li.innerHTML = `${l}: <span class= 'percentage'>${chartData.data[i]}%</span>`;
        ul.appendChild(li);
    })
}

populateUl();