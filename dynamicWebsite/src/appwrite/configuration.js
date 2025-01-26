import config from "../configVariables/config";
import { Client, ID, Databases, Storage } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(config.appwriteApiEndpoint)
        .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async addProduct({title, slug, description, images, status, price, quantity}){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    description,
                    images,
                    status,
                    price,
                    quantity,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: addProduct :: error", error);
        }
    }

    async updateProduct(slug, {title, description, images, status, price, quantity}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    description,
                    images,
                    status,
                    price,
                    quantity
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updateProduct :: error", error);
        }
    }

    async deleteProduct(slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteProduct :: error", error);
        }
    }

    async getProduct(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite serive :: getProduct :: error", error);
        }
    }

    async getProducts() {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId
            );
        } catch (error) {
            console.log("Appwrite service :: getProducts :: error", error);
        }
    }

    // file upload service

    async uploadImage(image){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                image
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
        }
    }

    async deleteImage(imageId){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                imageId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
        }
    }

    getFilePreview(imageId){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            imageId
        )
    }

}


const service = new Service()
export default service;