document.addEventListener('DOMContentLoaded', function () {
    const likeButton = document.getElementById('likeButton');
    const likeCount = document.getElementById('likeCount');
    let isLiked = false;

    likeButton.addEventListener('click', function () {
        if (isLiked) {
            likeCount.textContent = parseInt(likeCount.textContent) - 1;
            likeButton.innerHTML = '<i class="far fa-thumbs-up fa-lg"></i>';
            likeButton.querySelector('i').style.color = 'black'; // Reset color to black
        } else {
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
            likeButton.innerHTML = '<i class="fas fa-thumbs-up fa-lg"></i>';
            likeButton.querySelector('i').style.color = 'blue'; // Change color to blue
        }
        isLiked = !isLiked;
    });
    

    likeButton.addEventListener('mouseenter', function () {
        likeButton.style.color = 'blue';
        likeButton.style.transform = 'rotate(-10deg)';
    });

    likeButton.addEventListener('mouseleave', function () {
        likeButton.style.color = 'black';
        likeButton.style.transform = 'rotate(0deg)';
    });

    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', function () {
        window.location.href = 'blogs.html';
    });
});
