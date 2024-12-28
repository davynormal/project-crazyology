import React from 'react';
import ThumbnailNavigator from './ThumbnailNavigator'; // Adjust the path as necessary

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <div className="content">
                {children}
            </div>
            <div className="sidebar">
                <ThumbnailNavigator />
            </div>
        </div>
    );
};

export default Layout;
