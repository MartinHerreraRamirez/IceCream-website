import React from 'react'

const BotonRound = ({children}) => {
  return (
    <div>
         <div className="pd 500">
                <div className="ml-6 mt-4">
                    <button className="bg-indigo-600 hover:bg-indigo-700 rounded-full px-2 py-6 border-2 border-blue-400
                     font-sans: -apple-system text-lg font-weight:600 text-indigo-600 
                     hover:text-gray-100 bg-slate-200 border-2 border-indigo-600
                     hover:-translate-y-1.5 transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none">
                     {children}
                    </button>
                </div>
            </div>
    </div>
  )
}

export default BotonRound