import * as bin from "./index";
import config from "../../../config.json";

// help cmd to display all command
export const help = () => {
  let c = "";
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + "\n";
    } else {
      c += Object.keys(bin).sort()[i - 1] + " ";
    }
  }
  return `here is the available commands that u can try \n\n${c}`;
};

// to display info about me
export const about = () => {
  const prompt = [
    `Sandesh Lawhale here — coding enthusiast, anime dreamer, and speed chaser.

I build dynamic web apps with React, Node.js, and MongoDB, while constantly exploring new worlds — both virtual and real.
Between coding marathons, you'll catch me speeding down highways, leveling up in games, or getting lost in anime adventures.
The grind never stops — whether it's XP, projects, or life itself. 
`,
    `Hey, I'm Sandesh Lawhale — a developer who loves to code, ride, game, and dive into anime worlds.

Crafting web apps with the MERN stack, experimenting with Next.js, and learning new tech every day.
When not coding, you’ll find me riding my bike through open roads, racing virtual streets, battling bosses, or binge-watching epic anime sagas.
Always leveling up — in code, in games, on the road, and in life. 
  `,
    `Name's Sandesh Lawhale — full-stack developer by profession, gamer and anime fan by obsession.
    
I spend my days architecting apps, my nights conquering bosses, and my weekends cruising on two wheels.
Building with MERN stack and fueled by a passion for stories — digital or animated.
Code hard, ride fast, game on.
`,
    `Hey there, I'm Sandesh — someone who finds creativity at the intersection of code, bikes, games, and anime.

From crafting full-stack web projects to racing under open skies, I'm always chasing the next adventure.
Whether it's building apps, leveling up characters, or exploring anime worlds — it's all part of the journey.
Keep pushing. Keep riding. Keep creating. 

`,
  ];
  const randomIndex = Math.floor(Math.random() * prompt.length);
  return prompt[randomIndex];
};

// my socials links
export const socials = async () => {
  let result = "📁 Socials:\n";

  config.socials.forEach((social) => {
    const emoji = "🔗";
    result += `- ${emoji} ${
      social.name
    }: <u><a class="text-blue underline" href="${
      social.link
    }" target="_blank">${social.link.replace(/^https?:\/\//, "")}</a></u>\n`;
  });

  return result;
};

export const email = () => {
  window.open(`mailto:${config.email}`);
  return "Opening mail...";
};

export const github = () => {
  const result = config.socials.find(
    (link) => link.name.toLowerCase() === "github"
  );
  if (!result) return `Failed to open the link, Try "socials".`;
  window.open(result?.link);
  return "Opening the GitHub Link...";
};

export const linkedin = () => {
  const result = config.socials.find(
    (link) => link.name.toLowerCase() === "linkedin"
  );
  if (!result) return `Failed to open the link, Try "socials".`;
  window.open(result?.link);
  return "Opening the GitHub Link...";
};

export const instagram = () => {
  const result = config.socials.find(
    (link) => link.name.toLowerCase() === "instagram"
  );
  if (!result) return `Failed to open the link, Try "socials".`;
  window.open(result?.link);
  return "Opening the GitHub Link...";
};

// link of this terminal portfolio repo
export const repo = () => {
  window.open(config.repo);
  return "Opening the repo...";
};

// link to resume
export const resume = () => {
  window.open(config.resume);
  return "Opening resume...";
};

// link to projects
export const projects = () => {
  let result = `These are some of my recent projects that I'm proud of...\n\n`;
  config.projects.map((project) => {
    result += `-  ${project.name}: <u><a class="text-blue underline" href="${
      project.link
    }" target="_blank">${project?.link?.replace(/^https?:\/\//, "")}</a></u>\n`;
  });

  return `${result}\nIf you want to see more of my projects you can check out on my GitHub by searching "github"`;
};

// skills
export const skills = () => {
  let output = "Skills & Technologies that I use on my daily basis:\n\n";

  config.skills.forEach((skillCategory) => {
    output += `${skillCategory.title}:\n`;
    skillCategory.items.forEach((item) => {
      output += `  • ${item}\n`;
    });
    output += `\n`; // add extra line after each category
  });

  return `${output}Looking Forward to add more...`;
};

