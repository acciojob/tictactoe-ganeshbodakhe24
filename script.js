//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {

    let submitBtn = document.getElementById("submit");
    let gameArea = document.querySelector(".game-area");
    let message = document.querySelector(".message");
    let cells = document.querySelectorAll(".cell");

    let currentPlayer = "X";
    let player1Name = "";
    let player2Name = "";
    let gameActive = true;

    const winningCombos = [
        ["1","2","3"],
        ["4","5","6"],
        ["7","8","9"],
        ["1","4","7"],
        ["2","5","8"],
        ["3","6","9"],
        ["1","5","9"],
        ["3","5","7"]
    ];

    submitBtn.addEventListener("click", function () {
        player1Name = document.getElementById("player1").value;
        player2Name = document.getElementById("player2").value;

        if (player1Name && player2Name) {
            gameArea.style.display = "block";
            message.textContent = `${player1Name}, you're up`;
        }
    });

    cells.forEach(cell => {
        cell.addEventListener("click", function () {

            if (!gameActive || cell.textContent !== "") return;

            cell.textContent = currentPlayer;

            if (checkWinner()) {
                let winnerName = currentPlayer === "X" ? player1Name : player2Name;
                message.textContent = `${winnerName} congratulations you won!`;
                gameActive = false;
                return;
            }

            currentPlayer = currentPlayer === "X" ? "O" : "X";
            let nextPlayer = currentPlayer === "X" ? player1Name : player2Name;
            message.textContent = `${nextPlayer}, you're up`;
        });
    });

    function checkWinner() {
        return winningCombos.some(combo => {
            return combo.every(id => {
                return document.getElementById(id).textContent === currentPlayer;
            });
        });
    }

});
