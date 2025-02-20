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

// render
render(posts)

function render(arr){

    let liDOM = ""

    for (let i=0; i<arr.length; i++){
        liDOM += `
            <li>
                <img class="post-img" src="${arr[i].post}" alt="">
            </li>
        `
    }

    postsListEl.innerHTML += liDOM
}