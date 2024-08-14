const placeholders = ["Estudiante", "Desarrollador", "Informático"];
let index = 0;
const dynamicText = document.getElementById("dynamic-text");
const typingSpeed = 100; 
const deletingSpeed = 50; 
const delayAfterWord = 2000; 
const delayB4Word = 800; 

function typePlaceholder(text, i, callback) {
    if (i < text.length) {
        dynamicText.textContent = text.substring(0, i + 1);
        setTimeout(() => typePlaceholder(text, i + 1, callback), typingSpeed);
    } else {
        setTimeout(callback, delayAfterWord);
    }
}

function deletePlaceholder(text, i, callback) {
    if (i >= 0) {
        dynamicText.textContent = text.substring(0, i);
        setTimeout(() => deletePlaceholder(text, i - 1, callback), deletingSpeed);
    } else {
        setTimeout(callback, delayB4Word);
    }
}

function loopPlaceholders() {
    typePlaceholder(placeholders[index], 0, () => {
        deletePlaceholder(placeholders[index], placeholders[index].length, () => {
            index = (index + 1) % placeholders.length;
            loopPlaceholders();
        });
    });
}

loopPlaceholders();
