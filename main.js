const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event){
    if(event.code === "Enter"){
        search();
    }
})

function search(){
    const input = searchInput.value;
    window.location.href = "https://www.google.com/search?q=" + input + "&oq=" + input + "&aqs=chrome..69i57j0i131i433i512j46i131i175i199i433i512j0i433i512j0i512j46i131i199i433i465i512j46i131i175i199i433i457i512j46i175i199i512j0i131i433i512j46i131i175i199i433i512.1461j0j15&sourceid=chrome&ie=UTF-8"
}