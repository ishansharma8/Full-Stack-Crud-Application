import React from 'react';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';

const CRUD = () => {
  const empdata = [
    {
      id: 1,
      name: 'Alex',
      age: 20,
      isActive: 1,
    },

    {
      id: 2,
      name: 'Roy',
      age: 20,
      isActive: 1,
    },

    {
      id: 1,
      name: 'Liam',
      age: 20,
      isActive: 1,
    },
  ];

  const [data, setdata] = useState(0); //api response

  useEffect(() => {
    setdata(empdata);
  }, []);

  return (
    <>
      <div>CRUD</div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>isActive</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0
            ? data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.isActive}</td>
                  </tr>
                );
              })
            : 'Loading...'}
        </tbody>
      </Table>
      -
    </>
  );
};

export default CRUD;
