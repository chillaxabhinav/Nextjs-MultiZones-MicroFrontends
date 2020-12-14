import React from 'react';

const Layout = ({children}) => {
    return (
        <React.Fragment>
            <div>Hey I am default layout</div>
            {children}
        </React.Fragment>
    )
}

export default Layout;