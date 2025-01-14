function getInputFieldById(id){
    const inputValue=document.getElementById(id).value;
    const inputNumber=parseFloat(inputValue);
    return inputNumber;
}
function getTextFieldById(id){
    const inputValue=document.getElementById(id).innerText;
    const inputNumber=parseFloat(inputValue);
    return inputNumber;
}
// function displayModal(title, message) {
//     const detailsContainer = document.getElementById("modal-content");
//     detailsContainer.innerHTML = `
//         <h2 class="text-xl font-bold mb-3">${title}</h2>
//         <p>${message}</p>
//     `;
//     document.getElementById("customModal").showModal();
// }
function displayModal() {
    const detailsContainer = document.getElementById("modal-content");
    detailsContainer.classList=("flex flex-col gap-5 justify-center items-center")
    detailsContainer.innerHTML = `
        <p>Congress!</p>
        <img src="./assets/coin.png" alt="">
        <p>You have donate for Humankind</p>
        <p>Successful</p>
    `;
    document.getElementById("customModal").showModal();
}
function showButton(id){
    document.getElementById('card-container-section').classList.add("hidden");
    document.getElementById('history-container').classList.add("hidden");
    
    document.getElementById(id).classList.remove("hidden");
}
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('bg-opacity-80', 'backdrop-blur-md');
        header.classList.remove('bg-[#F9F7F3]');
    } else {
        header.classList.remove('bg-opacity-80', 'backdrop-blur-md');
        header.classList.add('bg-[#F9F7F3]');
    }
});