# Terminal Portfolio
A Terminal-inspired personal portfolio, built with Next.js, Tailwind CSS, and TypeScript.
Inspired by [LiveTerm]().
Experience my world directly through Retro Style — because who said portfolios need to be mordern?

## Features
 - Fully Responsive Terminal Interface
 - Custom Commands (type "help" to start)
 - Command History with keyboard navigation
 - Auto-scroll & Overflow Handling for large outputs
 - Dark Theme by default
 - Easy to Customize with your own commands and content

## Project Structure
```bash
├── public/          # Static assets
├── src/
│   ├── components/  # React components (Input, History, etc.)
│   ├── utils/
│   │   ├── bin/     # All command handlers (about, projects, etc.)
│   │   └── commands.ts # List of available commands
│   ├── pages/       # Next.js pages (_app.tsx, index.tsx)
├── README.md
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

## Technologies Used
 - Next.js - Framework
 - Tailwind css - Css Utility
 - TypeScript - for type Safety
 - Vercel - for easy deployment

## Installation
1. clone the repo:
```bash
git clone https://github.com/sandeshlawhale/terminal-portfolio.git
```

2. Navigate into the project directory
```bash
cd terminal-portfolio
```

3. Install dependencies
```bash
npm install
# or
yarn install
```

4. start the development server:
```bash
npm run dev
# or
yarn dev
```

## Customization
 - Modify available commands in `src/utils/bin/`
 - Edit the theme colors via `tailwind.config.ts` (dark theme by default)

## Future Improvements
 - Auto Suggestions like real terminal
 - Theme toggler
 - animated bg
 - Easter Eggs/ secret commands

## Acknowledgements
 - inspired heavily by LiveTerm.

## License
This Project is licensed under the [MIT License](LICENSE).

---

Made with <3 by Sandesh Lawhale

## Quick Ending Note
> This isn't just a **portfolio** - it's a playground.
> Type your way into my **world**
