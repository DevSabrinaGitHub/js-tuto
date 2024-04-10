var div_usuarios= document.querySelector('#usuarios')
var usuarios= [];

/*una manera
fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => {
            return data.json()
      })
      .then(data => {
            usuarios= data;
            console.log(usuarios)
      })

*/


/*SEGUNDA MANERA CON MENOS CODIGO */
fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(users => {
            usuarios= users.data;
            console.log(usuarios);
      })




