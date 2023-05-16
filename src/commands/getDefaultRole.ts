import { configs } from "../store";
import { ChatInputCommandInteraction, Client, SlashCommandBuilder } from "discord.js";

export default function (client: Client) {
  return {
    data: new SlashCommandBuilder()
      .setName('getdefaultrole')
      .setDescription('Gets the default role for new users'),
    async execute(interaction: ChatInputCommandInteraction) {
      try {
        const config = await configs.get(interaction.guildId)
        const guiild = await client.guilds.fetch(interaction.guildId)
        const role = await guiild.roles.fetch(config.defaultRole)
        await interaction.reply({
          ephemeral: true,
          content: `The default role is ${role}`
        })
      } catch (e) {
        console.error(e);
      }
    },
  };
}