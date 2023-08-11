const loginBtn = document.querySelector("#loginBtn");

loginBtn?.addEventListener("click", async function(e){
	e.preventDefault();
    let email = $("#login").val();
    let password = $("#password").val();
    let verified;

    var data = {
        email: email,
        password: password
    }
    console.log(data);

    try {
        const response = await fetch(`/verifyLogInCredentials?email=${data.email}&password=${data.password}`, {
            method: "GET" // *GET, POST, PUT, DELETE, etc.
        });
        verified = await response.json();
        console.log("verified: " + verified);
    } catch(err) {
        console.log(err);
        verified = false;
    }

    if(verified) {
        console.log("Correct credentials");
        window.location.href="/changePage/loadForumHome";
        testing();
    } else {
        console.log("Incorrect credentials");
    }

});