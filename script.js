function playSound() {
    const audio = document.getElementById("audio");
    audio.currentTime = 0; // restart sound if clicked again
    audio.play();
    document.querySelector("h1").textContent = "FAhhhhhhhhhhhhhh";
}
