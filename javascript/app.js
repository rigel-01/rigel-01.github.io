function revealMessage() {
    let state = document.getElementById("hiddenMessage");
    if (state.style.display === "none") {
        state.style.display = "block";
    }
    else {
        state.style.display = "none";
    }
}