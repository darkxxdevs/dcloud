import { Client, Account } from "appwrite"

export const client = new Client()

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("657149b43a768e9772f9")

export const account = new Account(client)
export { ID } from "appwrite"
