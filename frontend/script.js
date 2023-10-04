document.addEventListener("DOMContentLoaded", function () {
    const addItemForm = document.getElementById("addItemForm");
    const itemList = document.getElementById("itemList");

    // Function to fetch and display items
    function displayItems() {
        fetch("/api/items")
            .then((response) => response.json())
            .then((data) => {
                itemList.innerHTML = "";
                data.forEach((item) => {
                    const itemElement = document.createElement("div");
                    itemElement.innerHTML = `
                        <strong>${item.Name}</strong> - $${item.Price.toFixed(2)}
                        <button data-id="${item.ID}" class="deleteBtn">Delete</button>
                    `;
                    itemList.appendChild(itemElement);

                    // Attach event listener for delete button
                    const deleteBtn = itemElement.querySelector(".deleteBtn");
                    deleteBtn.addEventListener("click", deleteItem);
                });
            });
    }

    // Function to add a new item
    function addItem(event) {
        event.preventDefault();
        const name = document.getElementById("nameInput").value;
        const price = parseFloat(document.getElementById("priceInput").value);

        fetch("/api/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ Name: name, Price: price }),
        })
            .then(() => {
                displayItems();
                addItemForm.reset();
            });
    }

    // Function to delete an item
    function deleteItem(event) {
        const itemId = event.target.getAttribute("data-id");

        fetch(`/api/items/${itemId}`, {
            method: "DELETE",
        })
            .then(() => {
                displayItems();
            });
    }

    // Attach event listeners
    addItemForm.addEventListener("submit", addItem);

    // Initial item display
    displayItems();
});
