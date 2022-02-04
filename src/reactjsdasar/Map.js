import React from 'react';

const makanans = [
    {
        nama: 'soto',
        harga: 12000
    },

    {
        nama: 'bakso',
        harga: 10000
    },

    {
        nama: 'mie ayam',
        harga: 8000
    },

    {
        nama: 'nasi goreng',
        harga: 17000
    },
];


// reduce

const total_bayar = makanans.reduce((total_harga, makanan) => {
    return total_harga+makanan.harga;
}, 0);

const Map = () => {
  return (
      <div>
          <h2>Map Sederhana</h2>
          <ul>
              {makanans.map((makanan, index) => (
                  <li>{index+1} {makanan.nama} - {makanan.harga}</li>
              ))}  
          </ul>

          <h2>Map Filter dengan harga makanan yang lebih dari 11000</h2>
          {makanans.filter((makanan) => makanan.harga > 11000).map((makanan, index) => (
              <li>{index+1} {makanan.nama} - {makanan.harga}</li>
          ))}

          <h3>Total harga = {total_bayar}</h3>
      </div>
  );
};

export default Map