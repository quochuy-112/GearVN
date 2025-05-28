function includeHTML(divId, file){
    fetch(file)
        .then(response => {
            if(!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(data => {
            document.getElementById(divId).innerHTML = data;
        })
        .catch(error => {
            console.error('"Error loading file:", error');
        })
}

document.addEventListener('DOMContentLoaded', () => {
    includeHTML('nav-placeholder', '../pages/nav.html');
    includeHTML('footer-placeholder', '../pages/footer.html');
})