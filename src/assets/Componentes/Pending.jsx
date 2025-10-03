import React from 'react';

const Pending = ({issues,handleResolved}) => {
    return (
        <div>
            <h1 className="font-bold text-xl mb-2">{issues.title}</h1>
            <button onClick={()=>handleResolved(issues)} className="btn bg-green-600 text-white w-[100%]">
              Complete
            </button>
        </div>
    );
};

export default Pending;