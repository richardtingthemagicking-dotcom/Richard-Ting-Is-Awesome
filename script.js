function tellFortune() {
    const fortunes = [
        "You will have a great day!",
        "Success is on the horizon!",
        "You will get that web development job!",
        "Your kindness will return to you.",
        "You are so happy you came to this website!"
    ];
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    document.getElementById("fortune").textContent = randomFortune;
}