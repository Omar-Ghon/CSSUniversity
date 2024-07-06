document.addEventListener('DOMContentLoaded', (event) => {
    const yearElements = document.querySelectorAll(".year");
    const thisYear = new Date().getFullYear();
    yearElements.forEach(year => {
        year.setAttribute("datetime", thisYear);
        year.textContent = thisYear;
    });
});
