const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const music = document.getElementById("bgMusic");

let noCount = 0;
let yesSize = 22;
const yesMaxSize = 300;
let musicStarted = false;

// No button phrases
const noPhrases = [
  "No dumdum",
  "Are you sure Maamma?",
  "What if I asked really nicely, my love?",
  "Obim please",
  "With Enugu achicha",
  "What about a matcha and okpa",
  "PLEASE NWA",
  "But it's me oo",
  "I'm going to kill myself Maamma",
  "Oya i'm dead",
  "Please na baby",
  "please babe",
  "asa nwa",
  "APUN'AWU PLEASE",
  "ONYE NWEM",
  "No :(",
];

// 🔊 Start music safely (only once)
function startMusic() {
  if (!musicStarted) {
    music.play().catch(() => {});
    musicStarted = true;
  }
}

// YES click
yesBtn.addEventListener("click", () => {
  startMusic();

  document.body.innerHTML = `
    <div style="text-align:center; margin-top:50px;">
      <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
      <h1 style="font-size:50px; color:#ff1493; margin-top:20px;">
        WOOOOOO!!! I love you Maamma, See you on the 14th!! ;))
      </h1>
    </div>
  `;

  // Re-attach music and keep playing
  document.body.appendChild(music);
  music.play().catch(() => {});
});

// NO click
noBtn.addEventListener("click", () => {
  startMusic();

  noCount++;

  const phraseIndex = Math.min(noCount, noPhrases.length - 1);
  noBtn.textContent = noPhrases[phraseIndex];

  // Shrink No
  const currentNoSize = parseInt(window.getComputedStyle(noBtn).fontSize);
  noBtn.style.fontSize = Math.max(currentNoSize - 1, 12) + "px";

  // Grow Yes
  yesSize += 15;
  if (yesSize > yesMaxSize) yesSize = yesMaxSize;
  yesBtn.style.fontSize = yesSize + "px";

  // Random move
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";

  // Hide No after "ONYE NWEM"
  if (noCount >= noPhrases.indexOf("ONYE NWEM") + 1) {
    noBtn.style.display = "none";
  }
});
