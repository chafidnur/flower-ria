function initBirthdayApp() {
    // Add all the flower and grass elements dynamically
    const flowers = document.querySelector('.flowers');
    
    // Function to create flower elements
    function createFlower(className) {
        const flower = document.createElement('div');
        flower.className = `flower ${className}`;
        // Add all the nested elements for the flower here
        // ...
        return flower;
    }

    // Create and append flowers
    flowers.appendChild(createFlower('flower--1'));
    flowers.appendChild(createFlower('flower--2'));
    flowers.appendChild(createFlower('flower--3'));

    // Create and append grass elements
    // ...

    // Remove the 'not-loaded' class to start animations
    setTimeout(() => {
        document.body.classList.remove("not-loaded");
    }, 1000);
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initBirthdayApp);