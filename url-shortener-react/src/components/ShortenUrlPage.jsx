import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ShortenUrlPage = () => {
    const { url } = useParams();

    useEffect(() => {
        if (url) {window.location.href = import.meta.env.VITE_BACKEND_URL + `/${url}`;
    }
}, [url]);
return (
<div className="flex justify-center items-center min-h-[calc(100vh-64px)] bg-black">
  <p className="text-white text-xl">Redirecting...</p>
</div>
);
}

export default ShortenUrlPage