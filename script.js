const COLORS = document.querySelectorAll('.color');
COLORS.forEach(color => {
    color.addEventListener('click', () => {
        let className = color.className;
        if (!color.classList.contains('active')) {
            let colorName = className.slice(className.indexOf('-') + 1, className.length);
            resetActiveColors();
            color.classList.add('active');
            setNewColor(colorName)
        }
    });
})
function resetActiveColors() {
    COLORS.forEach(color => {
        color.classList.remove('active');
    });
}
function setNewColor(color) {
    document.querySelector('.right img').src = `images/tshirt_${color}.png`;
}