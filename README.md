![open-graph](https://github.com/user-attachments/assets/7dca751e-9a3b-4f48-afc9-f11004f18727)
<small>Because I hate load times (Cloudflare, ugh), and not owning my own stuff.</small>

> [!IMPORTANT]  
>  No production grade. The goal is having fun, learning, giving and eventually create a one-stop shop for me.

[Visit the demo](https://panel.remcostoeten.com)

[The design I'm working with](https://www.figma.com/community/file/1380305920742671237)


## Why and what?

This is a personal project that combines various tools and features I've built over the year and plan on building. It's intended for personal (as in, for me) use.Openly building because there aren’t many SQLite Turso references available with this stack. It's my way of figuring out how non-document/object databases work and implementing server actions and API route handlers and most important, doing what I love.

<span style="font-size:5px;">Currently, the component and core folder is a hot mess with a lot of unused code and bad organization, but this will be refactored sooner or later. My priorities lay on an MVP for certain features and mastering the back-end side. I know SOLID principles, but best practices will come when I have everything shaped the right direction.</span>

Settign up locally is straight forward
```bash
git clone https://github.com/remcostoeten/remcostoeten-all-in-one-dashboard.git remcostoeten-dashboard
cd remcostoeten-dashboard
cp .env.example .env.local
```
Fill in all the enviorments credentials. Not all are neccissary but some features won't work without. Another configuration file in `src/core/config/site-config.ts` to be renamed to your own likings. Running the project is as easy as 

```bash
bun i
#or npm , pnpm. I use pnpm or bun
bun dev
```
That should be it. IF you struggle with the turbo flag for some reason edit the dev command in `packages.json` to just `next-dev` 

## Technologies Used

- **Frontend**: NextJS 14
- **Languages**: TypeScript (TSX)
- **Styling**: TailwindCSS/Sass
- **Database**: SQLite (Turso)
- **ORM**: Drizzle ORM
- **Auth**: Clerk
- **State Management**: Zustand

## Features Done



> Besides the HOmepag and the overall structure/shell of the dashboard is the UI lacking for most tools, as I am focusing on core functionalities and thinking of what design to implement..

- **WhatsApp History Showcase** (Beta & mostly personal, dummy demo available):
  - WhatsApp chat export > txt to SQL via Python > Seed database > display paginated.
  - Favourite messages.
  - Search messages.
  - Admin protect certain chats.
  - For more info or instructions in the [setup guide](https://github.com/remcostoeten/remcostoeten-all-in-one-dashboard/blob/main/src/core/scripts/whatsapp-readme.md).

- **Color Helper Tool**:
  - **Convert Colors**: RGB to Hex, HSL to Hex, and vice versa.
  - **Nearest Color**: Find the closest color in a given palette.
  - **Save to Palette**: Save colors to a custom palette.
  - **Auto CSS/Tailwind Syntax**: Generate CSS variables and Tailwind syntax.
  - **Contrast Ratio Check**: Verify color contrast ratios for accessibility.

- **Diff Checker**:
  - **Compare Files**: See differences between files with syntax highlighting.
  - **Keyboard Macros**: Implement macros for quick operations.
  - **Local Storage**: Save diff results and input to local storage.
  - **Database Integration**: Save comparison results (input A + B and the result) to the database.

- **Kanban Planner**:
  - Data via fakers, no CRUD yet.

- **Gas Station Tool**:
  - **Search and Add KM Range**: Search for gas stations and specify a kilometer range.
  - **Cheapest Fuel Prices**: Display the cheapest fuel prices within the specified range.

## Features to Migrate

These are tools I've built in the past and plan to integrate into this project:

- **(Reverse) Geolocation Tool**: Input address/longitude/latitude, and get the opposite. Save to database.
- **Compare Two Longitudes/Latitudes**: Calculate the skywide distance between two points.
- **HTML to JSX/TSX Converter**: Convert HTML code to JSX/TSX.
- **Blackjack Perfect Strategy Helper**: Tool for learning and applying perfect blackjack strategies.
- **Chromedriver WhatsApp Status Scraper**: Scrape WhatsApp statuses using Chromedriver.
- **Budget Tracker/Future Expense Tool**: Track budget and forecast future expenses.
- **URL Extract Tool**: Extract, mutate, open big pieces of text 
- **CSS Bezier Curve Helper Showcase Tool**
- **SVG to Pseudo Element Tool**
- **SVG to React Component Tool**
- **Password Manager**

## Tools to Build

- **Notes App with MDX Support via Frontend**:
  - Share/invite collaboration.
  - Password protect.
  - History.
  - Folders/categories.

- **File Vault Storage**:
  - Proper security.
  - All CRUD options + metadata.
  - Rate limit.

- **Keep Myself Accountable App**:
  - How, I don’t know yet.

- **Automated Release Note System**

- **A Way to Share/Organize/Sync/Tweak My Custom Bash Scripts and ZSH Configuration**

- **A Way to Switch Between Completely Different Designs UI Wise**:
  - Not just variables.

- **Custom CMS in the Frontend, Hosted in My Own Database**

Some inspiration regarding used repositories, handy packages which I might implement or cool designs are documented [here](https://github.com/remcostoeten/remcostoeten-all-in-one-dashboard/blob/main/INSPIRATION.MD).


## 💖 Like My Work?

I appreciate a star aka e-karma. If you have any questions, you can reach out through:
[LinkedIn](https://linkedin.com/in/remco-stoeten/), email: [remcostoeten@hotmail.com](mailto:remcostoeten@hotmail.com), or visit my personal site: [remcostoeten.com](https://remcostoeten.com).
