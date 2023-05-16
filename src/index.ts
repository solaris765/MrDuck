import { createNewClient } from "./client"
import {existsSync, mkdirSync} from 'fs'

if (!existsSync('data')) {
  console.log('Creating data folder')
  mkdirSync('data');
}

if (!process.env.DISCORD_BOT_TOKEN) {
  console.error("No token provided. Please set the TOKEN environment variable.")
  process.exit(1)
}
if (!process.env.DISCORD_CLIENT_ID) {
  console.error("No client ID provided. Please set the CLIENT_ID environment variable.")
  process.exit(1)
}

createNewClient()
// restart the bot on failure
process.on('unhandledRejection', error => {
  console.error('Unhandled promise rejection:', error);
  createNewClient()
});