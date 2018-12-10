# readyImage
Load and Optimize Photos in the Browser

ReadyImage is a promise-based image resizer / optimizer. ReadyImage uses and requires <a href="https://github.com/blueimp/">blueimp's loadImage library</a>. Photo orientation is corrected automatically. Optionally the photo can be resized to a max width/height and max quality. Photos can also be optionally cropped from the center/center as a square at the maximum width and quality.

The optimized / resized image data is returned in the promise as a data URL (base64 encoded image). The data can be applied as the source of an image to be displayed in the browser, or sent over the network to be saved for use later.


## Adding ReadyImage to your Project

On the Web via jsdelivr CDN
```javascript
// blueimp's loadImage library
<script src="https://cdn.jsdelivr.net/npm/blueimp-load-image/js/load-image.all.min.js">

// readyImage
<script src="https://cdn.jsdelivr.net/gh/themikefuller/readyimage/readyimage.js">
```


<br/>

## Options

 - maxWidth (integer. Defaults to 1024)
 - maxHeight (integer)
 - quality (decimal percentage. Default to 1.0)
 - type (file type. Defaults to "jpeg")
 - crop (boolean. Defaults false)


<br/>

## Using readyImage

Example: readyImage accepts the files inputted by the user into a file input.

```javascript
// Create a file input and drop in on the page
var fileInput = document.createElement('input');
fileInput.type = "file";
document.body.prepend(fileInput);

// Create an image element and drop it on the page
var image = document.createElement('img');
document.body.appendChild(image);

// readyImage options
var options = {
  "maxWidth":800,
  "maxHeight":800,
  "quality": 0.50,
  "type":"jpeg",
  "crop": false
};

// When user changes or selects a file with the file input...
fileInput.onchange = () => {

  // If they selected a file...
  if (fileInput.files[0]) {

    // ready the image...
    readyImage(fileInput.files[0],options).then(result=>{

      // The image is ready. Display it in the image element.
      console.log('image ready!');
      image.src = result;

    }).catch(err => {

      // The user selected a file that is not supported as an image...
      console.log(err);

    });
  } else {

    // The user did not select any image or file... (hit cancel perhaps...)
    console.log('No image selected.');
  }
};
```
