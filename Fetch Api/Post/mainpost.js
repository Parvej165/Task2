document.getElementById("addPost").addEventListener('submit',postData)
// POST request using fetch() 
function postData(event) {
	event.preventDefault();
	let title = document.getElementById('title').value;
    let body = document.getElementById('body').value
	fetch("https://jsonplaceholder.typicode.com/posts", { 
		
		// Adding method type 
		method: "POST", 
		
	// Adding body or contents to send 
	body: JSON.stringify({ 
		title: title, 
		body: body, 
		userId: 1 
	}), 
	
	// Adding headers to the request 
	headers: { 
		"Content-type": "application/json; charset=UTF-8"
	} 
}) 

// Converting to JSON 
.then(response => response.json()) 

// Displaying results to console 
.then(json => console.log(json)); 
}
