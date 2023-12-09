// Import necessary modules
import { Client, Account } from "appwrite"
import { ID } from "appwrite"

// Create a new instance of the Appwrite Client
const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)

// Create an instance of the Appwrite Account using the client
const account = new Account(client)

// Export the necessary variables
export { client, account, ID }
