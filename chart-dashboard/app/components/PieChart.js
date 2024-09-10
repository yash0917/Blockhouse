import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/pie-chart-data/');
                const data = response.data;
                setChartData({
                    labels: data.labels,
                    datasets: [
                        {
                            label: 'Pie Chart',
                            data: data.data,
                            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                        },
                    ],
                });
            } catch (error) {
                console.error('Error fetching the pie chart data:', error);
            }
        };

        fetchData();
    }, []);

    if (!chartData) return <div>Loading...</div>;

    return (
        <div>
            <h2>Pie Chart</h2>
            <Pie data={chartData} />
        </div>
    );
};

export default PieChart;