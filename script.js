let savedList = JSON.parse(localStorage.getItem("savedList")) || [];

fetch("https://api.siposm.hu/word")
    .then(response => response.json())
    .then(words => {
        const tableBody = document.querySelector("#wordTable tbody");

        //const longestLength = Math.max(...words.map(word => word.length));

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
       
        longestWord();
        console.log(longestWord());
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
        row.className = "border-1";

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

        if (newWord.length > 1) {
            wordCell.style.color = "red";
        }

        row.appendChild(wordCell);
        row.appendChild(buttonCell);
        tbody.appendChild(row);
        document.querySelector("#userInput").value = "";
        longestWord();
    });

const tBody = document.querySelector("tbody");

function longestWord() {
    const rows = tBody.querySelectorAll("tr");
    let longestLength = 0;
    rows.forEach(row => {
        const wordCell = row.cells[0];
        const wordLength = wordCell.textContent.length;
        if (wordLength > longestLength) {
            longestLength = wordLength;
        }
    });
    
        rows.forEach(row => {
            const wordCell = row.cells[0];
            const length = wordCell.textContent.length;

        if (
                length === longestLength ||
                length === longestLength - 1 ||
                length === longestLength - 2
            ) {
                wordCell.style.color = "red";
            } else if (length < 5) {
                wordCell.style.color = "blue";
            } else {
                wordCell.style.color = "";
            }
    });
    return longestLength;
    }