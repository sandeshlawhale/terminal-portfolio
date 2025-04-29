import config from "../../../config.json";

export const sumfetch = () => {
  const art = `             @@@@@@@@@@@@@                 
        @@@@               @@@@            
      @@                       @@          
    @@                           @@        
  @@                               @@      
 @@                         @@@     @@     
@@        @@@                        @@    
@@                                   @@    
@@             .@@@@@@@@@@.          @@    
 @@           @@          @@        @@     
  @@           @@        @@        @@      
   @@             @@@@@@          @@       
     @@@                        @@@        
        @@@                  @@@ @@        
         @|  @@@@@@@@@@@@@@@@   @@         
         @|                      @@         
`;

  const summary = `
  sumfetch: summary display
-------------------------------
  ABOUT  
  ${config.name}
  ${config.role}
  <u><a href="${config.resume}" target="_blank">resume</a></u>  
爵  <u><a href="${config.repo}" target="_blank">GitHub repo</a></u>  
-------------------------------
  CONTACT  
  <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>  
  <u><a href="${
    config.socials.find((link) => link.name.toLowerCase() === "github")?.link
  }" target="_blank">github.com/sandeshlawhale</a></u>  
  <u><a href="${
    config.socials.find((link) => link.name.toLowerCase() === "linkedin")?.link
  }" target="_blank">linkedin.com/in/lawhalesandesh</a></u>  
-------------------------------
  DONATE  
  <u><a href="https://paypal.me/sandeshlawhale" target="_blank">paypal.me/sandeshlawhale</a></u>  
`;

  return `<div class="flex gap-10"><p>${art}</p><div>${summary}</div></div>`;
};
