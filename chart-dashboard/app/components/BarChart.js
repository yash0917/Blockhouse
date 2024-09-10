import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/bar-chart-data/');
                const data = response.data;
                setChartData({
                    labels: data.labels,
                    datasets: [
                        {
                            label: 'Bar Chart',
                            data: data.data,
                            backgroundColor: 'rgba(153, 102, 255, 0.2)',
                            borderColor: 'rgba(153, 102, 255, 1)',
                            borderWidth: 1,
                        },
                    ],
                });
            } catch (error) {
                console.error('Error fetching the bar chart data:', error);
            }
        };

        fetchData();
    }, []);

    if (!chartData) return <div>Loading...</div>;

    return (
        <div>
            <h2>Bar Chart</h2>
            <Bar data={chartData} />
        </div>
    );
};

export default BarChart;