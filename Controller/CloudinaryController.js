const cloundanry = require("cloudinary").v2;

const uploadImage = async (file) => {
  cloundanry.config({
    cloud_name: "dczogjzfm",
    api_key: "219789136486517",
    api_secret: "SxUcIFUhtEnd19zhWSLQRoqVmM0",
  });

  const result = await cloundanry.uploader.upload(file);
  return result;
};
module.exports = {
  uploadImage,
};
