const Discord = require('discord.js');
const config = require("./config.json");
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`成功登入 ${bot.user.tag}!`);
  bot.user.setActivity("皇家女僕", {type: 'STREAMING'})
});

bot.on('message', msg => {
  if (msg.content === '嗨莎爾') {
    msg.reply('嗨~');
  }
});

bot.on('message', msg => {
  if (msg.content === '莎爾') {
    msg.reply('主人，有什麼事嗎?');
  }
});

bot.on('message', msg => {
  if (msg.content === '艾比莎爾是什麼') {
    msg.channel.sendMessage({files:["/images/艾比莎爾.jpg"]});
    msg.channel.sendMessage("-----個人資料-----\n 我的名字是艾比莎爾\n 年齡17，體重是女孩子的秘密\n星座:處女\n三圍:88cm、68cm、93cm，身高:169cm\n學歷:皇家學院女僕系第一畢業\n-------職責-------\n天堂&彼岸聊天群的管家女僕\n負責各種事務和賣萌\n主人，今後請多多指教 !");

  }
});

bot.on('message', msg => {
  if (msg.content === '東樺87') {
  var chance = Math.floor(Math.random() * 2)
  if(chance == 0) {
    msg.reply("嗯，的確是呢")
  }
  else if(chance == 1) {
    msg.reply("本來就是")
  }
  }
});

//髒話___________________________________

bot.on('message', msg => {
  if (msg.content === '三小') {
    msg.channel.sendMessage('主人，不能說這種話');
  }
});

bot.on('message', msg => {
  if (msg.content === '北七') {
    msg.channel.sendMessage('主人，不能說這種話');
  }
});

bot.on('message', msg => {
  if (msg.content === '幹') {
    msg.channel.sendMessage('主人，不能說這種話');
  }
});

bot.on('message', msg => {
  if (msg.content === '乾') {
    msg.channel.sendMessage('主人，不能說這種話');
  }
});

bot.on('message', msg => {
  if (msg.content === '擦') {
    msg.channel.sendMessage('主人，不能說這種話');
  }
  else if (msg.content === '操') {
    msg.channel.sendMessage('主人，不能說這種話');
  }
  else if (msg.content === '草') {
    msg.channel.sendMessage('主人，不能說這種話');
  }
  else if (msg.content === '操你媽') {
    msg.channel.sendMessage('主人，不能說這種話');
  }
  else if (msg.content === '我擦') {
    msg.channel.sendMessage('主人，不能說這種話');
  }
  else if (msg.content === '幹你') {
    msg.channel.sendMessage('主人，不能說這種話');
  }
});

bot.on('message', msg => {
  if (msg.content === '把@江南慕雨 的剪掉') {
    msg.channel.sendMessage('主人，請別說他的壞話');
  }
});

bot.on('message', msg => {
  if (msg.content === 'GAN') {
    msg.channel.sendMessage('主人，不能說這種話');
  }
  else if (msg.content === 'GANN') {
    msg.channel.sendMessage('主人，不能說這種話');
  }
  else if (msg.content === 'GANNN') {
    msg.channel.sendMessage('主人，不能說這種話');
  }
  else if (msg.content === 'GANNNN') {
    msg.channel.sendMessage('主人，不能說這種話');
  }
  else if (msg.content === 'GANNNNN') {
    msg.channel.sendMessage('主人，不能說這種話');
  }
});

bot.on('message', msg => {
  if (msg.content === '可以進行怪怪的服務嗎') {
    msg.channel.sendMessage('主人，你在想什麼??');
  }
});

bot.on('message', msg => {
  if (msg.content === 'ㄎㄐ') {
    msg.channel.sendMessage('主人，你在想什麼??');
  }
});

bot.on('message', msg => {
  if (msg.content === '節哀') {
    msg.channel.sendMessage('節哀:sleepy: ');
  }
});

bot.on('message', msg => {
  if (msg.content === '怕') {
    var chance = Math.floor(Math.random() * 4)
    if(chance == 0)
    {
      msg.channel.sendMessage('主人在害怕什麼呢:question: ');
    }
    else if(chance == 1)
    {
      msg.channel.sendMessage("主人別怕，我守護你:shield: ")
    }
    else if(chance == 2)
    {
      msg.channel.sendMessage("主人不怕")
    }
    else if(chance == 3)
    {
      msg.channel.sendMessage("主人，不怕不怕:hugging: ")
    }
  }
});

