const registerBtn = document.querySelector("#registerBtn");

registerBtn?.addEventListener("click", async function(e){
	e.preventDefault();
    let full_name = $("#full_name").val();
    let id_num = $("#id_num").val();
    let email = $("#email").val();
    let p1 = $("#su_p1").val();
    let p2 = $("#su_p2").val();

    let id_num_exists;
    let email_exists;

	let result = (p1 === p2);
    

	if(result == false) {
		console.log("Account creation failed: Passwords do not match!");
	} else {

        // Check if id number already exists in the database
        var data_id_num = {
            id_num: id_num
        }

        try{
            const id_num_res = await fetch("http://localhost:3000/register/checkIdNum?"+new URLSearchParams(data_id_num), {
                method: "GET", // *GET, POST, PUT, DELETE, etc.
            });
            id_num_exists = await id_num_res.json();
        }
        catch(err) {
            id_num_exists = true;
            console.log(err);
        }
        

        // Check if email already exists in the database
        var data_email = {
            email: email
        }

        try{
            const email_res = await fetch("http://localhost:3000/register/checkEmail?"+new URLSearchParams(data_email), {
                method: "GET", // *GET, POST, PUT, DELETE, etc.
            });
            email_exists = await email_res.json();
        }
        catch(err) {
            email_exists = true;
            console.log(err);
        }

        if(id_num_exists == false && email_exists == false) {
            console.log("Account creation successful");
            var data = {
                full_name: full_name,
                id_num: id_num,
                email: email,
                password: p1
            }
            console.log(data);

            const response = await fetch("http://localhost:3000/register", {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(data), // body data type must match "Content-Type" header
            });
            console.log(response);

            window.location.href="/changePage/loadSignIn";
            testing();

            /*
            await fetch("http://localhost:3000/register/backToSignIn", {
                method: "GET"
            });
            */
            
        } else {
            console.log("Account creation failed: Id number or Email already exists!");
        }
		
	}
});