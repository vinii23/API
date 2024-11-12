async function fetchUser() {
    try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const user = data.results[0];
        
        // Construindo o conteúdo para exibir
const userInfo = `
            <img src="${user.picture.large}" alt="Foto de ${user.name.first}" />
            <h2>${user.name.first} ${user.name.last}</h2>
            <p><strong>Gênero:</strong> ${user.gender}</p>
            <p><strong>Idade:</strong> ${user.dob.age}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Localização:</strong> ${user.location.city}, ${user.location.country}</p>
        `;
document.getElementById("user-info").innerHTML = userInfo;
    } catch (error) {
        document.getElementById("user-info").innerHTML = "<p>Não foi possível carregar o usuário. Tente novamente.</p>";
    }
}
gym-dvny-rra