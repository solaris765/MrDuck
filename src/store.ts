import * as PouchDB from 'pouchdb';

interface GuildConfig {
    _id: string,
    guildId: string,
    defaultRole: string,
}

export const configs = new PouchDB<GuildConfig>('configs')

