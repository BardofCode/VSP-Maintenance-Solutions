import React, { useState } from 'react';

function ImagePicker({sendSiteData}) {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);

            //send to Emp.js(Parent)
            sendSiteData(imageUrl);
        }
    };

    return (
        <div>

            {/* Camera & Gallery Access */}
            <input
                type="file"
                accept="image/*"
                capture="environment" // 'user' for front camera 'enviroment' for storage
                onChange={handleImageChange}
            />

            {/* Display selected image */}
            {image && (
                <div style={{ marginTop: '20px' }}>
                    <img src={image} alt="Selected" width="300px" />
                </div>
            )}
        </div>
    );
}

export default ImagePicker;
