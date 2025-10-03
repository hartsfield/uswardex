const divElements = document.querySelectorAll('path');

// Loop through each div element
divElements.forEach(div => {
    // Add a mouseover event listener
    div.addEventListener('mouseover', (event) => {
        // 'event.target' refers to the specific div element being hovered
        const hoveredElement = event.target;

        // Get a specific attribute (e.g., 'id')
        const idAttribute = hoveredElement.getAttribute('cname');
        const popAttribute = hoveredElement.getAttribute('pop');
        const areaAttribute = hoveredElement.getAttribute('area');
        const densityAttribute = hoveredElement.getAttribute('density');
        document.getElementById("info-name").innerHTML = idAttribute;
        document.getElementById("info-pop").innerHTML  = "Pop: " + popAttribute;
        document.getElementById("info-area").innerHTML = "Area: " + areaAttribute + " square miles";
        document.getElementById("info-density").innerHTML = "Density: " + densityAttribute + " people per sqmi";

        // Get a data attribute (e.g., data-custom-value)
        //const customDataValue = hoveredElement.dataset.population;
        //console.log(`Hovered div custom data: ${customDataValue}`);

        // Get all attributes
        //const attributes = hoveredElement.attributes;
        //console.log("All attributes:");
        //for (let i = 0; i < attributes.length; i++) {
        //    console.log(`${attributes[i].name}: ${attributes[i].value}`);
        //}
    });

    // Add a mouseout event listener (optional, for handling when the mouse leaves the element)
    div.addEventListener('mouseout', (event) => {
        console.log(`Mouse left div with ID: ${event.target.getAttribute('id')}`);
    });
});
