import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from "react-data-table-component";
import './Lostcard.css';



function LostCard() {
  const columns =[
    {
      name: "Name",
      selector: row => row.name 
    },
    {
      name:'number',
      selector: row => row.number
    }

  ];

    const data =[
      {
        id:1 ,
        name: "absa",
        number : "0800 111 156",
      },
      {
        id:1 ,
        name: "FNB",
        number : "0800 110 132",
      },
      {
        id:1 ,
        name: "netbank",
        number : "0800 110 929",
      },
      {
        id:1 ,
        name: "standard bank ",
        number : "0800 020 600",
      },
    ]

  return (
    <div className="">
     
   <div className='LostCard' >
      <DataTable className = 'DataTable'

      columns={columns}
      data={data}

      >
        console.log(data);
      </DataTable>
      
    </div>
          
            
            
          <button className='MAIN'  > <a className='next' href='DeleteCard' >
               next </a> </button>
      <button className='btn'> 
     <a href='/' className='btn-1'>
      Cancel </a></button>
          </div>

  )
}

export default LostCard;
