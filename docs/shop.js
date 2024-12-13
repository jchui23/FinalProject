function loadGear() {
  fetch("gearlist.json")
    .then(response => response.json())
    .then(data => {
      let tableContent = "";
      data.forEach(item => {
        tableContent += `
          <tr>
            <td>${item.gear_manu}</td>
            <td>${item.gear_name}</td>
            <td>$${item.gear_cost}</td>
          </tr>
        `;
      });
      document.getElementById("gearTable").innerHTML = tableContent;
    });
}
