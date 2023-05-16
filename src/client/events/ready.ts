import { Client, Events } from "discord.js"

export default function ready(client: Client) {
  console.log('Registering ready event')
  client.on(Events.ClientReady, () => {
    console.log(`Logged in as ${client.user?.tag}!`)
  })
}