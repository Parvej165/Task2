document.querySelector('button').addEventListener('click',function()
{

  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'I am updating only title',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((json) => console.log(json));
  document.getElementById("output").innerHTML = "Data Patched Successfully!!!";
}
);
