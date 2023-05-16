import { configs } from "../store";
import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";


export default {
  data: new SlashCommandBuilder()
    .setName('defaultrole')
    .setDescription('Set the default role for new users')
    .addRoleOption(option => option.setName('role')
    .setDescription('The role to set as the default role')
    .setRequired(true)
    ),
  async execute(interaction: ChatInputCommandInteraction) {
    const defaultRole = interaction.options.getRole('role')
    try {
      await interaction.reply({
        ephemeral: true,
        content: `Setting ${defaultRole} as the default role`
      })
      
      await configs.put({
        _id: interaction.guildId,
        guildId: interaction.guildId,
        defaultRole: defaultRole.id,
      })
    } catch (e) {
      console.error(e);
    }
  },
};
