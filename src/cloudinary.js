/**
 * Created by Stanley on 21/05/2017.
 *
 * This file instantiates a new cloudinary instance and provides helpers to CRUD images
 */

import cloudinary from 'cloudinary-core';

const Cloudinary = {

    install(Vue) {
        Vue.mixin({
            methods:{

                /**
                 * Construct an image url based on the name and properties
                 *
                 * With only a name: http://res.cloudinary.com/demo/image/upload/sample
                 * With name and properties: http://res.cloudinary.com/demo/image/upload/c_fit,w_100/sample
                 * @param {String} imageName
                 * @param {Object} [imageProperties]
                 */

                constructImageUrl: function(imageName, imageProperties = {}){

                    const api_key = "298464152583211";
                    const cloud_name = "stanrogo";

                    const cl = cloudinary.Cloudinary.new();
                    cl.config({cloud_name, api_key});

                    let url;

                    if(Object.keys(imageProperties).length === 0){

                        url = cl.url(imageName);
                    }
                    else{

                        url = cl.url(imageName, imageProperties);
                    }

                    return url;
                }
            }
        });
    }
};

export default Cloudinary;