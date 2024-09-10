import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { CandlestickController, CandlestickElement, OhlcController, OhlcElement } from 'chartjs-chart-financial';
import 'chartjs-adapter-date-fns';
import axios from 'axios';

// Register all chart components
Chart.register(...registerables, CandlestickController, CandlestickElement, OhlcController, OhlcElement);

const CandlestickChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/candlestick-data/');
                const data = response.data.data;

                const dataset = data.map(item => ({
                    x: new Date(item.x).getTime(),
                    o: item.open,
                    h: item.high,
                    l: item.low,
                    c: item.close,
                }));

                if (chartInstance.current) {
                    chartInstance.current.destroy();
                }

                const ctx = chartRef.current.getContext('2d');
                chartInstance.current = new Chart(ctx, {
                    type: 'candlestick',
                    data: {
                        datasets: [{
                            label: 'Candlestick Data',
                            data: dataset
                        }]
                    },
                    options: {
                        responsive: true,
                        scales: {
                            x: {
                                type: 'time',
                                time: {
                                    unit: 'day'
                                }
                            },
                            y: {
                                beginAtZero: false
                            }
                        }
                    }
                });
            } catch (error) {
                console.error('Error fetching the candlestick data:', error);
            }
        };

        fetchData();

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div>
            <h2>Candlestick Chart</h2>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default CandlestickChart;