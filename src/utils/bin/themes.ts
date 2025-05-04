const availableThemes = [
  "default",
  "gruvbox",
  "nord",
  "nord-light",
  "dracula",
  "dracula-light",
  "solarized",
  "solarized-light",
  "mocha",
  "monokai",
  "paraiso",
];

export const themes = () => {
  const result = `
[!] Theme Bank Unlocked:

+ default
+ gruvbox     + monokai
+ nord        + nord-light
+ dracula     + dracula-light
+ solarized   + solarized-light
+ mocha       + paraiso

→ To activate: theme theme-name
    `;

  return result;
};

export const theme = async (
  args: string[],
  setHistory: (value: string) => void
) => {
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const showLoader = async () => {
    const stages = [
      "[=>                ] 10%",
      "[====>             ] 30%",
      "[=========>        ] 60%",
      "[===============>  ] 90%",
      "[==================] 100%",
    ];

    for (const stage of stages) {
      setHistory(stage);
      await delay(Math.floor(Math.random() * 500)); // delay between updates
    }
  };

  const name = args[0];
  if (!name)
    return "Please specify a theme. Use 'themes' to list available themes.";

  if (!availableThemes.includes(name)) {
    return `Theme ${name} is not available, Use "themes" to list available themes.`;
  }

  await showLoader();

  availableThemes.forEach((themeName) =>
    document.documentElement.classList.remove(themeName)
  );

  document.documentElement.classList.add(name);

  return `Theme "${name}" applied successfully.`;
};
