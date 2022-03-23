const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://telegra.ph/file/f6ec3d3d845a1e3dcce39.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Alexa bot created by Sandun Mihiranga*
*Creator number : wa.me/94761905764?text=Hi%20Sandun%20Mods.%20*

*Githublink :    https://github.com/Sandun1Mihiranfa/Toxic-Alexa*

*Audio commads :   https://github.com/Sandun-Mihiranga1/Tosic-Alexa*

*Sticker commads : coming soon*

*My channel link : https://youtube.com/channel/UC037iLQeTNabeDrF5qJxP9g* 

*For More Updates Subscribe The Channel ☝*
`}) 

}));
