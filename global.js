const isDebugMode = true;

// const url = ;
const url = isDebugMode ? "http://localhost:5000/" : "https://fenix-nu.vercel.app/";

// function to validate if the user is logged in
const isLoggedIn = () => {
    if (isDebugMode || localStorage.getItem("token")) {
        return true;
    }
    return false;
}