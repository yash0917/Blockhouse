import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, CandlestickController, BarElement, Tooltip, Title } from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, CandlestickController, BarElement, Tooltip, Title);

const CandlestickChart = () => {
    const [chartData, setChartData] = useState(null);

    // Fetch data from Django API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/candlestick-data/');
                const data = response.data.data;

                const labels = data.map(item => item.x); // Dates
                const dataset = data.map(item => ({
                    open: item.open,
                    high: item.high,
                    low: item.low,
                    close: item.close
                }));

                setChartData({
                    labels: labels,
                    datasets: [
                        {
                            label: 'Candlestick Data',
                            data: dataset,
                            borderColor: 'rgba(0, 0, 0, 1)',
                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        },
                    ],
                });
            } catch (error) {
                console.error('Error fetching the candlestick data:', error);
            }
        };

        fetchData();
    }, []);

    // Render chart
    if (!chartData) return <div>Loading...</div>;

    return (
        <div>
            <h2>Candlestick Chart</h2>
            <Chart
                type="candlestick"
                data={chartData}
            />
        </div>
    );
};

export default CandlestickChart;