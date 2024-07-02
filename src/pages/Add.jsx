import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Add_User } from '../redux/action/noteAction'

const Add = () => {

    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")

    let dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id : Math.floor(Math.random() * 100),
            name : name,
            phone : phone
        }
        dispatch(Add_User(obj));
        setName("");
        setPhone("");
    }

    return (
        <>
            <div className="container mb-4 mx-auto">
                <div className="d-flex justify-content-center">
                    <div className="w-25 p-3 shadow rounded">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input type="text" className="form-control border-0" placeholder='Title' onChange={ (e) => setName(e.target.value)} value={name}/>
                            </div>
                            <div className="mb-5">
                                <input type="text" className="form-control border-0" placeholder='Write a Note...' onChange={ (e) => setPhone(e.target.value)} value={phone}/>
                            </div>
                            
                            <div className="text-end">
                            <button type="submit" className="fs-2 text-white bg-warning border-0 px-3 rounded-5 pb-1">
                                +
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Add