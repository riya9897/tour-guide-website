// show logged-in username
function showNavbarUser() {
    const username = localStorage.getItem("username"); // stored during login
    const navUser = document.getElementById("nav-username");

    if (username && navUser) {
        navUser.innerHTML = `👤 ${username} ▾`;
    }
}

// logout function
function logoutUser() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    window.location.href = "login.html";
}

// run on page load
showNavbarUser();
