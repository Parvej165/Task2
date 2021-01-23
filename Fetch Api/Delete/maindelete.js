
function delData(fetchedData)
{
  fetchedData();
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  });
}
function fetchedData() {
  console.log("Deleted data is : ")
  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json())
  .then((data) => {
    console.log(data);
  } )
}
delData(fetchedData);