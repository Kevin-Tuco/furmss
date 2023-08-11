const forumBtn = document.querySelector('#newBtn');
const forumTabs = document.getElementById("topics");
const createNew = document.querySelector('.forumDetails');
const newName = document.querySelector('#forumName');
const newLocation = document.querySelector('#location');
const newCourse = document.querySelector('#courses');
const newMessage = document.querySelector('#forumContent');
const newQForum = document.querySelector('#qName');
const newQuestion = document.querySelector('#forumQuestion');
const createBtn1 = document.querySelector('#createForum1');
const createBtn2 = document.querySelector('#createForum2');
const createBtn3 = document.querySelector('#createForum3');

const commentBtn = document.querySelector('.commentBtn');
const comment = document.querySelector('.commentSection');
const reply = document.querySelector('.replySection');
const removeBtn = document.querySelector('.delete');
const commentSection = document.getElementById("comments");
const replySection = document.querySelector('.replies');

const profile = document.querySelector('#prfPic');
const imgDiv = document.querySelector('.profilepic');
const img = document.querySelector('#dp');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

const registerBtn = document.querySelector("#registerBtn");

let commentArr = [];
let replyArr = [];
let forum1Arr = [];
let forum2Arr = [];
let forum3Arr = [];

//checks if the buttons and/or div classes are present
if(uploadBtn){
	file.addEventListener('change', changeImg);
}else if(forumBtn){
	forumBtn.addEventListener('click', showForum);
	if(createBtn1){
		createBtn1.addEventListener('click', createForum1);
		forumTabs.addEventListener('click', modifyForum);
	}
	if(createBtn2){
		createBtn2.addEventListener('click', createForum2);
		forumTabs.addEventListener('click', modifyForum);
	}
	if(createBtn3){
		createBtn3.addEventListener('click', createForum3);
		forumTabs.addEventListener('click', modifyForum);
	}
}else if(commentBtn||replyBtn||removeBtn){
	commentBtn.addEventListener('click', leaveComment);
	commentSection.addEventListener('click', modifyReply);
}

//gets the data input from the form in forum 1
function createForum1(e){
	const creator = 'Jane Jillian Jinny Doe';
	let date = new Date().toLocaleDateString([], {
		year:'numeric',
		month: '2-digit',
		day: '2-digit',
	});
	const forumName = newName.value;
	const forumCourse = newCourse.value;
	const forumContent = newMessage.value;
	
	if(forumName!='' && forumCourse!='default' && forumContent!=''){
		newForum = {
			"forumId": Math.floor((Math.random() * 1000)+1),
			"owner": creator,
			"date": date,
			"forumName": forumName,
			"forumCourse": forumCourse,
			"forumContent": forumContent
		}
		
		forum1Arr.push(newForum)
		
		resetCreate1()
		
		addForum1(newForum)
	}
	
	createNew.classList.toggle("show");
}

//gets the data input from the form in forum 2
function createForum2(e){
	const creator = 'Jane Jillian Jinny Doe';
	let date = new Date().toLocaleDateString([], {
		year:'numeric',
		month: '2-digit',
		day: '2-digit',
	});
	const forumName = newName.value;
	const studyPlace = newLocation.value;
	const forumCourse = newCourse.value;
	const forumContent = newMessage.value;
	
	if(forumName!='' && studyPlace!='default' && forumCourse!='default' && forumContent!=''){
		newForum = {
			"forumId": Math.floor((Math.random() * 1000)+1),
			"owner": creator,
			"location": studyPlace,
			"date": date,
			"forumName": forumName,
			"forumCourse": forumCourse,
			"forumContent": forumContent
		}
		
		forum2Arr.push(newForum)
		
		resetCreate2()
		
		addForum2(newForum)
	}
	
	createNew.classList.toggle("show");
}

//gets the data input from the form in forum 3
function createForum3(e){
	const creator = 'Jane Jillian Jinny Doe';
	const degree = 'CSST';
	let date = new Date().toLocaleDateString([], {
		year:'numeric',
		month: '2-digit',
		day: '2-digit',
	});
	const forumName = newQForum.value;
	const forumContent = newQuestion.value;
	
	if(forumName!='' && forumContent!=''){
		newForum = {
			"forumId": Math.floor((Math.random() * 1000)+1),
			"owner": creator,
			"degree": degree,
			"date": date,
			"forumName": forumName,
			"forumContent": forumContent
		}
		
		forum3Arr.push(newForum)
		
		resetCreate3()
		
		addForum3(newForum)
	}
	
	createNew.classList.toggle("show");
}

//resets form 1 values
function resetCreate1(){
	newName.value='';
	newCourse.value='default';
	newMessage.value='';
}

//resets form 2 values
function resetCreate2(){
	newName.value='';
	newLocation.value='default';
	newCourse.value='default';
	newMessage.value='';
}

//resets form 3 values
function resetCreate3(){
	newQForum.value='';
	newQuestion.value='';
}

