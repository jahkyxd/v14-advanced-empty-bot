import {
    Client,
    GatewayIntentBits,
    Collection,
} from "discord.js";
import logger from "./logger.js";
import config from "../../config.js";
import db from "./Database/index.js";

class Jahky extends Client {
    constructor() {
        super({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildBans,
                GatewayIntentBits.GuildEmojisAndStickers,
                GatewayIntentBits.GuildMembers,
            ],
        });
        this.commands = new Collection();
        this.aliases = new Collection();
        this.config = global.config = config;
        global.system = this;
        this.logger = logger;
        this.reply = reply;
        this.db = global.db = db;
    }
}

export default Jahky;
