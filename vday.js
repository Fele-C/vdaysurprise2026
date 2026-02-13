let messageIndex = 0;
let imageIndex = 0;

function handleNoClick() {
    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button');
    const imageElement = document.getElementById('valentine-image');

    // Change the "No" button text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Change the image
    imageIndex = (imageIndex + 1) % images.length;  
    imageElement.src = images[imageIndex];
    
    
    // Increase the "Yes" button size
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = (currentSize * 1.5) + 'px';
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}