//creates a div for the new forum
function addForum1(input){
	const div = document.createElement('div')
	
	div.setAttribute("class", "sched");
	
	div.id = input.id
	
	console.log(input)
	
	div.innerHTML = `
		<a href="#" class="thread">
			<div class="threadHeader">
				<h4>${input.forumName}<h4>
				<button class="deleteForum"></button>
			</div>
			<div class="info">
				<p class="course">${input.forumCourse}</p>
				<p class="dateTime">${input.date}</p>
				<p class="noComments">0 comments</p>
			</div>
		</a>
	`
	
	forumTabs.insertAdjacentElement('beforeend', div)
}

//creates a div for the new forum
function addForum2(input){
	const div = document.createElement('div')
	
	div.setAttribute("class", "sched");
	
	div.id = input.id
	
	console.log(input)
	
	div.innerHTML = `
		<a href="#" class="thread">
			<div class="threadHeader">
				<h4>${input.forumName}<h4>
				<button class="deleteForum"></button>
			</div>
			<div class="info">
				<p class="course">${input.forumCourse}</p>
				<p class="place">${input.location}</p>
				<p class="dateTime">${input.date}</p>
				<p class="noComments">0 comments</p>
			</div>
		</a>
	`
	
	forumTabs.insertAdjacentElement('beforeend', div)
}

//creates a div to append a newly created forum
function addForum3(input){
	const div = document.createElement('div')
	
	div.setAttribute("class", "sched");
	
	div.id = input.id
	
	console.log(input)
	
	div.innerHTML = `
		<a href="#" class="thread">
			<div class="threadHeader">
				<h4>${input.forumName}<h4>
				<button class="deleteForum"></button>
			</div>
			<div class="info">
				<p class="degProgram">${input.degree}</p>
				<p class="dateTime">${input.date}</p>
				<p class="noComments">0 comments</p>
			</div>
		</a>
	`
	
	forumTabs.insertAdjacentElement('beforeend', div)
}

//toggles the "forum creation" form
function showForum(e){
	console.log("Hello World");
	createNew.classList.toggle("show");
}

//modifies the forum section to allow deletion of forums
function modifyForum(e){
	const deleteBtn = e.target.classList.contains("deleteForum");
	const closestTab = e.target.closest(".sched");
	
	if(deleteBtn){
		closestTab.remove();
	}
}

//adds comment data to the comment array
function leaveComment(e){
	const commenter = 'Jane Jillian Jinny Doe';
	const commentContent = comment.value;
	let date = new Date().toLocaleDateString([], {
		year:'numeric',
		month: '2-digit',
		day: '2-digit',
	});
	
	if(commentContent!=''){
		newComment = {
			"id": Math.floor((Math.random() * 1000)+1),
			"userName": commenter,
			"userComment": commentContent,
			"date": date
		}
	
		commentArr.push(newComment)
		
		resetComment()
		
		addComment(newComment)
	}
	
	e.preventDefault()
}

//resets comment input values
function resetComment(){
	comment.value='';
}

//creates a div to add a new comment
function addComment(input){
	const div = document.createElement('div');
	
	div.setAttribute("class", "commentList");
	
	div.id = input.id;
	
	console.log(input);
	
	div.innerHTML = `
		<div class="header">
			<p class="user">
				${input.userName}
			</p>
			<p class="postDate">
				${input.date}
			</p>
		</div>
		<div class="commentContent">
			<p class="commentData">
				${input.userComment}
			</p>
		</div>
		<button class="openReply"></button>
		<button class="edit"></button>
		<button class="delete"></button>
	`
	
	commentSection.insertAdjacentElement('beforeend', div)
}

//creates a div to add a new reply
function addReply(input){
	const div = document.createElement('div');
	
	div.setAttribute("class", "replyList");

	console.log(newReply);

	div.innerHTML = `
		<div class="repHeader">
			<p class="repUser">${input.userName}</p>
			<p class="repDate">${input.date}</p>
		</div>
		<div class="replyContent">
			<p class="replyData">${input.userReply}</p>
		</div>
		<button class="editRep"></button>
		<button class="deleteRep"></button>
	`
	
	return div
}

//creates a div to be able to reply to the closest comment
function showReply(){
	const div = document.createElement('div');
	
	div.setAttribute("class", "inputRep");
	
	div.innerHTML = `
		<div class="inputRep">
			<input type="text" class="replySection" id="replySection">
			<button class="replyBtn"></button>
			<button class="closeRep"></button>
		</div>
	`
	
	return div
}

//creates a div to be able to edit the present Comment
function editText(content){
	const div = document.createElement('div');
	
	div.setAttribute("class", "inputEdit");
	
	div.innerHTML = `
		<div class="inputEdit">
			<input type="text" class="editSection" id="editSection" value="${content.innerText}">
			<button class="editBtn"></button>
			<button class="closeEdit"></button>
		</div>
	`
	
	return div
}

