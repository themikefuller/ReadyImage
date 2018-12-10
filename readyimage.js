'use strict';

function readyImage(file,options={}) {
  return new Promise((resolve, reject) => {

    if (!file) {
      return reject({
        "code": 400,
        "message": "No files selected."
      });
    }

    let resolver = (data) =>{
      if (data.type === 'error') {
        return reject({
          "code": 400,
          "message": "File was not recognized as an image."
        });
      }

    let settings = {};
    if (options.maxWidth) {
      settings.maxWidth = options.maxWidth;
    }

    if (options.crop) {
      settings.crop = true;
      settings.maxWidth = options.maxWidth || 1024;
      settings.maxHeight = options.maxWidth;
    }

    let photo = loadImage.scale(data,settings);
    let type = options.type || "jpeg";
    let dataURL = photo.toDataURL('image/' + type, options.quality || 1.0);
        
    resolve(dataURL);

    };

    loadImage(file, resolver, {
      "orientation": true
    });

  });
}

