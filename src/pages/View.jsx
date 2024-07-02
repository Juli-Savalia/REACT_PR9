import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Delete_User } from '../redux/action/noteAction';
import '../style.css'
import { MdDelete } from "react-icons/md";

const View = () => {
  let record = useSelector(state => state.note.userList)
  console.log(record);
  let dispatch = useDispatch();
  
  return (
    <div align="center">
      <div className="container">
      <h1 className="h3 mb-2 text-center text-gray-800">View</h1>
        <div className="d-flex flex-wrap align-items-center justify-content-center">
          {
            record.map((item, index) => {
              return (
                <div className="w-25 rounded fixed-h p-2" key={item.id}>
                  <div className="card-body shadow h-100 border text-white rounded-3 border-1 bg-warning p-3">
                    <h4>{item.name}</h4>
                    <h6>{item.phone}</h6>
                    <button className='btn fs-2 text-danger' onClick={ (e) => dispatch(Delete_User(item.id))}>
                    <MdDelete />
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default View