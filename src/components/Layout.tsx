import React from 'react'
import './Layout.css'

export const Layout: React.FC = ({children}) => {
    return (
        <div className='Layout'>
            {children}
        </div>
    );
};
