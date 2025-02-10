// Esperar a que el DOM cargue completamente
document.addEventListener("DOMContentLoaded", function () {
    // FILTRADO DE PROYECTOS
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");

            projects.forEach(project => {
                if (category === "all" || project.classList.contains(category)) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });

    // MODO OSCURO/CLARO
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Guardar la preferencia en el almacenamiento local
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    // Aplicar la preferencia guardada
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }
});
