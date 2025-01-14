document.getElementById("noakhali-donate-btn").addEventListener('click', function (event) {
    event.preventDefault();

    const inputFieldAdd = getInputFieldById("noakhali-input-field")

    if (isNaN(inputFieldAdd) || inputFieldAdd <= 0) {
        alert("Donation Failed, Please enter a valid donation amount greater than zero");
        return;
    }
    const total = getTextFieldById("total-balance");

    if (inputFieldAdd > total) {
        alert("Donation Failed, Insufficient balance. You cannot donate more than your current balance.");
        return;
    }
    const textFieldPrevious = getTextFieldById("noakhali-previous-balance");

    const newAmount = textFieldPrevious + inputFieldAdd;
    document.getElementById("noakhali-previous-balance").innerText = newAmount;

    const deductAmount = total - inputFieldAdd;
    document.getElementById("total-balance").innerText = deductAmount;

    document.getElementById("noakhali-input-field").value = "";

    displayModal();

    const newElement = document.createElement("div");

    newElement.innerHTML = `
        <div id="history" class="shadow-2xl p-3 border border-gray-400 mb-10 rounded-2xl">
        <p>${inputFieldAdd} taka donated for donate flood at noakhali bangladesh</p>
        <p>${Date()}</p>
        </div>`;
    document.getElementById("history-container").appendChild(newElement);
})




