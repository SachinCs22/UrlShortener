import React, { useState } from 'react'
import Graph from './Graph'
import { dummyData } from '../../dummyData/data'
import { useStoreContext } from '../../contextApi/ContextApi'
import { useFetchMyShortUrls, useFetchTotalClicks } from '../../hooks/useQuery'
import ShortenPopUp from './ShortenPopUp'
import { FaLink } from 'react-icons/fa'
import ShortenUrlList from './ShortenUrlList'
import { useNavigate } from 'react-router-dom'
import Loader from '../Loader'

const DashboardLayout = () => {
    const { token } = useStoreContext();
    const navigate = useNavigate();
    const [shortenPopUp, setShortenPopUp] = useState(false);

    const {isLoading, data: myShortenUrls, refetch } = useFetchMyShortUrls(token, onError)
    
    const {isLoading: loader, data: totalClicks} = useFetchTotalClicks(token, onError)

    function onError() {
      navigate("/error");
    }

  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)] bg-black">
        {loader ? ( 
            <Loader />
        ): ( 
        <div className="lg:w-[90%] w-full mx-auto py-16">
            <div className="h-96 relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6">
                {totalClicks.length === 0 && (
                     <div className="absolute flex flex-col justify-center sm:items-center items-end w-full left-0 top-0 bottom-0 right-0 m-auto">
                     <h1 className="text-white font-serif sm:text-2xl text-[18px] font-bold mb-2">
                       No Data For This Time Period
                     </h1>
                     <h3 className="sm:w-96 w-[90%] sm:ml-0 pl-6 text-center sm:text-lg text-sm text-gray-400">
                       Share your short link to view where your engagements are coming from
                     </h3>
                   </div>
                )}
                <Graph graphData={totalClicks} />
            </div>
            <div className='py-6 sm:text-end text-center'>
                <button
                    className='bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition-all duration-300'
                    onClick={() => setShortenPopUp(true)}>
                    Create a New Short URL
                </button>
            </div>

            <div>
              {!isLoading && myShortenUrls.length === 0 ? (
                <div className="flex justify-center pt-16">
                  <div className="flex gap-2 items-center justify-center py-6 sm:px-8 px-5 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
                    <h1 className="text-white font-montserrat sm:text-[18px] text-[14px] font-semibold mb-1">
                      You haven't created any short link yet
                    </h1>
                    <FaLink className="text-gray-400 sm:text-xl text-sm" />
                  </div>
              </div>
              ) : (
                  <ShortenUrlList data={myShortenUrls} />
              )}
            </div>
        </div>
        )}

        <ShortenPopUp
          refetch={refetch}
          open={shortenPopUp}
          setOpen={setShortenPopUp}
        />
    </div>
  )
}

export default DashboardLayout