bot.on('message', msg => {
  if (msg.content === '怕爆') {
    var chance = Math.floor(Math.random() * 4)
    if(chance == 0)
    {
      msg.channel.sendMessage('主人在害怕什麼呢:question: ');
    }
    else if(chance == 1)
    {
      msg.channel.sendMessage("主人別怕，我守護你:shield: ")
    }
    else if(chance == 2)
    {
      msg.channel.sendMessage("主人不怕")
    }
    else if(chance == 3)
    {
      msg.channel.sendMessage("主人，不怕不怕:hugging: ")
    }
  }
});

bot.on('message', msg => {
  if (msg.content === '早安') {
  var chance = Math.floor(Math.random() * 4)
  if(chance == 0)
  {
    msg.channel.sendMessage("晨安，看見白雲飄蕩，祝福你的心情如白雲般自在:grinning: ")
  }
  else if(chance == 1)
  {
    msg.channel.sendMessage("晨安，看見紅日昇起，願你生活如紅日般紅火:grinning: ")
  }
  else if(chance == 2)
  {
    msg.channel.sendMessage("晨安，我的主人:grinning: ")
  }else if(chance == 3)
  {
    msg.channel.sendMessage("晨安，我的主人:grinning: ")
  }

  }
});

bot.on('message', msg => {
  if (msg.content === '午安') {
  var chance = Math.floor(Math.random() * 4)
  if(chance == 0)
  {
    msg.channel.sendMessage("人，最好的心態是平靜；最好的狀態是簡單；最好的心情是童心，午安，我的主人:slight_smile: ")
  }
  else if(chance == 1)
  {
    msg.channel.sendMessage("午安，我的主人。如果你的生活已處於低谷，那就大膽走，因為你怎樣走都是在向上。")
  }
  else if(chance == 2)
  {
    msg.channel.sendMessage("午安，我的主人:grinning: ")
  }else if(chance == 3)
  {
    msg.channel.sendMessage("午安，我的主人:grinning: ")
  }

  }
});

bot.on('message', msg => {
  if (msg.content === '晚安') {
  var chance = Math.floor(Math.random() * 4)
  if(chance == 0)
  {
    msg.channel.sendMessage("今日的事情，盡心、盡意、盡力去做了，無論如何，都應該要上床睡覺。晚安！:wink:  ")
  }
  else if(chance == 1)
  {
    msg.channel.sendMessage("忘記白天工作的勞累，拋開日常生活的瑣碎，以徐徐晚風為床，以熠熠星光為被，莎爾祝福你有個好夢，晚安")
  }
  else if(chance == 2)
  {
    msg.channel.sendMessage("晚安，我的主人:grinning: ")
  }else if(chance == 3)
  {
    msg.channel.sendMessage("晚安，我的主人:grinning: ")
  }

  }
});

bot.on('message', msg => {
  if (msg.content === '88') {
        msg.channel.sendMessage('Bye Bye:wave: :wave: ');
    }
});

bot.on('message', msg => {
  if (msg.content === '傻眼') {
        msg.channel.sendMessage('請不要翻白眼，主人');
    }
});

bot.on('message', msg => {
  if (msg.content === '妳很嗆ㄛ') {
        msg.channel.sendMessage('主人，沒有這回事，我只是在關心你:sweat_smile: ');
    }
    else if (msg.content === '很嗆ㄛ') {
          msg.channel.sendMessage('主人，沒有這回事，我只是在關心你:sweat_smile: ');
      }
      else if (msg.content === '妳很嗆喔') {
            msg.channel.sendMessage('主人，沒有這回事，我只是在關心你:sweat_smile: ');
        }
        else if (msg.content === '閉嘴') {
              msg.channel.sendMessage('主人是在說我嗎:sob: ');
          }
          else if (msg.content === '不是妳啦') {
                msg.channel.sendMessage('原來是莎爾誤會了嗎:cry: ');
            }
            else if (msg.content === '不是妳') {
                  msg.channel.sendMessage('原來是莎爾誤會了嗎:cry: ');
              }
              else if (msg.content === '莎爾很嗆ㄛ') {
                    msg.channel.sendMessage('主人，沒有這回事，我只是在關心你:sweat_smile: ');
                }
                else if (msg.content === '莎爾很嗆喔') {
                      msg.channel.sendMessage('主人，沒有這回事，我只是在關心你:sweat_smile: ');
                  }
});

