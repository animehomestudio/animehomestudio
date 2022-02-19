const { Client, Intents } = require('discord.js');
const package = require('./../../package.json');

const token = 'DISCORD_APPLICATION_TOKEN';

const client = new Client({
    intents: [
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING,
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_WEBHOOKS
    ],
    partials: [
        'MESSAGE',
        'CHANNEL',
        'REACTION'
    ],
    allowedMentions: {
        parse: [
            'users',
            'roles'
        ],
        repliedUser: true
    }
});

client.on('ready', () => {
      console.log(stripIndents`
        Identification : ${client.user.id}
        Username       : ${client.user.tag}
        Servers        : ${client.guilds.cache.size}
        Channels       : ${client.channels.cache.size}
        Users          : ${client.users.cache.size}
        Commands       : ${client.commands.size}
        Interactions   : ${client.interactions.size}
        Prefix         : ${application.prefix}
        Version        : ${package.version}
    `);

    const statuses = [
        `${client.users.cache.size} Users`,
        `${client.guilds.cache.size} Servers`
    ];

    setInterval(function() {
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity( `.help | ${status}`, { type: 'PLAYING' });
    }, 30000);
});

client.login(token);
