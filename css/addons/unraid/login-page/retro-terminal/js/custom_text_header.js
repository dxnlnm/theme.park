
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>     
____  ___    ________  __________ _       ____________ \n   / 
__ \\/   |  /  _/ __ \\/_  __/ __ \\ |     / / ____/ __ \\\n  / 
/_/ / /| |  / // / / / / / / / / / | /| / / __/ / /_/ /\n / _, _/ 
___ |_/ // /_/ / / / / /_/ /| |/ |/ / /___/ _, _/ \n/_/ |_/_/  
|_/___/_____/ /_/  \\____/ |__/|__/_____/_/ |_|  \n                          
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header

