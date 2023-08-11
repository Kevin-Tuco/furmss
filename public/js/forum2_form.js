document.addEventListener('DOMContentLoaded', function() {
    const createBtn2 = document.querySelector('#createForum2');
    const nameInput = document.querySelector('#forumName');
    const locationInput = document.querySelector('#location');
    const courseInput = document.querySelector('#courses');
    const contentInput = document.querySelector('#forumContent');

    createBtn2?.addEventListener("click", async function(e){
        e.preventDefault();
        try {
            const response = await fetch(`/getUserName`, {
                method: "GET"
            });
        
            if (response) {
                const creator = await response.text();
                console.log("Creator:", creator);
                const nameVal = nameInput.value;
                const locationVal = locationInput.value;
                const courseVal = courseInput.value;
                const contentVal = contentInput.value;
                let date = new Date().toLocaleDateString([], {
                    year:'numeric',
                    month: '2-digit',
                    day: '2-digit'
                });
                
                if(nameVal!='' && courseVal!='default' && contentVal!=''){
                    console.log(nameVal, courseVal, contentVal);
                    const forum1Data = {
                        userPost: creator,
                        course: courseVal,
                        location: locationVal,
                        content: contentVal,
                        postDate: date,
                        postName: nameVal
                    }
                    fetch('/createForum2', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(forum1Data)
                    })
                    .then(response=>response.text())
                    .then(text=>document.querySelector('#cards').innerHTML += text)
                    .catch(err=>console.error(err));
                    nameInput.value='';
                    locationInput.value='default';
                    courseInput.value='default';
                    contentInput.value='';
                    location.reload();
                }
            } else {
                console.error("Failed to fetch:", response.statusText);
            }
        } catch (error) {
            console.error("Fetch error:", error);
        }
    });
});