import React from 'react';

function PageNotFound() {
    return (
        <div>
            <div className="card text-white bg-danger">
                <div className="card-header">Page Not Found!</div>
                <div className="card-body">
                    <h4 className="card-title">404</h4>
                    <p className="card-text">It seems your entered Wrong URL, please user Nav Bar or ...</p>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound;