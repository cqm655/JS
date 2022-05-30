const form = document.querySelector("form");
// console.log(form);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let login = document.getElementById("login").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;
    let favColor = document.getElementById("favorite-color").value;
    let gender = document.querySelector("input[name='gender']:checked").value;

    // console.log(login, email, password, password2, favColor, gender);

    let errors = 0;

    if (login === "" || login.length < 3) {
        document.getElementById("login").classList = "wrong";
        errors += 1;
    } else {
        document.getElementById("login").classList = "correct";
    }

    if (email === "") {
        document.getElementById("email").classList = "wrong";
        errors += 1;
    } else {
        document.getElementById("email").classList = "correct";
    }

    if (password === "" || password2 === "" || password !== password2) {
        document.getElementById("password").classList = "wrong";
        document.getElementById("password2").classList = "wrong";
        errors += 1;
    } else {
        document.getElementById("password").classList = "correct";
        document.getElementById("password2").classList = "correct";
    }

    if (gender === "") {
        document.getElementById("gender-con").classList = "wrong";
        errors += 1;
    } else {
        document.getElementById("gender-con").classList = "correct";
    }

    if (errors > 0) {
        $("#errors").hide();
        document.getElementById("errors").textContent = "Introduceti date logice in toate casetele";
        // $("#errors").fadeIn(400);
        // fadeOut()
        $("#errors").slideDown(200);
        // slideUp()
        // $("#errors").show();
        // hide()
    } else {
        localStorage.setItem("login", login);
        localStorage.setItem("email", email);
        localStorage.setItem("favColor", favColor);
        localStorage.setItem("gender", gender);
        location.href = "accout.html";
    }
});























































// // BOM - Browser Object Model

// const browser = navigator.userAgent;
// // console.log(browser);

// // if (browser.includes('Safari')) {
// //     console.log("The user is using Chrome!");
// // }

// const platform = navigator.platform;
// // console.log(platform)

// // console.log(navigator)

// // document.querySelector("a").addEventListener("click",
// //     () => location.href = "https://www.youtube.com/watch?v=z3yFzfJoo_4")

// // alert, prompt, confirm

// // DOM... - Document Object Model
// // console.log(document);
// // console.log(document.documentElement);
// // console.log(document.head);
// // console.log(document.body);

// // children, siblings
// // console.log(document.body.firstChild);
// // console.log(document.body.firstElementChild);
// const main = document.querySelector("main");
// // console.log(main.childNodes);
// // console.log(main.hasChildNodes());
// // console.log(document.querySelector("#mydiv").hasChildNodes());

// // if (main.hasChildNodes()) {
// //     main.childNodes.forEach(node => console.log(node));
// // }

// const article = document.querySelector(".article-text");
// // console.log(article.nextElementSibling);
// // console.log(article.previousElementSibling);
// // console.log(article.parentNode.parentNode);
// // const articleParent = article.parentNode;
// // console.log(articleParent.children);

// // create H3 for container
// const con = document.querySelector(".container");
// const h3 = document.createElement("h3");
// h3.classList = "forH3";
// h3.setAttribute("id", "h3-111");
// h3.textContent = "Watch me!";
// con.appendChild(h3);

// const img = document.createElement("img");
// img.classList = "forimg";
// img.setAttribute("src", "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F0x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349");
// img.setAttribute("height", "250px");
// con.appendChild(img);

// console.log(con.closest('body'));
