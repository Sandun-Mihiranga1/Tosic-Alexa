//PLUGIN BY SOURAVKL11 COPY WITH CREDIT

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'info', fromMe: false, desc: 'Shows bot information and creator info'}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = Config.LOGOSK;
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `` + Config.BOTSK + ` *BOT CREATED BY* ` + Config.PLK +`
    
    ----- ` + Config.BOTSK + ` -----
    
â­ââĪ ððĄððĒ ðððĐðððĒðĢððĨ Âŧ
ââ *áīáīáīĘáīĘ* : ` + Config.PLK + `
ââ *áīáīĘÉīáīĘ* : ĘÉŠÉīáīx
ââ *ÉŠÉīęąáīáīÉĒĘáīáī* : ` + Config.SLINK + `
ââ *OWNER* : https:/wa.me/94761905764...
â°âââââââââââââââââÛŠÛŠā―īā―ŧâđ
â ââââââââââââââââââââââââââââââââ
               ` + Config.BOTSK + `
    
    âĄ ` + Config.AFN + ` âĄ
`}) 

}));
