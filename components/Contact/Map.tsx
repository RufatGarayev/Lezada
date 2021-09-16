import React from 'react';

const Map: React.FC = () => {
    return (
        <div id="map-area">
            <div className="container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1759.7980391576525!2d-74.00973387986726!3d40.708707942386454!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1631809390553!5m2!1sen!2s"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="This is a unique title"
                >
                </iframe>
            </div>
        </div>
    )
};

export default Map;