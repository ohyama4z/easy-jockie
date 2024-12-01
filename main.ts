import { createBot, Intents, startBot } from "./deps.ts"

const DISCORD_TOKEN = Deno.env.get("DISCORD_TOKEN") || ""
const bot = createBot({
  token: DISCORD_TOKEN,
  intents: Intents.Guilds | Intents.GuildMessages | Intents.MessageContent,
})

bot.events.messageCreate = (b, message) => {
  if (message.isFromBot) return

  if (message.content.startsWith("m!")) return

  console.log(message)

  if (
    message.content.includes("youtube.com") ||
    message.content.includes("youtu.be")
  ) {
    b.helpers.sendMessage(message.channelId, {
      content: `m!play ${message.content}`,
    })
  }
}

await startBot(bot)
