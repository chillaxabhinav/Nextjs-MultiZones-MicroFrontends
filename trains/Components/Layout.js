import React from 'react';

const Layout = ({children}) => {
    return (
        <React.Fragment>
            <div>I am layout of trains</div>
            {children}
        </React.Fragment>
    )
}

export default Layout;