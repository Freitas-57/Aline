// Função para buscar usuários da API
function fetchUsers() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          reject('Erro ao obter os dados da API'); // Rejeitar a promise se houver erro na requisição
        }
        return response.json(); // Converter a resposta para JSON
      })
      .then((data) => {
        resolve(data); // Resolver a promise com os dados
      })
      .catch((error) => {
        reject(error); // Rejeitar a promise em caso de erro
      });
  });
}
// Consumindo a promise com then e catch


function popularUsuarios(users) {
  content.innerHTML = '';
  users.forEach((usuario) => {
    const listenItem = document.createElement('li');
    listenItem.innerHTML = ` 
          <p><strong>Nome:</strong> ${usuario.name}</p> 
          <p><strong>Email:</strong> ${usuario.email}</p> 
          <p><strong>Telefone:</strong> ${usuario.phone}</p> 
          <p><strong>Website:</strong> ${usuario.website}</p> 
          <p><strong>Empresa:</strong> ${usuario.company}</p> 
          </div>
      `;
      content.appendChild(listenItem);
  });
}

btnUsuarios.onclick = (() => {
  fetchUsers()
    .then((users) => {
      console.log('Usuários:', users);
      popularUsuarios(users)
    })
    .catch((error) => {
      console.error('Erro:', error); // Exibe o erro, se houver
    });
})