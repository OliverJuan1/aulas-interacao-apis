fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        const container = document.querySelector("#container")
       

        const cardUser = users.map(item => {
            return `
            <div class= "card">
                <img src="https://placehold.co/600x400" alt= ${item.name}/>
                <h2>${item.name}</h2>

                <p>Username: ${item.username}</p>
                <p>Email: ${item.email}</p>
                <p>Telefone: ${item.phone}</p>
                <p>Website: ${item.website}</p>
                <p>Empresa: ${item.company}</p>
                <p>Endereço: ${item.address.street}, ${item.address.suite}, ${item.address.city}</p>
                
                
            </div>
        `
        })

        container.innerHTML = cardUser.join("")

    })