// experience section
export const experience = () => {
  let result = `\n`;
  config.exp.map(
    (exp) =>
      (result +=
        `<span class="text-gray">${exp.role}</span> @ ${exp.company}\n${exp.period}\n` +
        exp.bullets.map((bullet) => `- ${bullet}`).join("\n") +
        `\n\n`)
  );
  return result;
};

// education
export const education = () => {
  let result = "";

  config.education.forEach(
    (item) =>
      (result += `\n<p class="text-gray">${item.degree}</p>${
        item.institution
      } (${item.duration})\n${item.highlights
        .map((point) => `• ${point}`)
        .join("\n")}
      `)
  );

  return result;
};

// anime
export const anime = () => {
  let result = "";

  const art = [
    `⠐⣪⡑⣤⣶⣶⣶⣦⡔⣩⡒⠀
⢸⣯⣾⣿⢏⣿⣏⢿⣿⣮⣿⠀
⢸⣿⢸⡗⣶⠙⢱⡖⣿⢸⣿⠀
⢸⡿⠀⠳⣄⣐⣂⡴⠃⠸⣿⠀
⣾⠃⠀⡵⡔⠕⠕⡰⡅⠀⢻⡆
⢹⡆⠘⢴⠙⠑⠉⢳⡱⠀⣾⠁
⠊⠀⠀⠈⡖⡖⡖⡎⠀⠀⠈⠂
⠀⠀⠀⠀⠉⠁⠉⠁⠀⠀⠀⠀`,
    `⣛⣛⣛⣛⣛⣛⡛⠻⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣦⣭⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣛⣛⣉⣉⣉⣙⣛⣛⣛⣛⣛⡛⠛⠿⠿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡿⣻⡽⠟⠒⠒⠪⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣛⣿⣿⣿⣛⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣶⣶⣶⣶⣶⣶
⣿⣿⡿⣣⠌⠁⢀⣤⠀⠀⠀⠙⢟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⠛⠛⠛⠛⠛⠛⠛⠛⠛⠲⠿⠙⣙⣻⠿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣟⠻⠂⠀⣴⣿⢏⡀⠀⠀⠀⠀⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⢀⣤⣤⢀⣀⠀⠀⠀⠀⠀⠀⠈⠉⠀⠾⠽⠛⢻⣿⣿⣿⣿⣿⣿
⡌⠉⠃⠀⣼⣿⡿⣘⣛⡣⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⣠⣾⣿⣿⣿⢸⣿⠿⢷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣾⣯⣿⠿⣿⣿
⣿⣦⣄⠀⣿⣿⣿⣿⣿⣿⡆⠀⠀⢢⡀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⢀⣴⣿⣿⣿⣿⣟⣼⣾⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⢀⣴⣿⣿
⣿⣿⣿⣦⢻⣿⣿⣿⣿⣿⡇⠀⠀⢼⡃⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⢰⣶⣶⣄⠀⢀⣴⣿⣿⣿⣿
⣿⣿⣿⣿⡏⣿⣿⣏⢭⣵⣄⣀⣴⣯⢃⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⣿⣿⣿⣿⠀⣸⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣇⠸⢿⣿⣮⡻⣿⣿⣿⢟⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡩⣟⣛⣛⣫⣦⣄⣀⣴⣎⢮⡻⣿⡟⣠⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣷⣶⣭⣭⣄⣉⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⢻⣿⣿⣿⣿⣿⣿⣿⣿⣞⡿⢊⣼⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣙⠿⣿⣿⣿⣿⣿⡿⠛⢠⣶⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣶⣶⣦⣤⣬⣭⣍⣀⡲⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
`,
    `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿
⡇⣶⠆⣴⣶⡶⢠⡖⡴⣴⠂⢄⣒⡂⡶⣐⣒⣒⣒⡂⢲⡆⢲⣦⠐⣶⣶⣶⣶⣶⠀⡔⣶⣶⣶⡶⢠⣶⡀⡆⣶⡶⠶⡀⢢⢶⡖⡀⠄⡲⣶⣶⣖⡆⠠⢰⣶⣆⢶⡄⢲⢸
⡇⡟⡆⣿⣿⡇⣾⠃⣿⠃⢢⣿⣿⡇⣧⣿⣿⣿⣿⣷⡀⣿⢠⢻⣆⠜⣿⣿⣯⣿⡇⢧⢻⠛⣿⢃⣾⣿⡅⢧⣶⣿⣿⣿⣔⠕⠳⢳⡌⢄⠙⣿⣿⡼⢂⢃⢿⣿⡜⡇⣇⢸
⡇⢇⡇⣿⣿⠀⣿⠸⡟⢀⣿⣿⣿⣇⢸⣿⣿⣿⣿⣿⣧⡸⣇⣧⢿⣄⠸⣿⣿⣻⣿⢸⡜⡤⣿⢸⣿⣿⠇⣸⣿⣿⣿⣿⣿⣧⣻⡄⢿⣄⠄⠘⣿⣿⣼⡘⢸⣿⡇⡇⢸⢸
⡇⢸⡇⠟⣿⠀⡟⠀⢁⣾⣿⡿⢿⣛⡸⠿⠯⠿⣿⣛⡿⣷⣝⢞⢷⡙⢦⠈⢿⣿⣿⡀⣷⡄⠞⣾⣿⡿⣰⣿⣿⣿⡿⣿⣻⠿⠯⠿⠦⣝⢳⠄⠈⢿⡆⡇⢺⣿⡇⣇⢸⢸
⡇⢸⡇⠠⣿⡀⡇⢀⣿⠿⠉⠈⠁⢀⣀⠀⠀⠀⠀⠀⠉⠓⢿⣯⣏⠻⣦⣕⠄⠙⢿⣧⠘⣿⣦⣻⣿⣿⣿⣿⣿⠗⠋⠁⠀⣀⠀⠀⠀⠀⠀⠉⠐⠀⠃⡃⢸⣿⡇⢸⢸⣸
⡇⡘⣿⠀⢺⡇⠃⢈⠁⠀⢠⣴⠀⣬⡍⠀⠀⠀⢠⣦⠀⣤⡐⢌⢿⣷⣬⣻⢷⣥⣀⠘⠳⡘⣿⣿⣿⣿⣿⠟⠅⣠⡔⢀⣬⡅⠀⠀⠀⣰⣦⠰⣤⠀⠀⠁⢸⡿⢀⡟⣿⢸
⡇⡇⣿⡆⠈⢿⡀⢾⣿⣄⠸⣿⠸⣿⣧⠀⠀⢀⣾⣯⠶⢿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣶⣬⣌⣻⣿⣿⣿⣿⣴⣿⣧⢸⣿⣇⠀⠀⣠⣿⡷⠶⡟⢀⣾⠃⣾⠃⣼⠃⣿⢸
⡇⣇⠿⣷⠐⡌⢧⠸⣿⣿⣷⢽⠣⠹⢿⣿⣿⡿⠿⢋⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡂⠹⠿⣿⣿⣿⠿⠣⣪⢵⣿⠇⣸⠃⢠⡟⣰⣿⢸
⡇⣿⢠⣿⡇⢹⡆⢣⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣴⠁⢰⢸⢱⢸⣿⢸
⡇⣿⡼⢹⣿⡀⢻⣮⡂⠻⣿⣿⣿⡿⣽⣟⡾⣷⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣻⢯⡿⣽⣿⣿⠟⠑⢠⡆⠐⠇⠎⣾⣿⢸
⣷⣶⣶⣶⣶⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣶⣶⣶⣶⣶⣶⣾
`,
    `⠀⠀⠀⠀⠀⠀⢀⣤⣶⣶⣖⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣾⡟⣉⣽⣿⢿⡿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢠⣿⣿⣿⡗⠋⠙⡿⣷⢌⣿⣿⠀⠀⠀⠀⠀⠀⠀
⣷⣄⣀⣿⣿⣿⣿⣷⣦⣤⣾⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀
⠈⠙⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⢀⠀⠀⠀⠀
⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠻⠿⠿⠋⠀⠀⠀⠀
⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⡄
⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⢀⡾⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣷⣶⣴⣾⠏⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠛⠋⠁⠀⠀⠀
`,
  ];

  config.anime.forEach((anim) => {
    result += ` - ${anim}\n`;
  });

  const artIndex = Math.floor(Math.random() * art.length);

  return `<div class="flex gap-10"><div>${art[artIndex]}</div><div>Here’s the anime that lives rent-free in my heart:\n\n${result}\nList is more than this if u wanna find out feel free to reach out!</div></div> `;
};

