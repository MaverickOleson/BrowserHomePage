//changing css variables for vh and vw based on current window size
document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
document.documentElement.style.setProperty('--vw', `${window.clientWidth * 0.01}px`);
window.addEventListener('resize', () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    document.documentElement.style.setProperty('--vw', `${window.clientWidth * 0.01}px`);
});
window.addEventListener("deviceorientation", () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    document.documentElement.style.setProperty('--vw', `${window.clientWidth * 0.01}px`);
});
