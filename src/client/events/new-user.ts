import { Client } from "discord.js";
import { configs } from "../../store";

export default function (client: Client) {
    console.log("Registering ne user event");
    client.on("guildMemberAdd", async (member) => {
        console.log(`New user "${member.user.tag}" has joined "${member.guild.name}"`);
        const config = await configs.get(member.guild.id);
        if (!config) return;
        
        member.roles.add(config.defaultRole);
    });
}