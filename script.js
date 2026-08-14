
fetch("https://api.siposm.hu/word")
    .then(response => response.json())
    .then(words => {
        const tableBody = document.querySelector("#wordTable tbody");

        words.forEach(word => {
            const row = document.createElement("tr");
            const data = document.createElement("td");
            const buttonCell = document.createElement("td")
            const saveButton = document.createElement("button")

            data.textContent = word;
            saveButton.textContent = "Save";
            saveButton.type = "button";
            saveButton.className = "btn btn-primary my-2";
            row.className = "border-1"

            row.appendChild(data);
            row.appendChild(saveButton);
            wordTable.appendChild(row);
        });
    })
    .catch(error => {
        console.error("Error loading words:", error);
    })