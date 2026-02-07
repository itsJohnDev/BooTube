const appConfig = require("../config/index");
const cloudinary = require("cloudinary").v2;

// Configure cloudinary
cloudinary.config({
  cloud_name: appConfig.cloudinary.cloudName,
  api_key: appConfig.cloudinary.apiKey,
  api_secret: appConfig.cloudinary.apiSecret,
});

const uploadToCloudinary = async (filepath, folder) => {
  try {
    const result = await cloudinary.uploader.upload(filepath, {
      folder,
      resource_type: "auto",
    });
    return result;
  } catch (error) {
    console.log("Error uploading to cloudinary", error);
    throw new Error("Failed to upload media to cloudinary");
  }
};

const deleteFromCloudinary = async (publicId, resourceType = "image") => {
  try {
    const result = await cloudinary.uploader.destroy(publicId, {
      resource_type: resourceType,
    });
    return result;
  } catch (error) {
    console.log("Error deleting from cloudinary", error);
    throw new Error("Failed to delete media from cloudinary");
  }
};

module.exports = {
  deleteFromCloudinary,
  uploadToCloudinary,
};
