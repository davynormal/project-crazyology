// src/components/ArtBaselSales.jsx

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ArtBaselSales = () => {
  const salesData = [
    { gallery: "Pace Gallery", artist: "Jeff Koons", work: "Balloon Dog (Blue)", price: 12500000 },
    { gallery: "Gagosian", artist: "Maurizio Cattelan", work: "Comedian (2024 Edition)", price: 6000000 },
    { gallery: "David Zwirner", artist: "Yayoi Kusama", work: "Pumpkin", price: 4500000 },
    { gallery: "Hauser & Wirth", artist: "Louise Bourgeois", work: "Spider Study", price: 3800000 },
    { gallery: "Crazyology Projects", artist: "David Normal", work: "Parting Shot", price: 2400000 },
  ];

  const formatPrice = (value) => {
    return `$${(value / 1000000).toFixed(1)}M`;
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <h2>Art Basel Miami 2024 - Notable Sales</h2>
      <ResponsiveContainer>
        <BarChart data={salesData} margin={{ top: 20, right: 30, left: 40, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="work" 
            angle={-45} 
            textAnchor="end" 
            interval={0}
            height={80}
          />
          <YAxis 
            tickFormatter={formatPrice}
            label={{ 
              value: 'Sale Price (USD)', 
              angle: -90, 
              position: 'insideLeft',
              offset: -10
            }} 
          />
          <Tooltip formatter={(value) => formatPrice(value)} />
          <Bar dataKey="price" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ArtBaselSales;