const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    // Extract the folder name from the route (products, categories, brands, profileImages)
    let folderName = 'sportify/general';
    if (req.baseUrl.includes('products')) folderName = 'sportify/products';
    else if (req.baseUrl.includes('categories')) folderName = 'sportify/categories';
    else if (req.baseUrl.includes('brands')) folderName = 'sportify/brands';
    else if (req.baseUrl.includes('auth') || req.baseUrl.includes('users')) folderName = 'sportify/profileImages';

    return {
      folder: folderName,
      allowed_formats: ['jpeg', 'png', 'jpg', 'webp'], // supports promises as well
      public_id: file.fieldname + '-' + Date.now(),
    };
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
