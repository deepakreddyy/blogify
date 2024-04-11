import conf from '../conf/conf';
import { Client, Databases, Query, Storage, ID } from "appwrite";

export class Service{
    client =new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases=new Databases(this.client);    
        this.bucket =new Storage(this.client);
    }


    //database service

    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug);
        } catch (error) {
            console.log('config :: getpost() ',error)            
            return false;
        }
    }    

    async getPosts(){
        try {
           return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                //  [
                //      Query.equal('status', 'active')
                //  ]
            
            )
        } catch (error) {
            console.log("config::getposts(): ",error);       
            return false;     
        }
    }

    async createPost({title,slug,content,featuredImage,status,userId,userName}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,content,featuredImage,status,userId,userName
                }
            ) 
        } catch (error) {
            console.log("config::createPost(): ",error);
            return false;      
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,content,featuredImage,status
                }
            )            
        } catch (error) {
            console.log("config::updatePost(): ",error);
            return false; 
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug);
            return true;
        } catch (error) {
            console.log('config :: deletepost() ',error)            
            return false;
        }
    }  

    //storage service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )   
        } catch (error) {
            console.log('config :: uploadFile() ',error)            
            return false;   
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )   
        } catch (error) {
            console.log('config :: deleteFile() ',error)            
            return false;   
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
    ).href //here .href is used(watch the video why)
    }  //we are not using async await cause of this "you're using the await keyword on an expression that doesn't have a promise-like return type."

}

const service=new Service();
export default service;




