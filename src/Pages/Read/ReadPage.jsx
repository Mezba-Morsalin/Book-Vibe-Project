import React from 'react';
import { useLoaderData } from 'react-router';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const ReadPage = () => {
    const books = useLoaderData();
    const chartData = books.map(book => ({
        name : book.bookName,
        pages : book.totalPages,

    }))
    return (
        <div className='w-full h-[600px] mt-10 px-4'>
            
            <h2 className='text-3xl font-bold text-center mb-10'>
                📊 Read Books Pages Chart
            </h2>

            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                    
                    <XAxis 
                        dataKey="name"
                        angle={-90}
                        textAnchor="end"
                        interval={0}
                        height={200}
                    />

                    <YAxis />

                    <Tooltip 
                        formatter={(value, name, props) => [
                            value, 
                            props.payload.fullName
                        ]}
                    />

                    <Bar 
                        dataKey="pages" 
                        fill="#22c55e" 
                        radius={[10, 10, 0, 0]} 
                    />

                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ReadPage;