// game
export const games = () => {
  let result = "";

  const art = [
    `⠀⠀⠀⠀⠀⢀⣤⣤⣤⣤⣤⣤⣄⠀⠀⠀
⠀⠀⠀⠀⢰⡿⠁⠀⢀⣀⣀⣈⣻⣷⡄⠀
⠀⠀⠀⢀⣿⠁⠀⣸⢿⠉⠉⠉⠉⠉⠻⣆
⠀⣶⡟⠛⡟⠀⠀⢻⡄⠀⠠⠀⠀⠀⠀⣿
⠀⣿⠀⢸⡇⠀⠀⠈⠻⢶⣤⣤⡶⠶⣿⡇
⢠⣿⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡇
⠸⣿⠀⠘⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡇
⠀⢿⣦⣀⣇⠀⠀⠀⢀⣀⣀⣀⠀⢀⣿⠃
⠀⠀⠈⠉⣿⠀⠀⠀⣿⡏⣿⠉⠀⢸⣿⠀
⠀⠀⠀⠀⢿⣦⣤⣤⡿⠁⠙⠷⠶⠾⠃⠀
⠀⠀⠀⠀⠀⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀`,
    `⠀⠀⠀⠀⠀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⠀⠀⠀⠀⠀
⠀⠀⠀⣠⣾⣿⣿⣿⣦⣄⡀⠀⠀⢀⣠⣴⣿⣿⣿⣷⣄⠀⠀⠀
⠀⠀⣼⣿⣿⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⠉⣹⣿⣧⠀⠀
⠀⣼⣿⣉⣉⠀⣉⣙⣿⣿⣿⣿⣿⣿⣿⣟⠁⣹⣿⣏⠀⣹⣧⠀
⢠⣿⣿⣿⣿⣀⣿⣿⣿⣉⣉⣿⣿⣉⣹⣿⣿⣏⠀⣹⣿⣿⣿⡄
⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
⢸⣿⣿⣿⣿⣿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣿⣿⣿⣿⣿⡇
⠸⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⣿⣿⠇
⠀⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠀`,
  ];

  config.games.forEach((game) => {
    result += ` - ${game}\n`;
  });

  const gameIndex = Math.floor(Math.random() * art.length);

  return `<div class="flex gap-10"><div>${art[gameIndex]}</div><div>Checkpoint reached: My favorite games!\n\n${result}\n\nMore Adding Soon...</div></div> `;
};

// contact
export const contact = () => {
  return `If you want to build a website or just want to talk about Anime, Game or Riding feel free to connect\n\n - Email: <u><a class="text-blue underline" href="
    mailto:${config.email}" target="_blank">${config.email}</a></u>\n\nFor more social link try "Socials".`;
};

// signature
export const signature = () => {
  const prompts = [
    `reward += 1 for visiting my portfolio

Agent: Sandesh Lawhale
Role: Full-Stack Developer, RL Enthusiast
State: Coding || Learning || Building
`,
    `┌─[Sandesh@terminal-portfolio]─[Full Stack Developer]
└──╼ # echo "Coding is not just syntax; it's thinking in logic."
`,
    `Sandesh Lawhale
Full-Stack Developer | MERN Stack | Firebase | React | Node.js
"Code. Create. Connect."
`,
  ];

  const randomIndex = Math.floor(Math.random() * prompts.length);

  const result = `${prompts[randomIndex]}\n&copy; 2025 by @${config.ascii}`;

  return result;
};

// Gui to switch to mordern profile
export const gui = () => {
  window.open(config.site);
  return "opening GUI...";
};
