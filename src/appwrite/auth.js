import conf from '../conf/conf';
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client  = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account=new Account(this.client) ;   
    }

    async createAccount({email,password,name}){
        try {
            const userAccount=await this.account.create(ID.unique(),email,password,name)
            if(userAccount){
                return this.login({email,password});
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);            
        } catch (error) {
            throw error;            
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("error in auth :: getCurrentUser",error);
            
        }
    }

    async logout(){
        try {
            await this.account.deleteSessions();            
        } catch (error) {
            console.log('Error in Auth::LogOut ',error);
        }
    }

    async getUser(id){
        try {
            return await this.account.get(id);            
        } catch (error) {
            console.log("auth::getUser::catch",error);
        }
    }

}
const authService=new AuthService();
export default authService;


//this way of writing is diff from docs in appwrite.
//this is the basic template for any type of authentication using appwrite.
//generally, account is exported from auth service or any other file in which youve defined account and used as a property to call functions on it.