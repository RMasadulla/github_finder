const SearchBtn = document.querySelector("#searchBtn");
let searchUser = document.querySelector("#searchArea");
let ui = new UI();
SearchBtn.addEventListener('click',()=>{
    let userText = searchUser.value ;

    if (userText!= ''){
            // fetch api
        fetch(`https://api.github.com/users/${userText}`)
        .then(result => result.json())
        .then(data => {
            if(data.message === 'Not Found'){
                // show alert
               ui.showAlert()
            }else{
                // show profile
                ui.showProfile(data)
            }
        })
    }else{
        // clear profile
        ui.clearProfile()
    }
})