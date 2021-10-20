import React from 'react';
import ThemeLayout from '../Components/Layouts/ThemeLayout';

const RootProvider = ({children}) => {
    return(
        <>
            <ThemeLayout>
                {children}
            </ThemeLayout>
        </>
    )
}

export default RootProvider;