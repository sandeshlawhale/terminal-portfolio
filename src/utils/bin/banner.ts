import config from "../../../config.json";

// main banner
export const banner = () => {
  return `  Welcome to the terminal portfolio of
  
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
