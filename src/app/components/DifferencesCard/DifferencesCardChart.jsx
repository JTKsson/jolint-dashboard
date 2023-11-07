'use client'
import { BarChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import differencesData from '../../assets/differencesData.json'


export default function DifferencesCardChart(data) {
    // console.log(differencesData);

    const roundedData = differencesData.map((item) => ({
        ...item,
        'variation': Math.floor(item['variation'])
    }))
    console.log(roundedData);
    return <div>DifferencesCardChart</div>
}
