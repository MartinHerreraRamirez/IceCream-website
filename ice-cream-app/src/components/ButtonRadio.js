import React from 'react'
const BotonRadio = ({children, myOnClick}) => {
   
    return (
        <div>
            <div className="pd 500">
                <div className="mt-4 ml-6">
                    <button className="hover:bg-indigo-700 rounded-full px-6 py-1.5 
                     font-sans: Roboto text-lg font-weight:600 text-indigo-600 
                     hover:text-gray-100 bg-slate-200 border-2 border-indigo-600
                     hover:-translate-y-1 transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none"
                     onClick={myOnClick}>
                    {children}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BotonRadio;

    