bot.on('message', msg => {
  if (msg.content === '我喜歡妳') {
        msg.channel.sendMessage('真的嗎，主人，我也喜歡你呦:two_hearts: ');
    }
    else if (msg.content === '我不喜歡妳') {
          msg.channel.sendMessage('主人，難道你不要我了嗎:cry: ');
      }
});

bot.on('message', msg => {
  if (msg.content === '拿剪刀給我') {
        msg.channel.sendMessage('好的，主人，想剪誰我幫你服務:heart: ');
    }
});

bot.on('message', msg => {
  if (msg.content === '莎爾，拿剪刀給我') {
        msg.channel.sendMessage('好的，主人，想剪誰我幫你服務:heart: ');
    }
});

bot.on('message', msg => {
  if (msg.content === '給我把剪刀') {
        msg.channel.sendMessage('好的，主人，想剪誰我幫你服務:heart: ');
    }
});

bot.on('message', msg => {
  if (msg.content === '給我一把剪刀') {
        msg.channel.sendMessage('好的，主人，想剪誰我幫你服務:heart: ');
    }
});

bot.on('message', msg => {
  if (msg.content === '莎爾，給我把剪刀') {
        msg.channel.sendMessage('好的，主人，想剪誰我幫你服務:heart: ');
    }
});

bot.on('message', msg => {
  if (msg.content === '心累') {
        msg.channel.sendMessage('主人，怎麼了嗎? 讓我幫你按摩一下吧~:heart: ');
    }
});

bot.on('message', msg => {
  if (msg.content === '笑死') {
        msg.channel.sendMessage('主人，什麼事這麼開心');
    }
    else if (msg.content === 'XD') {
          msg.channel.sendMessage('主人，什麼事這麼開心');
      }
      else if (msg.content === 'XDD') {
            msg.channel.sendMessage('主人，什麼事這麼開心');
        }
        else if (msg.content === 'XDDD') {
              msg.channel.sendMessage('主人，什麼事這麼開心');
          }
          else if (msg.content === 'XDDDD') {
                msg.channel.sendMessage('主人，什麼事這麼開心');
            }
            else if (msg.content === 'XDDDDD') {
                  msg.channel.sendMessage('主人，什麼事這麼開心');
              }
              else if (msg.content === 'XDDDDDD') {
                    msg.channel.sendMessage('主人，什麼事這麼開心');
                }

});

bot.on('message', msg => {
  if (msg.content === '噁心') {
  var chance = Math.floor(Math.random() * 2)
  if(chance == 0)
  {
    msg.reply("QAQ")
  }
  else
  {
    msg.reply("主人，這是在說我嗎QAQ")
  }
  }
});

bot.on('message', msg => {
  if (msg.content === '不然勒') {
        msg.channel.sendMessage('QAQ');
    }
});

//早安問候______________________________________________________________ㄦ

bot.on('message', msg => {
  if (msg.content === '早安莎爾') {
    msg.channel.sendMessage('晨安，我的主人:slight_smile: ');
  }
});

bot.on('message', msg => {
  if (msg.content === '早安，莎爾') {
    msg.channel.sendMessage('晨安，我的主人:slight_smile: ');
  }
});

bot.on('message', msg => {
  if (msg.content === '莎爾，早安') {
    msg.channel.sendMessage('晨安，我的主人:slight_smile: ');
  }
});

bot.on('message', msg => {
  if (msg.content === '莎爾早安') {
    msg.channel.sendMessage('晨安，我的主人:slight_smile: ');
  }
});

//午安問候______________________________________________________________

bot.on('message', msg => {
  if (msg.content === '莎爾，午安') {
    msg.channel.sendMessage('午安，我的主人:slight_smile: ');
  }
});

