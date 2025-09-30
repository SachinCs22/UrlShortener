import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const ErrorPage = ({ message }) => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-black p-6">
        <FaExclamationTriangle className='text-7xl text-gray-400 mb-6' />
        <h1 className='text-4xl font-bold mb-3 text-white'>
            Oops! Something went wrong.
        </h1>
        <p className='text-gray-400 mb-8 text-center text-lg'>
            {message ? message : "An unexpected error has occurred"}
        </p>
        <button onClick={() => {
            navigate("/");
        }}
        className='px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-all duration-300'
        >
            Go back to home
        </button>
    </div>
  )
}

export default ErrorPage