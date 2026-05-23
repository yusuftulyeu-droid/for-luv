const messages = [
    "Гүлім ❤️ Сенің өмірімде бар екеніңнің өзі бақыт.",
    "Жарығым ✨ Сенің күлкің күннен де жарық.",
    "Сенімен аз уақыт бірге болсам да, өткізген әр сәт жүрегімде сақтаулы.",
    "Сені осы өмірде жолықтырғаным — ең үлкен бақытым.",
    "Кейде артық кетіп қалатынымды білемін.",
    "Бүгін де дәл сондай қателік жібердім.",
    "Сені ренжітейін деген ойымда болған емес.",
    "Сенің көңілің түскені маған өте ауыр, мен де қиналамын.",
    "Мен сенің мейіріміңді қатты бағалаймын.",
    "Сен маған Алланың берген сыйысың.",
    "Сен менің нәзігімсің.",
    "Сен менің ең әдемі кездейсоқтығымсың.",
    "Жарығым, сен әр сәт ойымнан кетпейсің.",
    "Мен сені қатты жақсы көремін.",
    "Кейде жеткізе алмасам да, жүрегім сен деп тұрады.",
    "Маған сенгенің үшін рақмет.",
    "Маған шыдағаның үшін рақмет.",
    "Бүгінгі әрекетім үшін шын жүректен кешірім сұраймын.",
    "Пашконым, артық кетіп қалдым.",
    "Нәзігім, мені кешірші... ❤️"
];

let current = 1;

const photo = document.getElementById("photo");
const pageText = document.getElementById("pageText");
const pageNumber = document.getElementById("pageNumber");

pageText.innerText = messages[0];

document.getElementById("startBtn").onclick = () => {
    const music = document.getElementById("bgMusic");
    if (music) {
        music.play().catch(error => console.log("Браузер блоктады:", error));
    }
    document.getElementById("welcome").style.display = "none";
    document.getElementById("bookSection").classList.remove("hidden");
};

document.getElementById("nextBtn").onclick = () => {
    current++;

    if (current > 20) {
        document.getElementById("bookSection").style.display = "none";
        document.getElementById("finalPage").classList.remove("hidden");
        return;
    }

    // images/ папкасынсыз, тікелей сырттан оқу
    photo.src = `${current}.jpg`;
    pageText.innerText = messages[current - 1];
    pageNumber.innerText = `${current} / 20`;

    const pageEl = document.querySelector(".page");
    pageEl.style.animation = "none";
    setTimeout(() => {
        pageEl.style.animation = "flip .8s ease";
    }, 10);
};

document.getElementById("forgiveBtn").onclick = () => {
    document.getElementById("answer").innerHTML = "❤️ Рақмет Гүлім... Мен сені қатты жақсы көремін ❤️";
};

/* STARS */
const stars = document.getElementById("stars");
for (let i = 0; i < 250; i++) {
    const s = document.createElement("div");
    s.className = "star";
    const size = Math.random() * 3;
    s.style.width = size + "px";
    s.style.height = size + "px";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.animationDelay = Math.random() * 3 + "s";
    stars.appendChild(s);
}

/* HEARTS */
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 20) + "px";
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 6000);
}
setInterval(createHeart, 350);

/* PARALLAX */
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    stars.style.transform = `translate(${x}px, ${y}px)`;
});
