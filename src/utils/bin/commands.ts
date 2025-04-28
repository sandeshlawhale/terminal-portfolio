import * as bin from "./index";
import config from "../../../config.json";

export const help = () => {
  let c = "";
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + "\n";
    } else {
      c += Object.keys(bin).sort()[i - 1] + " ";
    }
  }
  return `here is the available commands that u can try  \n${c}`;
};

export const banner = () => {
  return `
  Welcome to the terminal portfolio of

  ███████╗ █████╗ ███╗   ██╗██████╗ ███████╗███████╗██╗  ██╗    ██╗      █████╗ ██╗    ██╗██╗  ██╗ █████╗ ██╗     ███████╗
  ██╔════╝██╔══██╗████╗  ██║██╔══██╗██╔════╝██╔════╝██║  ██║    ██║     ██╔══██╗██║    ██║██║  ██║██╔══██╗██║     ██╔════╝
  ███████╗███████║██╔██╗ ██║██║  ██║█████╗  ███████╗███████║    ██║     ███████║██║ █╗ ██║███████║███████║██║     █████╗  
  ╚════██║██╔══██║██║╚██╗██║██║  ██║██╔══╝  ╚════██║██╔══██║    ██║     ██╔══██║██║███╗██║██╔══██║██╔══██║██║     ██╔══╝  
  ███████║██║  ██║██║ ╚████║██████╔╝███████╗███████║██║  ██║    ███████╗██║  ██║╚███╔███╔╝██║  ██║██║  ██║███████╗███████╗
  ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝    ╚══════╝╚═╝  ╚═╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝ portfolio@sandeshlawhale
                                                                                                                          
  
  
  Type 'help' to see the list of available commands.
  Type 'sumfetch' to display summary.
  Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
  `;
};
