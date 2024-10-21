import React from 'react'
import { Button } from './ui/button'

const Modal = ({isModalOpen,setIsModalOpen,children}) => {
    if(!isModalOpen)return null
  return (
    <div className='fixed inset-0 bg-blue-200 bg-opacity-75  flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg shadow-md p-6 w-full max-w-md shadow-blue-200 m-5'>
        <Button variant="outline" className="absolute top-4 shadow-lg shadow-blue-200 right-4 text-gray-400 text-3xl" 
            onClick={()=>setIsModalOpen(false)}
        >&times;</Button>
        {children}
      </div>
    </div>
  )
}

export default Modal
