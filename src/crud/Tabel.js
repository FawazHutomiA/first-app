import React from "react";
import { Table } from "react-bootstrap";

const Tabel = ({ makanans, editData, hapusData }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nomor</th>
          <th>Nama Makanan</th>
          <th>Deskripsi</th>
          <th>harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {makanans.map((makanan, index) => {
          return (
            <tr>
              <td>{index+1}</td>
              <td>{makanan.nama}</td>
              <td>{makanan.deskripsi}</td>
              <td>Rp. {makanan.harga}</td>
              <td md="auto">
                <button className="btn btn-warning" onClick={() => editData(makanan.id)}>Edit</button>{' '}
                <button className="btn btn-danger" onClick={() => hapusData(makanan.id)}>Hapus</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tabel;
