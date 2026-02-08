const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let noCount = 0; // Track number of No clicks
let yesSize = 22; // starting font size of Yes button
const yesMaxSize = 300; // Max font size for Yes button

// No button phrases
const noPhrases = [
  "No dumdum",
  "Are you sure Maamma?",
  "What if I asked really nicely, my love?",
  "Obim please",
  "will give achicha",
  "What about getting you matcha and okpa",
  "PLEASE NWA",
  "But it's me oo",
  "I'm going to kill myself Maamma",
  "Oya i'm dead",
  "Please na baby",
  "please babe",
  "asa nwa",
  "APUN'AWU PLEASE",
  "ONYE NWEM",
  "No",
];

// Handle Yes click
yesBtn.addEventListener("click", () => {
  // Keep the audio playing
  const music = document.getElementById("bgMusic");

  // Replace the visible content but keep the audio element
  document.body.innerHTML = `
    <div style="text-align:center; margin-top:50px;">
      <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
      <h1 style="font-size:50px; color: #ff1493; margin-top:20px;">
        YEEAA!!! I love you MAAMMA, See you on the 14th💋 !!
      </h1>
    </div>
  `;
  // Add back the audio element
  document.body.appendChild(music);
});

// Handle No click
noBtn.addEventListener("click", () => {
  noCount++;

  // Change No button text
  const phraseIndex = Math.min(noCount, noPhrases.length - 1);
  noBtn.textContent = noPhrases[phraseIndex];

  // Shrink No button slightly
  const currentNoSize = parseInt(window.getComputedStyle(noBtn).fontSize);
  noBtn.style.fontSize = Math.max(currentNoSize - 1, 12) + "px";

  // Grow Yes button
  yesSize += 15; // increase Yes size every No click
  if (yesSize > yesMaxSize) yesSize = yesMaxSize;
  yesBtn.style.fontSize = yesSize + "px";

  // Move No button randomly for fun (optional)
  const x = Math.random() * 80;
  const y = Math.random() * 80;
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "%";
  noBtn.style.top = y + "%";
});
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 400);
