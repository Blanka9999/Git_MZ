let savedList = JSON.parse(localStorage.getItem("savedList")) || [];

fetch("https://api.siposm.hu/word")
    .then(response => response.json())
    .then(words => {
        const tableBody = document.querySelector("#wordTable tbody");


        words.forEach(word => {
            const row = document.createElement("tr");
            const data = document.createElement("td");
            const buttonCell = document.createElement("td");
            const saveButton = document.createElement("button");
            row.className = "border-1"

            data.textContent = word;
            saveButton.textContent = "Save";
            saveButton.type = "button";
            saveButton.className = "btn btn-primary my-2";

            saveButton.addEventListener("click", function () {
                if (!savedList.includes(word)) {
                savedList.push(word);
                localStorage.setItem("savedList", JSON.stringify(savedList));
                }
            });

            buttonCell.appendChild(saveButton);

            row.appendChild(data);
            row.appendChild(buttonCell);
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error("Error loading words:", error);
    })

    document.querySelector("#submitWord").addEventListener("click", function() {
        const newWord = document.querySelector("#userInput").value;

        const tbody = document.querySelector("#wordTable tbody");
        const row = document.createElement("tr");

        const wordCell = document.createElement("td");
        const buttonCell = document.createElement("td");
        const saveButton = document.createElement("button");

        wordCell.textContent = newWord;

        saveButton.textContent = "Save";
            saveButton.type = "button";
            saveButton.className = "btn btn-primary my-2";

            saveButton.addEventListener("click", function () {
                if (!savedList.includes(newWord)) {
                savedList.push(newWord);
                localStorage.setItem("savedList", JSON.stringify(savedList));
                }
            });

        buttonCell.appendChild(saveButton);

        row.appendChild(wordCell);
        row.appendChild(buttonCell);
        tbody.appendChild(row);
        document.querySelector("#userInput").value = "";
});





