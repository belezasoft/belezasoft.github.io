// const url = "https://fenix-nu.vercel.app/";
const url = "http://localhost:5000/";

// function to validate if the user is logged in
const isLoggedIn = () => {
    if (localStorage.getItem("token")) {
        return true;
    }
    return false;
}