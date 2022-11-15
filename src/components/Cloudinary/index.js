import React, { Component, useEffect } from "react";
//import { useQuery } from '@apollo/client';
//import { QUERY_SECRET_KEYS } from '../../utils/queries';

function Cloudinary(props) {
    /*const { loading, data } = useQuery(QUERY_SECRET_KEYS);
    useEffect(() => {
        if (window.cloudinary && !loading) {
            var myWidget = window.cloudinary.createUploadWidget({
                cloudName: data["secretkeys"]["cloudinary_cloud_name"],
                uploadPreset: data["secretkeys"]["cloudinary_upload_preset"],
                sources: ['local', 'image_search', 'instagram', 'facebook', 'url', 'camera'],
                googleApiKey: data["secretkeys"]["google_api_key"]
            },
                (error, result) => {
                    if (!error && result && result.event === "success") {
                        console.log('Cheetah! Here is the image info: ', result.info);
                        props.SetLogo(result.info.secure_url);
                    }
                }
            )

            document.getElementById("upload_widget").addEventListener("click", function () {
                myWidget.open();
            }, false);
        }
    }
        , [data])*/
    return (
        <button className="btn btn-primary" id="upload_widget">Upload Logo</button>
    )
}

export default Cloudinary;
