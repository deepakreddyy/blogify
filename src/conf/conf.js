const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL), 
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID), 
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID), 
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID), 
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID), 
};

export default conf;

/*we are accessing  the environment variable using import.meta.env.VARIABLE_NAME, 
if we create react using create-react-app, 
we access them by using process.env.VARIABLE_NAME */
