import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        
        <div className='flex pl-4'>
            <span><CheckCircleIcon className="h-6 w-6 text-purple-500"/></span><li className='text-purple-700'>{feature}</li>
        </div>
    );
};

export default Feature;