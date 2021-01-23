document.querySelector('button').addEventListener('click', dataPut)
function dataPut()
{
  
      fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'Update',
          body: 'Hii I am put request getting updated',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((json) => console.log(json));
      document.getElementById("output").innerHTML = "Data Updated Succesfully!!!";
      
}
