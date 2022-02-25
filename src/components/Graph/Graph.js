import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function Graph({ pokeStats }) {
    console.log(pokeStats);
    const labels = [
        'HP',
        'Ataque',
        'Defensa',
        'Ataque Especial',
        'Defensa Especial',
        'Velocidad',
    ];
    const data = {
        labels,
        datasets: [
            {
                label: 'Estadisticas',
                data: pokeStats.map((item) => item),
                backgroundColor: 'rgba(235, 207, 30, 1)',
            },
        ],
    };
    const options = {
        responsive: true,
        color: 'rgb(255,255,255)',
        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            yAxes: {
                grid: {
                    drawBorder: true,
                    color: 'rgba(255, 255, 255, 0.4)',
                },
                ticks: {
                    color: 'white',
                    fontSize: 16,
                },
            },
            xAxes: {
                grid: {
                    drawBorder: true,
                    color: 'rgba(255, 255, 255, 0.4)',
                },
                ticks: {
                    color: 'white',
                    fontSize: 14,
                },
            },
        },
    };

    return <Bar options={options} data={data} />;
}

export default Graph;
