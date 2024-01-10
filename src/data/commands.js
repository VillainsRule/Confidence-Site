export default {
    blacket: {
        badge: {
            description: 'Get the info on a badge.',
            syntax: 'badge (name)',
            note: 'Leave name blank for a list of badges.',
            alias: 'badges'
        },
        bazaar: {
            description: 'Get the Blook or user info from the Bazaar.',
            syntax: 'bazaar [subcommand] [arguments]',
            note: 'Run /bazaar for a list of subcommands.',
            alias: ''
        },
        blook: {
            description: 'Get the info on a blook.',
            syntax: 'blook (name)',
            note: 'Leave name blank for a random Blook.',
            alias: ''
        },
        blooks: {
            description: 'Get the blooks of a user.',
            syntax: 'blooks (username)',
            note: 'Leave the username blank for yourself.',
            alias: ''
        },
        gamelb: {
            description: 'Get everything you need from the leaderboard, without leaving chat.',
            syntax: 'gamelb [tokens or exp]',
            note: '',
            alias: ''
        },
        missingblooks: {
            description: 'Get the missing blooks of a user.',
            syntax: 'missingblooks (username)',
            note: 'Leave the username blank for yourself.',
            alias: 'missing'
        },
        news: {
            description: 'Get the game news.',
            syntax: 'news (index)',
            note: 'Leave the index blank for the most recent post.',
            alias: ''
        },
        pack: {
            description: 'Get the info on a pack.',
            syntax: 'pack (name)',
            note: 'Leave the pack name blank for a list.',
            alias: 'packs'
        },
        rarity: {
            description: 'Get the info on a rarity.',
            syntax: 'rarity (name)',
            note: 'Leave the rarity name blank for a list.',
            alias: 'rarities'
        },
        user: {
            description: 'Dig deep into a user\'s stats.',
            syntax: 'user (username)',
            note: 'Leave the username blank for yourself.',
            alias: 'stats'
        },
        value: {
            description: 'Get the value of a Blook',
            syntax: 'value (blook name)',
            note: 'Leave the blook name blank for a value list link.',
            alias: 'values'
        }
    },
    bot: {
        commandlb: {
            description: 'Get a leaderboard of the most commands ran per-user.',
            syntax: 'commandlb',
            note: '',
            alias: 'cmdlb'
        },
        help: {
            description: 'Get some help...',
            syntax: 'help',
            note: '',
            alias: 'commands'
        },
        links: {
            description: 'Get some helpful links.',
            syntax: 'links',
            note: '',
            alias: ''
        },
        mylogs: {
            description: 'Get a list of warnings and stats on your ban.',
            syntax: 'mylogs',
            note: '',
            alias: ''
        }
    },
    currency: {
        achievement: {
            description: 'Get a user\'s, or your, achievements.',
            syntax: 'achievements (username)',
            note: 'Leave the username blank for yourself.',
            alias: 'ach'
        },
        balance: {
            description: 'Get a user\'s, or your, balance.',
            syntax: 'balance (username)',
            note: 'Leave the username blank for yourself.',
            alias: 'bal'
        },
        bet: {
            description: 'Take a bet on some coins.',
            syntax: 'bet [amount]',
            note: 'The logic behind this command is not miscoded.',
            alias: ''
        },
        coinlb: {
            description: 'Get the top 3 people with cash.',
            syntax: 'coinlb',
            note: '',
            alias: ''
        },
        crime: {
            description: 'Attempt to commit a crime - can you get away with the cash?',
            syntax: 'crime',
            note: '1/2 standard success rate; 3k-10k gain; 2k-5k loss.',
            alias: ''
        },
        daily: {
            description: 'Get a sum of money every day.',
            syntax: 'daily',
            note: '125k-150k gain.',
            alias: ''
        },
        deposit: {
            description: 'Deposit coins to your bank.',
            syntax: 'deposit [amount]',
            note: 'The bank is unrobbable. Always deposit.',
            alias: 'dep'
        },
        give: {
            description: 'Be a kind, giving person.',
            syntax: 'give [user] [amount]',
            note: 'Originally had been replacement of friends, reverted back.',
            alias: ''
        },
        highlow: {
            description: 'Is the number higher or lower?',
            syntax: 'highlow',
            note: '',
            alias: 'hl'
        },
        inventiry: {
            description: 'Get a list of items someone has.',
            syntax: 'inventory [user]',
            note: 'Leave the username blank for yourself.',
            alias: 'inv'
        },
        item: {
            description: 'Get the info on an item.',
            syntax: 'item [name]',
            note: '',
            alias: ''
        },
        itemlb: {
            description: 'Get the leaderboards holding the person with the most of each item.',
            syntax: 'itemlb',
            note: '',
            alias: ''
        },
        lottery: {
            description: 'Join and view information about our lottery.',
            syntax: 'lottery [subcommand]',
            note: 'Run the command to get a list of subcommands.',
            alias: 'lotto'
        },
        rob: {
            description: 'Steal from a user.',
            syntax: 'rob [user]',
            note: '1/2 success rate; max gain of 420k.',
            alias: 'steal'
        },
        steal: {
            description: 'A newer grind command allowing you to earn a larger sum of cash.',
            syntax: 'search',
            note: '2/5 standard success rate; 4.5k-12.5k gain; no loss.',
            alias: ''
        },
        settings: {
            description: 'Control your currency settings.',
            syntax: 'settings',
            note: '',
            alias: 'Holds passive settings'
        },
        store: {
            description: 'Buy a couple active items from the store.',
            syntax: 'store',
            note: '',
            alias: 'shop'
        },
        use: {
            description: 'Use an item to trigger a luck booster.',
            syntax: 'use [item] [added arguments]',
            note: 'Run /use for a list of items. Boosts can be good or bad.',
            alias: ''
        },
        weekly: {
            description: 'Get a hefty sum of money every week.',
            syntax: 'store',
            note: 'Requires you to pay a one-time fee of 1,000,000 coins to unlock.',
            alias: ''
        },
        withdraw: {
            description: 'Withdraw coins to your pocket.',
            syntax: 'deposit [amount]',
            note: 'The pocket is robbable, but you must withdraw to spend or share.',
            alias: 'with'
        },
        work: {
            description: 'Gives you some guaranteed cash.',
            syntax: 'work',
            note: '2/3 standard success rate; 1.5k-7.5k gain; no loss.',
            alias: ''
        }
    },
    fun: {
        ban: {
            description: 'Pretend to ban a user.',
            syntax: 'ban [user] (reason)',
            note: 'THIS IS FAKE. Please quit freaking out when a user runs this on you.',
            alias: ''
        },
        hack: {
            description: 'Hack a user (REAL)',
            syntax: 'hack [user]',
            note: 'This is fake, just like /ban.',
            alias: ''
        },
        pp: {
            description: 'Check a user\'s pp size.',
            syntax: 'pp (username)',
            note: 'Leave the username blank for yourself.',
            alias: ''
        },
        rizz: {
            description: 'Check a user\'s rizz (out of 69).',
            syntax: 'rizz (username)',
            note: 'Leave the username blank for yourself.',
            alias: ''
        },
        ship: {
            description: 'See how well two users match.',
            syntax: 'ship [first user] [second user]',
            note: 'Now includes an image!',
            alias: ''
        }
    },
    games: {
        c4: {
            description: 'Play Connect 4, in chat, against someone else.',
            syntax: 'c4 [subcommand]',
            note: 'Run /c4 to get a list of subcommands.',
            alias: 'con'
        },
        rps: {
            description: 'Play Rock Paper Scissors against me.',
            syntax: 'rps [your choice]',
            note: 'I decided to be nice and don\'t cheat anymore.',
            alias: ''
        }
    },
    utility: {
        math: {
            description: 'Solve a math equation.',
            syntax: 'math [equation]',
            note: '',
            alias: ''
        },
        random: {
            description: 'Get a random string or number.',
            syntax: 'random [subcommand]',
            note: 'Run the command for more info.',
            alias: ''
        }
    }
};