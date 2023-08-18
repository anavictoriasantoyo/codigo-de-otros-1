/* 
1.-La función displayUser está utilizando await sin ser parte de una función async. Esto causa un error de sintaxis.

2.-La respuesta de la petición fetch no se está bien procesada. Debe usarse response.json() para obtener los datos de la respuesta. Además, estos datos deben ser asignados a una variable antes de ser utilizados.

3.-Las propiedades name, blog y location no están siendo accedidas correctamente en las líneas $n.textContent = '${data.name}';, etc. Deberían ser reemplazadas por data.name, etc. 

4.-Las variables $n, $b, y $l están incorrectas para seleccionar elementos del DOM. ejemplo, el selector 'name' no va hacia ningún elemento.*/


const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();
  $n.textContent = data.name;
  $b.textContent = data.blog;
  $l.textContent = data.location;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError);