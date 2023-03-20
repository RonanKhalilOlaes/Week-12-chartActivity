import { useState, useEffect } from "react"
import styles from './BarChart.module.css'

import { Bar } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
) 

export default function BarChart () {

    const [chartData, setChartData] = useState ({
        datasets: []
    })

    const [ chartOptions, setChartOptiions] = useState ({})

    useEffect (() => {
        setChartData ({
            labels: []
        })
    })

    return (
        <>

        </>
    )
}