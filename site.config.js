const CONFIG = {
  // your domain link
  link: process.env.PUBLIC_URL || "http://localhost:3000",
  useFirebase: {
    enable: false, // If you want to use Firebase, set this to true. In the future, we might develop a backend file management system.
    config: {
      host: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || "",
    },
  },
};

module.exports = { CONFIG };
