document.getElementById("getData").addEventListener("click", getData);

// GET request using fetch()
function getData() {
	fetch("https://jsonplaceholder.typicode.com/users") 
	
	// Converting received data to JSON 
	.then(response => response.json()) 
	.then(json => { 

		// Create a variable to store HTML 
		let li = `<tr>
		<th>Name</th>
		<th>Email</th>
		</tr>`; 
		// Loop through each data and add a table row 
		
		json.forEach(user => { 
			li += `
			<div>
			<tr>	
			<td>${user.name} </td>				 
			<td>${user.email}</td>						 
			</tr> 
			</div>`;
		}); 

	// Display result 
	document.getElementById("users").innerHTML = li; 
}); 
}


