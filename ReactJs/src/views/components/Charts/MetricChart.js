import { BarChart, XAxis, YAxis, Bar, ResponsiveContainer, Cell } from 'recharts';
import getRandomNumber from '../../../common/getRandomNumber';
const ChartComponent = () => {

    const data = [
        {
            'name': 'Calories',
            'qty': getRandomNumber(50)
        },
        {
            'name': 'Splat Points',
            'qty': getRandomNumber(100)
        },
        {
            'name': 'AVG. Heart Rate',
            'qty': getRandomNumber(200)
        },
        {
            'name': 'MAX Heart Rate',
            'qty': getRandomNumber(200)
        },
        {
            'name': 'Miles',
            'qty': getRandomNumber(150)
        }
    ];

    const colors = ['grey', 'blue', 'green', 'orange', 'red', 'red'];

    return (
        //Chart by John
        <ResponsiveContainer minWidth={700} minHeight={500}>
            <BarChart data={data}>
                <Bar dataKey="qty" label={{ fontSize: 20, position: 'top' }} >
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} stroke={colors[index]} fill={colors[index]} />
                        ))
                    }
                </Bar>
                <XAxis dataKey="name" />
                <YAxis dataKey="qty" hide="true" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default ChartComponent;
