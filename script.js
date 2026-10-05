```javascript
function showMessage() {
    alert("Thank you for visiting Swetha's Portfolio!");
}

document.querySelectorAll("nav a").forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        let section = document.querySelector(
            this.getAttribute("href")
        );

        section.scrollIntoView({
            behavior: "smooth"
        });
    });
});
```
