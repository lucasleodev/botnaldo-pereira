//Config antiga, guardar para estudo

/*const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");*/

// Config atual
require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()

client.login(process.env.CLIENT_TOKEN)

client.on('ready', () => {
  console.log('estou pronto')
})

//Arrays com imagens
const imgs = [
  {
    ednaldo: [
      {
        image: './images/ednaldo/about.gif',
        name: 'about.gif'
      },
      {
        image: './images/ednaldo/banido.gif',
        name: 'banido.gif'
      },
      {
        image: './images/ednaldo/desbanido.gif',
        name: 'desbanido.gif'
      },
      {
        image: './images/ednaldo/invalid.gif',
        name: 'invalid.gif'
      }
    ]
  },
  {
    jokenpo: [
      {
        image: './images/jokenpo/win.gif',
        name: 'win.gif'
      },
      {
        image: './images/jokenpo/lose.gif',
        name: 'lose.gif'
      },
      {
        image: './images/jokenpo/tie.gif',
        name: 'tie.gif'
      }
    ]
  }
]

client.on('message', message => {
  const args = message.content
    .slice(process.env.PREFIX.length)
    .trim()
    .split(/ +/g)
  const command = args.shift().toLowerCase()

  if (message.author.bot) return

  if (message.content.indexOf(process.env.PREFIX) !== 0) return

  /*Código passado
    if (message.content.startsWith(process.env.PREFIX + "ping")) {
        message.channel.send("pong!");
        console.log("pongou lol");
    }*/

  //Envio de Imagens
  switch (command) {
    case 'sobre':
      img = imgs[1].ednaldo[0]
      embed = {
        title: 'Sobre o Bot 🤖',
        color: 0xf96221,
        fields: [
          {
            name: 'Versão',
            value: '0.1'
          },
          {
            name: 'Objetivo',
            value:
              'Aprender a programação de um bot no Discord e irritar o pessoal do servidor'
          }
        ],
        footer: {
          text: 'Feito com ❤️ por Lucas Xavier'
        },
        image: {
          url: 'attachment://' + img.name
        }
      }
      message.channel.send({
        embed,
        files: [
          {
            attachment: img.image,
            name: img.name
          }
        ]
      })
      break
    case 'ajuda':
      embed = {
        title: 'Ajuda ⁉',
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
        },
        fields: [
          {
            name: 'bpajuda',
            value: 'Lista de comandos do bot'
          },
          {
            name: 'bpsobre',
            value: 'Sobre o bot'
          },
          {
            name: 'bpjokenpo [pedra, papel ou tesoura]',
            value: 'Joga uma partida de jo-ken-po'
          },
          {
            name: 'bpbanido',
            value: 'Posta um gif do Ednaldo banindo'
          },
          {
            name: 'bpdesbanido',
            value: 'Posta um gif do Ednaldo desbanindo'
          }
        ]
      }
      message.channel.send({
        embed
      })
      break
    case 'banido':
      img = imgs[1].ednaldo[1]
      embed = {
        title: 'BANIDO 🤚',
        color: 0xf96221,
        image: {
          url: 'attachment://' + img.name
        }
      }
      message.channel.send({
        embed,
        files: [
          {
            attachment: img.image,
            name: img.name
          }
        ]
      })
      break
    case 'desbanido':
      img = imgs[1].ednaldo[2]
      embed = {
        title: 'DESBANIDO 👍',
        color: 0xf96221,
        image: {
          url: 'attachment://' + img.name
        }
      }
      message.channel.send({
        embed,
        files: [
          {
            attachment: img.image,
            name: img.name
          }
        ]
      })
      break
    case 'eufizumafanartpravc':
      message.channel.send('https://pnrtscr.com/kqrkc7')
      break
    /*default:
            img = imgs[1].ednaldo[3];
            embed = {
                title: "🛑COMANDO INVÁLIDO🛑",
                description: "Mais uma dessas e será banido tuntz tuntz tuntz, banido!",
                color: 16718419,
                image: {
                    url: "https://cdn.discordapp.com/attachments/827339585402437683/827355856218882074/invalidCommand.png"
                },
                image: {
                    url: "attachment://" + img.name
                }
            };
            message.channel.send({
                embed,
                files: [{
                    attachment: img.image,
                    name: img.name
                }]
            });
            break;*/
  }

  if (command === 'jokenpo') {
    iWin = false
    jokenpo = ['pedra', 'papel', 'tesoura']
    cpuChoice = jokenpo[Math.floor(Math.random() * jokenpo.length)]
    switch (args[0]) {
      case 'pedra':
        switch (cpuChoice) {
          case 'papel':
            img = imgs[3].jokenpo[1]
            embed = {
              title: 'JO-KEN-PO 🖐✌👊',
              color: 0xf96221,
              fields: [
                {
                  name: 'Sua escolha',
                  value: 'Pedra',
                  inline: true
                },
                {
                  name: 'Escolha de Botnaldo Pereira',
                  value: 'Papel',
                  inline: true
                },
                {
                  name: 'Resultado',
                  value: 'Você perdeu!'
                }
              ],
              image: {
                url: 'attachment://' + img.name
              }
            }
            message.channel.send({
              embed,
              files: [
                {
                  attachment: img.image,
                  name: img.name
                }
              ]
            })
            break
          case 'tesoura':
            img = imgs[3].jokenpo[0]
            embed = {
              title: 'JO-KEN-PO 🖐✌👊',
              color: 0xf96221,
              fields: [
                {
                  name: 'Sua escolha',
                  value: 'Pedra',
                  inline: true
                },
                {
                  name: 'Escolha de Botnaldo Pereira',
                  value: 'Tesoura',
                  inline: true
                },
                {
                  name: 'Resultado',
                  value: 'Você venceu!'
                }
              ],
              image: {
                url: 'attachment://' + img.name
              }
            }
            message.channel.send({
              embed,
              files: [
                {
                  attachment: img.image,
                  name: img.name
                }
              ]
            })
            break
          default:
            img = imgs[3].jokenpo[2]
            embed = {
              title: 'JO-KEN-PO 🖐✌👊',
              color: 0xf96221,
              fields: [
                {
                  name: 'Sua escolha',
                  value: 'Pedra',
                  inline: true
                },
                {
                  name: 'Escolha de Botnaldo Pereira',
                  value: 'Pedra',
                  inline: true
                },
                {
                  name: 'Resultado',
                  value: 'Empate!'
                }
              ],
              image: {
                url: 'attachment://' + img.name
              }
            }
            message.channel.send({
              embed,
              files: [
                {
                  attachment: img.image,
                  name: img.name
                }
              ]
            })
            break
        }
        break
      case 'papel':
        switch (cpuChoice) {
          case 'pedra':
            img = imgs[3].jokenpo[0]
            embed = {
              title: 'JO-KEN-PO 🖐✌👊',
              color: 0xf96221,
              fields: [
                {
                  name: 'Sua escolha',
                  value: 'Papel',
                  inline: true
                },
                {
                  name: 'Escolha de Botnaldo Pereira',
                  value: 'Pedra',
                  inline: true
                },
                {
                  name: 'Resultado',
                  value: 'Você venceu!'
                }
              ],
              image: {
                url: 'attachment://' + img.name
              }
            }
            message.channel.send({
              embed,
              files: [
                {
                  attachment: img.image,
                  name: img.name
                }
              ]
            })
            break
          case 'tesoura':
            img = imgs[3].jokenpo[1]
            embed = {
              title: 'JO-KEN-PO 🖐✌👊',
              color: 0xf96221,
              fields: [
                {
                  name: 'Sua escolha',
                  value: 'Papel',
                  inline: true
                },
                {
                  name: 'Escolha de Botnaldo Pereira',
                  value: 'Tesoura',
                  inline: true
                },
                {
                  name: 'Resultado',
                  value: 'Você perdeu!'
                }
              ],
              image: {
                url: 'attachment://' + img.name
              }
            }
            message.channel.send({
              embed,
              files: [
                {
                  attachment: img.image,
                  name: img.name
                }
              ]
            })
            break
          default:
            img = imgs[3].jokenpo[2]
            embed = {
              title: 'JO-KEN-PO 🖐✌👊',
              color: 0xf96221,
              fields: [
                {
                  name: 'Sua escolha',
                  value: 'Papel',
                  inline: true
                },
                {
                  name: 'Escolha de Botnaldo Pereira',
                  value: 'Papel',
                  inline: true
                },
                {
                  name: 'Resultado',
                  value: 'Empate!'
                }
              ],
              image: {
                url: 'attachment://' + img.name
              }
            }
            message.channel.send({
              embed,
              files: [
                {
                  attachment: img.image,
                  name: img.name
                }
              ]
            })
            break
        }
        break
      case 'tesoura':
        switch (cpuChoice) {
          case 'papel':
            img = imgs[3].jokenpo[0]
            embed = {
              title: 'JO-KEN-PO 🖐✌👊',
              color: 0xf96221,
              fields: [
                {
                  name: 'Sua escolha',
                  value: 'Tesoura',
                  inline: true
                },
                {
                  name: 'Escolha de Botnaldo Pereira',
                  value: 'Papel',
                  inline: true
                },
                {
                  name: 'Resultado',
                  value: 'Você venceu!'
                }
              ],
              image: {
                url: 'attachment://' + img.name
              }
            }
            message.channel.send({
              embed,
              files: [
                {
                  attachment: img.image,
                  name: img.name
                }
              ]
            })
            break
          case 'pedra':
            img = imgs[3].jokenpo[1]
            embed = {
              title: 'JO-KEN-PO 🖐✌👊',
              color: 0xf96221,
              fields: [
                {
                  name: 'Sua escolha',
                  value: 'Tesoura',
                  inline: true
                },
                {
                  name: 'Escolha de Botnaldo Pereira',
                  value: 'Pedra',
                  inline: true
                },
                {
                  name: 'Resultado',
                  value: 'Você perdeu!'
                }
              ],
              image: {
                url: 'attachment://' + img.name
              }
            }
            message.channel.send({
              embed,
              files: [
                {
                  attachment: img.image,
                  name: img.name
                }
              ]
            })
            break
          default:
            img = imgs[3].jokenpo[2]
            embed = {
              title: 'JO-KEN-PO 🖐✌👊',
              color: 0xf96221,
              fields: [
                {
                  name: 'Sua escolha',
                  value: 'Tesoura',
                  inline: true
                },
                {
                  name: 'Escolha de Botnaldo Pereira',
                  value: 'Tesoura',
                  inline: true
                },
                {
                  name: 'Resultado',
                  value: 'Empate!'
                }
              ],
              image: {
                url: 'attachment://' + img.name
              }
            }
            message.channel.send({
              embed,
              files: [
                {
                  attachment: img.image,
                  name: img.name
                }
              ]
            })
            break
        }
        break
    }
  }
})
