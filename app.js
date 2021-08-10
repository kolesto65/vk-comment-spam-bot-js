console.log('\x1b[35m', 'Активирую бота...');
const request = require('request-promise');  
const { VK } = require('vk-io');   
const commands = [];
let settings = require('./settings/settings.json');
const vk = new VK({	token: `${settings.main_akk}` });
const vk1 = new VK({ token: `${settings.akk1}` });
const vk2 = new VK({ token: `${settings.akk2}` });
const vk3 = new VK({ token: `${settings.akk3}` });
const vk4 = new VK({ token: `${settings.akk4}` });
const vk5 = new VK({ token: `${settings.akk5}` });
const vk6 = new VK({ token: `${settings.akk6}` });
const vk7 = new VK({ token: `${settings.akk7}` });
const vk8 = new VK({ token: `${settings.akk8}` });
const vk9 = new VK({ token: `${settings.akk9}` });
const vk10 = new VK({ token: `${settings.akk10}` });
const vk11 = new VK({ token: `${settings.akk11}` });
const vk12 = new VK({ token: `${settings.akk12}` });
const vk13 = new VK({ token: `${settings.akk13}` });
const vk14 = new VK({ token: `${settings.akk14}` });
const vk15 = new VK({ token: `${settings.akk15}` });
var position = 1;
                                        
var { updates } = vk;
                                                                    
updates.on('message', async (message) => {                                           
if(Number(message.senderId) != settings.yourId && message.peerId != settings.yourId) return;                                                             
const command = commands.find(x=> x[0].test(message.text));         
if(!command) return;                                                 
message.args = message.text.match(command[0]);                     
await command[1](message)                                           
})                                                                 
                                                                   
const cmd = {                   
    hear: (p, f) => {           
        commands.push([p, f]);  
    }                           
};

vk.api.messages.send({ peerId: settings.yourId, user_id: settings.yourId, message: 'Бот активирован, команда "коммент [айди группы] [айди поста]"', random_id: 0})
 
cmd.hear(/^(?:коммент) (.*) (.*)$/i, async(message) => {
    message.send('Выполняю...')
    let a1 = await request.get("https://fish-text.ru/get?type=title&format=json&number=1").then(x=>(JSON.parse(x).text))
    vk1.api.wall.createComment({owner_id: message.args[1], post_id: message.args[2],message: `${a1}`, guid: Math.floor(Math.random() * 99999)})
    let a2 = await request.get("https://fish-text.ru/get?type=title&format=json&number=1").then(x=>(JSON.parse(x).text))
    vk2.api.wall.createComment({owner_id: message.args[1], post_id: message.args[2], message: `${a2}`, guid: Math.floor(Math.random() * 99999)})
    let a3 = await request.get("https://fish-text.ru/get?type=title&format=json&number=1").then(x=>(JSON.parse(x).text))
    vk3.api.wall.createComment({owner_id: message.args[1], post_id: message.args[2], message: `${a3}`, guid: Math.floor(Math.random() * 99999)})
    let a4 = await request.get("https://fish-text.ru/get?type=title&format=json&number=1").then(x=>(JSON.parse(x).text))
    vk4.api.wall.createComment({owner_id: message.args[1], post_id: message.args[2], message: `${a4}`, guid: Math.floor(Math.random() * 99999)})
    let a5 = await request.get("https://fish-text.ru/get?type=title&format=json&number=1").then(x=>(JSON.parse(x).text))
    vk5.api.wall.createComment({owner_id: message.args[1], post_id: message.args[2], message: `${a5}`, guid: Math.floor(Math.random() * 99999)})
    let a6 = await request.get("https://fish-text.ru/get?type=title&format=json&number=1").then(x=>(JSON.parse(x).text))
    vk6.api.wall.createComment({owner_id: message.args[1], post_id: message.args[2], message: `${a6}`, guid: Math.floor(Math.random() * 99999)})
    let a7 = await request.get("https://fish-text.ru/get?type=title&format=json&number=1").then(x=>(JSON.parse(x).text))
    vk7.api.wall.createComment({owner_id: message.args[1], post_id: message.args[2], message: `${a7}`, guid: Math.floor(Math.random() * 99999)})
    let a8 = await request.get("https://fish-text.ru/get?type=title&format=json&number=1").then(x=>(JSON.parse(x).text))
    vk8.api.wall.createComment({owner_id: message.args[1], post_id: message.args[2], message: `${a8}`, guid: Math.floor(Math.random() * 99999)})
    let a9 = await request.get("https://fish-text.ru/get?type=title&format=json&number=1").then(x=>(JSON.parse(x).text))
    vk9.api.wall.createComment({owner_id: message.args[1], post_id: message.args[2], message: `${a9}`, guid: Math.floor(Math.random() * 99999)})
    let a10 = await request.get("https://fish-text.ru/get?type=title&format=json&number=1").then(x=>(JSON.parse(x).text))
    vk10.api.wall.createComment({owner_id: message.args[1], post_id: message.args[2], message: `${a10}`, guid: Math.floor(Math.random() * 99999)})
    let a11 = await request.get("https://fish-text.ru/get?type=title&format=json&number=1").then(x=>(JSON.parse(x).text))
    vk11.api.wall.createComment({owner_id: message.args[1], post_id: message.args[2], message: `${a11}`, guid: Math.floor(Math.random() * 99999)})
    let a12 = await request.get("https://fish-text.ru/get?type=title&format=json&number=1").then(x=>(JSON.parse(x).text))
    vk12.api.wall.createComment({owner_id: message.args[1], post_id: message.args[2], message: `${a12}`, guid: Math.floor(Math.random() * 99999)})
    let a13 = await request.get("https://fish-text.ru/get?type=title&format=json&number=1").then(x=>(JSON.parse(x).text))
    vk13.api.wall.createComment({owner_id: message.args[1], post_id: message.args[2], message: `${a13}`, guid: Math.floor(Math.random() * 99999)})
    let a14 = await request.get("https://fish-text.ru/get?type=title&format=json&number=1").then(x=>(JSON.parse(x).text))
    vk14.api.wall.createComment({owner_id: message.args[1], post_id: message.args[2], message: `${a14}`, guid: Math.floor(Math.random() * 99999)})
    let a15 = await request.get("https://fish-text.ru/get?type=title&format=json&number=1").then(x=>(JSON.parse(x).text))
    vk15.api.wall.createComment({owner_id: message.args[1], post_id: message.args[2], message: `${a15}`, guid: Math.floor(Math.random() * 99999)})
    return message.send('Готово :)')
});
console.log('\x1b[32m','Бот активирован!')
vk.updates.start().catch(console.error);
