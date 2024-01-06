import { Client, ID, Account } from "appwrite"
import config from "@/config/appwriteConfig"

export class AppwriteService {
  constructor() {
    this.client = new Client()
    this.client.setEndpoint(config.endpoint).setProject(config.project)
    this.account = new Account(this.client)
  }

  async createUserAccount({ username, email, password }) {
    try {
      return await this.account.create(ID.unique(), email, password, username)
    } catch (error) {
      throw error
    }
  }

  async createEmailSession({ email, password }) {
    return await this.account.createEmailSession(email, password)
  }

  async getCurrentUser() {
    try {
      return await this.account.get()
    } catch (error) {
      throw error
    }
  }

  async logout() {
    try {
      return await this.account.deleteSession("current")
    } catch (error) {
      throw error
    }
  }

  async verifyUser(redirectionUrl) {
    try {
      const response = await this.account.createVerification(redirectionUrl)
      return response
    } catch (error) {
      throw error
    }
  }

  async updateUserVerification() {
    const urlParams = new URLSearchParams(window.location.search)
    const secret = urlParams.get("secret")
    const userid = urlParams.get("userId")
    try {
      return await this.account.updateVerification(userid, secret)
    } catch (error) {
      throw error
    }
  }
}

const appwriteService = new AppwriteService()

export default appwriteService
