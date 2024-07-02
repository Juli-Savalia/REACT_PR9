import React from 'react'
import { SiGooglekeep } from "react-icons/si";

const Header = () => {
  return (
    <div className='container-fluid mb-3'>
        <div className="row">
            <h3 className="p-4 bg-warning bg-gradient mb-0">
                <SiGooglekeep className='me-2 fs-2'/>
                GOOGLE KEEP
            </h3>
        </div>
    </div>
  )
}

export default Header