const mega = require("megajs");

const auth = {
  email: "ashinsad459@gmail.com",
  password: "MniRvj3eN-RaNkK",
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246",
};

const upload = (data, name) => {
  return new Promise((resolve, reject) => {
    const storage = new mega.Storage(auth);

    // MEGA storage එක ලින්ක් වෙද්දී
    storage.on("ready", () => {
      console.log("Storage is ready. Proceeding with upload.");

      const uploadStream = storage.upload({ name, allowUploadBuffering: true });

      uploadStream.on("complete", (file) => {
        file.link((err, url) => {
          if (err) {
            reject(err);
          } else {
            storage.close();
            resolve(url); // Upload link එක ලබාදෙයි
          }
        });
      });

      uploadStream.on("error", (err) => {
        reject(err);
      });

      data.pipe(uploadStream);
    });

    storage.on("error", (err) => {
      reject(err);
    });
  });
};

module.exports = { upload };
