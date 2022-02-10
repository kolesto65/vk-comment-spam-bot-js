console.log('\x1b[35m', 'Активирую бота...');
const request = require('request-promise');  
const { VK } = require('vk-io');  
const fs = require("fs");  
const commands = [];
let settings = require('./settings/settings.json');
let tokens = require('./settings/tokens.json');
const vk = new VK({	token: settings.main_akk });                    
var position = 1;
                                        
var { updates } = vk;
                                                                    
updates.on('message', async (message) => {                                           
if(message.peerId !== settings.yourId) return console.log('Не тот чат!');                                                             
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

vk.api.messages.send({ peerId: settings.yourId, user_id: settings.yourId, message: `Бот активирован, команды:
токен [токен, который вы получили на vkhost.github.io]
коммент [айди группы] [айди поста]`, random_id: 0})

cmd.hear(/^(?:токен)([^]+)$/i, async(message) => {
  if(tokens.find(x=> x.token == message.args[1])) return message.send('Этот токен уже есть!')
  var token = message.args[1].substring(1)
  tokens.push({ token })
  await fs.writeFileSync('./settings/tokens.json', JSON.stringify(tokens, null, '\t'));
  return message.send(`Был успешно добавлен токен ${message.args[1]}`)
})

cmd.hear(/^(?:коммент) (.*) (.*)$/i, async(message) => {
    message.send('Выполняю...')
  for (var i=0; i<tokens.length; i++) {
    let spam = new VK({	token: tokens[i].token });
    let text = await request.get("https://fish-text.ru/get?type=title&format=json&number=1").then(x=>(JSON.parse(x).text))
    await spam.api.wall.createComment({owner_id: message.args[1], post_id: message.args[2],message: text, guid: Math.floor(Math.random() * 99999)})
    }
    return message.send('Готово :)')
});
console.log('\x1b[32m','Бот активирован!')
vk.updates.start().catch(console.error);
