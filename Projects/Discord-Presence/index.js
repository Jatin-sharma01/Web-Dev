const RPC = require("discord-rpc");
const clientId = "1317852205881229364"; // Your app's actual Client ID

RPC.register(clientId);

const rpc = new RPC.Client({ transport: "ipc" });

rpc.on("ready", () => {
  rpc.setActivity({
    details: "Btech Gand Mara",
    state: "Bhen ke lode",
    startTimestamp: new Date(),
    largeImageKey: "hancock",     // Use your uploaded image key here
    largeImageText: "React Framework",
    buttons: [
      {
        label: "Join My VC",
        url: "https://discord.gg/CsWXFCMRpF" // Your VC invite
      },
      {
        label: "Watch Me Code",
        url: "https://twitch.tv/yourprofile" // Optional
      }
    ],
    instance: false
  });

  console.log("✅ Rich Presence is active!");
});

rpc.login({ clientId }).catch(console.error);

