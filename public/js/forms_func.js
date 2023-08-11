document.addEventListener('DOMContentLoaded', function() {
    const forumBtn = document.querySelector('#newBtn');
    const createNew = document.querySelector('.forumDetails');

    console.log("Connected!");

    forumBtn?.addEventListener('click', function(){
        console.log("Hello World");
        createNew.classList.toggle("show");
    });
});