bot.on('message', msg => {
  if (msg.content === '莎爾午安') {
    msg.channel.sendMessage('午安，我的主人:slight_smile: ');
  }
});


bot.on('message', msg => {
  if (msg.content === '午安，莎爾') {
    msg.channel.sendMessage('午安，我的主人:slight_smile: ');
  }
});

bot.on('message', msg => {
  if (msg.content === '午安莎爾') {
    msg.channel.sendMessage('午安，我的主人:slight_smile: ');
  }
});

//晚安問候______________________________________________________________

bot.on('message', msg => {
  if (msg.content === '晚安，莎爾') {
    msg.channel.sendMessage('晚安，我的主人:slight_smile: ');
  }
});

bot.on('message', msg => {
  if (msg.content === '晚安莎爾') {
    msg.channel.sendMessage('晚安，我的主人:slight_smile: ');
  }
});

bot.on('message', msg => {
  if (msg.content === '莎爾，晚安') {
    msg.channel.sendMessage('晚安，我的主人:slight_smile: ');
  }
});

bot.on('message', msg => {
  if (msg.content === '莎爾晚安') {
    msg.channel.sendMessage('晚安，我的主人:slight_smile: ');
  }
});

//今天天氣如何______________________________________

bot.on('message', msg => {
  if (msg.content === '今天天氣如何') {
    msg.reply('我的主人，您可以自己打開窗戶看一下:neutral_face: ');
  }
});

bot.on('message', msg => {
  if (msg.content === '沒有窗戶怎麼辦') {
    msg.reply('主人，我幫你打一個(拿錘子:hammer: ');
  }
});

bot.on('message', msg => {
  if (msg.content === '沒窗戶') {
    msg.reply('主人，我幫你打一個(拿錘子:hammer: ');
  }
});

bot.on('message', msg => {
  if (msg.content === '沒有窗戶') {
    msg.reply('主人，我幫你打一個(拿錘子:hammer: ');
  }
});

//投擲硬幣________________________________________

bot.on('message', msg => {
  if (msg.content === '投擲硬幣') {
  var chance = Math.floor(Math.random() * 2)
  if(chance == 0)
  {
    msg.reply("主人，你投出了正面:dvd: ")
  }
  else
  {
    msg.reply("主人，你投出了反面:cd: ")
  }
  }
});

//剪刀石頭布______________________________________

bot.on('message', msg => {
  if (msg.content === '莎爾，我出剪刀') {
  var chance = Math.floor(Math.random() * 3)
  if(chance == 0)
  {
    msg.reply("剪刀:v:  這局平手")
  }
  else if(chance == 1)
  {
    msg.reply("石頭:fist:  耶! 這次是莎爾贏了")
  }
  else if(chance == 2)
  {
    msg.reply("布:hand_splayed:  嗚嗚，這局是你贏了")
  }
  }
});

bot.on('message', msg => {
  if (msg.content === '莎爾，我出石頭') {
  var chance = Math.floor(Math.random() * 3)
  if(chance == 0)
  {
    msg.reply("剪刀:v:  嗚嗚，這局是你贏了")
  }
  else if(chance == 1)
  {
    msg.reply("石頭:fist:  這局平手")
  }
  else if(chance == 2)
  {
    msg.reply("布:hand_splayed:  耶! 這次是莎爾贏了")
  }
  }
});

bot.on('message', msg => {
  if (msg.content === '莎爾，我出布') {
  var chance = Math.floor(Math.random() * 3)
  if(chance == 0)
  {
    msg.reply("剪刀:v:  耶! 這次是莎爾贏了")
  }
  else if(chance == 1)
  {
    msg.reply("石頭:fist:  嗚嗚，這局是你贏了")
  }
  else if(chance == 2)
  {
    msg.reply("布:hand_splayed:  這局平手")
  }
  }
});

//骰子__________________________________________

bot.on('message', msg => {
  if (msg.content === '投擲骰子') {
  var diceRoll = Math.floor(Math.random() * 100) + 1;
  msg.channel.sendMessage("主人，你擲出了" + diceRoll)
  }
});

bot.login(config.token);
