const posts = [
    {
        post: "images/profile_page/posts/cookie.jpg",
        likes: 15,
        comments: 8
    },
    {
        post: "images/profile_page/posts/cow.jpg",
        likes: 22,
        comments: 7
    },
    {
        post: "images/profile_page/posts/lake.jpg",
        likes: 84,
        comments: 25
    },
    {
        post: "images/profile_page/posts/paris.jpg",
        likes: 44,
        comments: 12
    },
    {
        post: "images/profile_page/posts/river.jpg",
        likes: 5,
        comments: 1
    },
    {
        post: "images/profile_page/posts/selfie.jpg",
        likes: 112,
        comments: 54
    },
    {
        post: "images/profile_page/posts/squirrel.jpg",
        likes: 4,
        comments: 0
    }
]

const postsListEl = document.getElementById("posts-list")
const modalEl = document.getElementById("modal-el")
const closeModalEl = document.getElementById("close-btn")
const imgModalEl = document.getElementById("img-modal-el")

// render
render(posts)

window.onclick = function(event) {

    let parentEl = event.target.parentNode

    if (modalEl.style.display === "block" && parentEl.classList[0] !== "img-modal-content" ){
        // hide the modal
        modalEl.style.display = "none"
    }

    if (parentEl.classList[0] === "post-container"){
        
        // get img
        const imgEl = parentEl.querySelector("img")

        // set img in the modal
        imgModalEl.setAttribute("src", imgEl.getAttribute("src")) 

        // display the modal
        modalEl.style.display = "block"
        
    }
    else if (parentEl.classList[0] === "post-likes" || parentEl.classList[0] === "post-icon"){

        // search the parent container
        while (parentEl.classList[0] !== "post-container"){
            parentEl = parentEl.parentNode
        }

        // get img
        const imgEl = parentEl.querySelector("img")

        // set img in the modal
        imgModalEl.setAttribute("src", imgEl.getAttribute("src")) 

        // display the modal
        modalEl.style.display = "block"
    }
    
}


// Event
closeModalEl.addEventListener("click", function(){
    modalEl.style.display = "none"
})

// Functions
function render(arr){

    let liDOM = ""

    for (let i=0; i<arr.length; i++){
        liDOM += `
            <li>
                <div id="post-container" class="post-container">
                    <img class="post-img" src="${arr[i].post}" alt="">
                    <div id="likes-container" class="likes-container">
                        <div id="post-likes" class="post-likes">
                            <p>${arr[i].likes}</p>
                            <svg class="post-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                            <p>${arr[i].comments}</p>
                            <svg class="post-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/></svg>
                        </div>
                    </div>
                </div>
            </li>
        `
    }

    postsListEl.innerHTML += liDOM
}