//creates a div to be able to edit the present reply
function editRep(content){
	const div = document.createElement('div');
	
	div.setAttribute("class", "inputEditRep");
	
	div.innerHTML = `
		<div class="inputEditRep">
			<input type="text" class="editRepSection" id="editRepSection" value="${content.innerText}">
			<button class="editRBtn"></button>
			<button class="closeREdit"></button>
		</div>
	`
	
	return div
}

//looks for the closest comment, and allows edit, reply, and delete
function modifyReply(e){
	const replyBtn = e.target.classList.contains("replyBtn");
	const showBtn = e.target.classList.contains("openReply");
	const editBtn = e.target.classList.contains("edit");
	const deleteBtn = e.target.classList.contains("delete");
	const editComment = e.target.classList.contains("editBtn");
	const editReply = e.target.classList.contains("editRBtn");
	const editRepBtn = e.target.classList.contains("editRep");
	const deleteRepBtn = e.target.classList.contains("deleteRep");
	const closeRepText = e.target.classList.contains("closeRep");
	const closeEditText = e.target.classList.contains("closeEdit");
	const closeEditRText = e.target.classList.contains("closeREdit");
	const closestCard = e.target.closest(".commentList");
	let closestRep = e.target.closest(".replyList");
	
	//shows the reply textbox when pressed
	if(showBtn){
		closestCard.appendChild(showReply());
	}
	
	//removes the closest comment when pressed
	if(deleteBtn){
		closestCard.remove();
	}
	
	//removes the closest reply when pressed
	if(deleteRepBtn){
		closestRep.remove();
	}
	
	//closes the reply textarea
	if(closeRepText){
		const replyDetails = e.target.closest(".inputRep")
		replyDetails.remove();
	}
	
	//closes the edit textarea
	if(closeEditText){
		const editBox = e.target.closest(".inputEdit")
		editBox.remove();
	}
	
	if(closeEditRText){
		const editBox = e.target.closest(".inputEditRep")
		editBox.remove();
	}
	
	//gets the text of closest comment and includes it in the textbox when pressed
	if(editBtn){
		const commentData = closestCard.querySelector(".commentData");
		console.log(commentData.innerText);
		console.log(closestCard);
		closestCard.appendChild(editText(commentData));
	}
	
	//gets the text of closest reply and includes it in the textbox when pressed
	if(editRepBtn){
		const replyData = closestRep.querySelector(".replyData");
		console.log(replyData.innerText);
		console.log(closestRep);
		closestRep.appendChild(editRep(replyData));
	}
	
	//replaces the closest comment's text with the editted one
	if(editComment){
		const newComment = e.target.closest(".inputEdit");
		const newEdit = newComment.querySelector(".editSection");
		
		if(newEdit.value!=''){
			console.log(closestCard.querySelector(".commentData").innerText);
			console.log(newEdit);
			closestCard.querySelector(".commentData").innerHTML = newEdit.value;
			newComment.remove();
		}
	}
	
	//replaces the closest reply's text with the editted one
	if(editReply){
		const newReply = e.target.closest(".inputEditRep");
		const newEdit = newReply.querySelector(".editRepSection");
		if(newEdit.value!=''){
			console.log(closestRep.querySelector(".replyData").innerText);
			console.log(newEdit);
			closestRep.querySelector(".replyData").innerHTML = newEdit.value;
			newReply.remove();
		}
	}
	
	//appends new reply to the closest comment
	if(replyBtn){
		const replyDetails = e.target.closest(".inputRep")
		if(replyDetails.children[0].value){
			const replier = 'Jane Jillian Jinny Doe';
			const replyContent = replyDetails.children[0].value;
			let date = new Date().toLocaleDateString([], {
				year:'numeric',
				month: '2-digit',
				day: '2-digit',
			});
			
			newReply = {
				"id": Math.floor((Math.random() * 1000)+1),
				"userName": replier,
				"userReply": replyContent,
				"date": date
			}
			replyArr.push(newReply);
		
			closestCard.appendChild(addReply(newReply));
			
			replyDetails.remove();
		}
	}
}

//changes picture in profile
function changeImg(){
	const newFile = this.files[0];
	
	if(newFile){
		const reader = new FileReader();
		
		reader.addEventListener('load', function(){
			img.setAttribute('src', reader.result);
			profile.setAttribute('src', reader.result);
		})
		
		reader.readAsDataURL(newFile);
	}
}

registerBtn?.addEventListener("click", async function(e){
	e.preventDefault();
	let p1 = document.getElementById("su_p1").value;
	let p2 = document.getElementById("su_p2").value;
	let result = (p1 === p2);
	if(result == false) {
		console.log("Account creation failed");
	} else {
		console.log("Account creation successful");
		var data = {
			id_num: $("#id_num").val(),
			name: $("#name").val(),
			email: $("#email").val(),
			password: $("#su_p1").val()
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
	}
});
