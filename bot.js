const Discord = require('discord.js');
const { token } = require('./token.json');
const client = new Discord.Client();

// 連上線時的事件
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    game = Discord.Game('努力學習跟各位大大說安安中');
    client.change_presence(status=Discord.Status.idle, activity=game);
});

// 當 Bot 接收到訊息時的事件
client.on('message', msg => {
    // 如果訊息的內容是 'ping'
    if (msg.content === '安安') {
        // console.log(msg.user)
        // 則 Bot 回應 'Pong'
        msg.reply('大大安安');
    }
});

client.login(token);