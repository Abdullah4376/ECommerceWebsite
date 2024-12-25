import config from "../configVariables/config";
import { Client, Account, Databases, ID } from "appwrite";

export class AppwriteAuth {
    client = new Client();
    account; // We'll just declare account here because it will mix with other things if we were to create a new account here.

    constructor() {
        this.client
            .setEndpoint(config.appwriteApiEndpoint)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
        this.databases = new Databases(this.client);
    }

    async signup({email, password, name, brand}) {
        try {
            const userAccount = await this.account.create(ID.unique, email, password, name);

            if (userAccount) {
                const userData = await this.databases.createDocument(
                    config.appwriteDatabaseId,
                    config.appwriteUserInfoCollectionId,
                    ID.unique(),
                    {
                        userId: userAccount.$id,
                        brandName: brand
                    }
                );
                const loginData = this.login({email, password});
                alert("Account created and logged in successfully!")
                return {loginData, userAccount, userData}
            } else {
                
            }
        } catch (error) {
            alert(`An Error Occured in signup functionality! Error:${error}`)
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            alert(`An Error Occured in login functionality! Error:${error}`)
        }
    }

    async logout(){
        try {
            return await this.account.deleteSession('current');
        } catch (error) {
            alert(`An Error Occured in logout functionality! Error:${error}`)
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            alert(`An Error Occured in getCurrentUser functionality! Error:${error}`)
        }
        
        return null;
    }

}

const appwriteAuth = new AppwriteAuth();
export default appwriteAuth;