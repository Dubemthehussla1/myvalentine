const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let noCount = 0;
let yesSize = 22;
const yesMaxSize = 300;

// No button phrases
const noPhrases = [
  "Maybe Dumdum",
  "Wow Maamma!",
  "My love, pick Yes",
  "Obim please",
  "I'm all you need oo",
  "I will give you okpa & achicha",
  "Kai na Pick Yes!",
  "It's me oo",
  "I'm going to KMS",
  "Oya i'm dead",
  "Achalaugo Please!",
  "Asa nwa",
  "ONYE NWEM",
  "No",
];

// Handle Yes click
yesBtn.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");

  document.body.innerHTML = `
    <div style="text-align:center; margin-top:50px;">
      <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
      <h1 style="font-size:40px; color:#ff1493; margin-top:20px;">
        YEEAA!!! I love you MAAMMA, See you on the 14th💋 !!
      </h1>
    </div>
  `;

  document.body.appendChild(music);
});

// Handle No click
noBtn.addEventListener("click", () => {
  noCount++;

  const phraseIndex = Math.min(noCount, noPhrases.length - 1);
  const currentPhrase = noPhrases[phraseIndex];
  noBtn.textContent = currentPhrase;

  // 🔥 WHEN "ONYE NWEM" SHOWS → REMOVE NO BUTTON
  if (currentPhrase === "ONYE NWEM") {
    noBtn.style.display = "none";

    // Center + highlight YES
    yesBtn.style.display = "block";
    yesBtn.style.margin = "40px auto";
    yesBtn.style.boxShadow = "0 0 25px #ff69b4";
    yesBtn.style.transform = "scale(1.3)";
    return;
  }

  // Shrink No button
  const currentNoSize = parseInt(window.getComputedStyle(noBtn).fontSize);
  noBtn.style.fontSize = Math.max(currentNoSize - 1, 12) + "px";

  // Grow Yes button
  yesSize += 15;
  if (yesSize > yesMaxSize) yesSize = yesMaxSize;
  yesBtn.style.fontSize = yesSize + "px";

  // Move No button randomly
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
});

// Floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 400);
setInterval(() => {
  const kiss = document.createElement("div");
  kiss.className = "kiss";
  kiss.textContent = "💋"; // the kiss emoji
  kiss.style.left = Math.random() * 100 + "vw";
  kiss.style.fontSize = 16 + Math.random() * 24 + "px"; // random size
  kiss.style.animationDuration = 4 + Math.random() * 4 + "s"; // random speed
  document.body.appendChild(kiss);

  setTimeout(() => kiss.remove(), 6000);
}, 600); // slightly slower interval than hearts
const music = document.getElementById("bgMusic");
let musicStarted = false;

// Play music when the user clicks anywhere
document.addEventListener("click", () => {
  if (!musicStarted) {
    music.muted = false; // unmute
    music.play();
    musicStarted = true;
  }
});
