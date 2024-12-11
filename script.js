window.onload = function () {
    // Get the table body where the events will be added
    const eventsTableBody = document.querySelector("#events-table tbody");

    // Fetch the XML data
    fetch("services.xml")
        .then(response => response.text())  // Convert the response to text
        .then(data => {
            // Parse the XML data
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "application/xml");
            const services = xml.getElementsByTagName("service");  // Get all services

            // Loop through each service and add it to the table
            for (let i = 0; i < services.length; i++) {
                const name = services[i].getElementsByTagName("name")[0].textContent;
                const description = services[i].getElementsByTagName("description")[0].textContent;
                const date = services[i].getElementsByTagName("date")[0].textContent;
                const time = services[i].getElementsByTagName("time")[0].textContent;

                // Create a new row for each service
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${name}</td>
                    <td>${description}</td>
                    <td>${date}</td>
                    <td>${time}</td>
                    <td>${price}</td>
                `;

                // Add the row to the table
                eventsTableBody.appendChild(row);
            }
        });
};
