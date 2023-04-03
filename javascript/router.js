const urlPageTitle = "Ernesto Rangel";

document.addEventListener("click", (e) => {
    const { target } = e;
    if(!target.matches("nav a")) return;
    e.preventDefault();
    urlRoute();
});

const urlRoutes = {
    404: {
        template: "/views/404.html",
        title: "404 | " + urlPageTitle,
        description: ""
    },
    "/": {
        template: "/views/home.html",
        title: urlPageTitle,
        description: ""
    },
    "/curriculum": {
        template: "/views/curriculum.html",
        title: "Curriculum | " + urlPageTitle,
        description: ""
    },
    "/portfolio": {
        template: "/views/portfolio.html",
        title: "Portfolio | " + urlPageTitle,
        description: ""
    },
    "/contact": {
        template: "/views/contact.html",
        title: "Contact | " + urlPageTitle,
        description: ""
    }
}

const urlRoute = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    urlLocationHandler();
};

const urlLocationHandler = async () => {
    const location = window.location.pathname;
    if(location.length == 0) location = "/";
    const route = urlRoutes[location] || urlRoutes[404];
    const html = await fetch(route.template).then((response) => response.text());
    document.getElementById("content").innerHTML = html;
};

window.onpopstate = urlLocationHandler;
window.route = urlRoute;

urlLocationHandler();