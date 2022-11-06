class UI {
    constructor(){
        this.profile = document.querySelector("#profile")
    }
    showProfile(user){
        this.profile.innerHTML = `
        <div class="container profileInfo">
                    <div class="userImg">
                        <img src="${user.avatar_url}" alt="user">
                        <h2 class="userNameT">${user.name}</h2>
                        <a href="${user.html_url}" class="viewBtn" target="_blank">View Profile</a>
                    </div>
                    <div class="userBio">
                        <h2 class="userName">${user.name}</h2>
                        <p>${user.bio || ''}</p></div>
                </div>
               <div class="container">
                <ul class="infoList">
                    <li>Public Repos: ${user.public_repos}</li>
                    <li>Public Gists: ${user.public_gists}</li>
                    <li>Followers: ${user.followers}</li>
                    <li>Following: ${user.following}</li>
                </ul>
               </div>
               <div class="container">
                <ul class="ohtersInfo">
                    <li><strong>Company</strong>: ${user.company}</li>
                    <li><strong>Website/Blog</strong>: <a href="${user.blog} target="_blank">${user.blog}</a></li>
                    <li><strong>Location</strong>: ${user.location}</li>
                    <li><strong>Member Since</strong>: ${user.created_at}</li>
                </ul>
               </div>
        `
    }
    showAlert(){
        this.profile.innerHTML = `
        <h3 class="notFound">Opps! User Not Found.</h3>
        `
    }
    clearProfile(){
    this.profile.innerHTML = ''
    }
}
