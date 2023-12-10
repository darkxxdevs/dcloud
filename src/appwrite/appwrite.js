import { Client, ID, Account } from "appwrite"
import config from "@/config/appwriteConfig"

const client = new Client()

client.setEndpoint(config.endpoint).setProject(config.project)

export const account = new Account(client)

export class AppwriteService {
  async createUserAccount({ username, email, password }) {
    try {
      return await account.create(ID.unique(), email, password, username)
    } catch (error) {
      throw error
    }
  }

  async loginUserAccount({ email, password }) {
    return await account.createEmailSession(email, password)
  }

  async getCurrentUser() {
    try {
      return await account.get()
    } catch (error) {
      throw error
    }
  }

  async isUserLoggedIn() {
    try {
      const data = await this.getCurrentUser()
      return !!data
    } catch (error) {
      return false
    }
  }

  async logout() {
    try {
      return await account.deleteSession("current")
    } catch (error) {
      throw error
    }
  }
}

const appwriteService = new AppwriteService()

export default appwriteService
