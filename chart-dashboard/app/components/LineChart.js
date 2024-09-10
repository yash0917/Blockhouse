import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/line-chart-data/');
                const data = response.data;
                setChartData({
                    labels: data.labels,
                    datasets: [
                        {
                            label: 'Line Chart',
                            data: data.data,
                            borderColor: 'rgba(75, 192, 192, 1)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        },
                    ],
                });
            } catch (error) {
                console.error('Error fetching the line chart data:', error);
            }
        };

        fetchData();
    }, []);

    if (!chartData) return <div>Loading...</div>;

    return (
        <div>
            <h2>Line Chart</h2>
            <Line data={chartData} />
        </div>
    );
};

export default LineChart;