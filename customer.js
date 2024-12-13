async function loadAdventures() {
    const response = await fetch('excursion.json');
    const adventureData = await response.json();
    const adventureCards = document.getElementById('adventureCards');
    adventureData.forEach(adventure => {
        const card = document.createElement('div');
        card.className = 'col';
        card.innerHTML = `
            <div class="card">
                <img src="${adventure.adventurephoto}" class="card-img-top" alt="${adventure.adventurename} Photo">
                <div class="card-body">
                    <h5 class="card-title">${adventure.adventurename}</h5>
                    <p class="card-text"><strong>Date:</strong> ${adventure.adventuredate}</p>
                    <p class="card-text"><strong>Customer:</strong> ${adventure.customername}</p>
                    <p class="card-text"><strong>Quote:</strong> "${adventure.customerquote}"</p>
                    <p><strong>Excursion Statement:</strong> ${adventure.excurstionstmt}</p>
                    <p>${adventure.descriptionfile}</p>
                </div>
            </div>
        `;
        adventureCards.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", loadAdventures);

const form = document.getElementById('infoForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Thank you, ${name}! We will contact you at ${email}.`);
    form.reset();
});
