const Discord = require('discord.js');

const client = new Discord.Client();

// 連上線時的事件
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    // game = Discord.Game('努力學習跟各位大大說安安中');
    // client.change_presence(status=Discord.Status.idle, activity=game);
});

// 當 Bot 接收到訊息時的事件
client.on('message', msg => {
    // 如果訊息的內容是 'ping'
    if (msg.content === '安安') {
        // console.log(msg.user)
        // 則 Bot 回應 'Pong'
        msg.reply('大大安安');
    }
    else if (msg.content === '麒麟哥閉嘴') {
        // console.log(msg.user)
        // 則 Bot 回應 'Pong'
        msg.reply('你這樣讓我很沒面子');
    }
    else if (msg.content === '不爽退團阿') {
        // console.log(msg.user)
        // 則 Bot 回應 'Pong'
        msg.reply('老子直接退吞！歐氣氣氣氣氣');
    }
    else if (msg.content === '我可以怎麼嗆你') {
        // console.log(msg.user)
        // 則 Bot 回應 'Pong'
        msg.reply('你可以回答 \n 麒麟哥閉嘴 \n 不爽退團阿 \n 這兩個指令來嗆我，如果打安安我會跟你問安歐:D');
    }
});

client.login("MTA5NzA5MjYzMzQ1ODkyMTUxMg.GaWnAo.rm41sFBCqY52g_v-YhKvjiyMBGyHCGDCnV3l8M");