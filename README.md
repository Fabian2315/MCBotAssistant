A simple minecraft bot designed to help with simple minecraft tasks. Currently cant really do anything too usefull.

Syntax: 
Bot.test — Sends a test reply to confirm the bot is responding. Syntax: Bot.test
Bot.come — Makes the bot walk to the player who sent the message. Syntax: Bot.come
Bot.goto <player> — Makes the bot go to and stay with the named player. Syntax: Bot.goto Steve
Bot.goto <x> <y> <z> — Makes the bot walk to a specific coordinate. Syntax: Bot.goto 100 64 -20
Bot.follow <player> — Makes the bot continuously follow the named player as they move. Syntax: Bot.follow Steve
Bot.follow.stop — Stops the current follow behavior. Syntax: Bot.follow.stop
Bot.attack <player> — Equips the best sword it has, follows the target, and attacks them. Syntax: Bot.attack Steve
Bot.pvp.stop — Stops the current PvP attack behavior. Syntax: Bot.pvp.stop
Bot.guard.here — Makes the bot guard the current position of the player who sent the command. Syntax: Bot.guard.here
Bot.guard <x> <y> <z> — Makes the bot guard a specific location and attack nearby hostile entities there. Syntax: Bot.guard 100 64 -20
Bot.guard.stop — Stops guarding the current area. Syntax: Bot.guard.stop
Bot.collect <blockType> <number> — Collects the specified block type the given number of times. Syntax: Bot.collect oak_log 5
Bot.mine <blockType> — Starts repeatedly searching for and mining the given block type until stopped. Syntax: Bot.mine coal_ore
Bot.miner.stop — Stops the mining loop. Syntax: Bot.miner.stop
Bot.autoEat — Enables automatic eating through the auto-eat plugin. Syntax: Bot.autoEat
Bot.autoEat.stop — Disables automatic eating. Syntax: Bot.autoEat.stop
Bot.eat — Forces the bot to try eating immediately. Syntax: Bot.eat
Bot.empty — Finds a nearby chest and deposits everything in the bot’s inventory into it. Syntax: Bot.empty
