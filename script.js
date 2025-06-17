
console.log("Hello, World!");

document.getElementById("submit").onclick = function(event) {
    event.preventDefault(); // Prevent form submission
    let userName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userColor = document.getElementById("color").value;
    const users = {
        name: userName,
        email: userEmail,
        color: userColor
    }

    localStorage.setItem(userName, JSON.stringify(users));

    // Clear form

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("color").value = "";


    // View all users
    showAllUsers();
}

showAllUsers = () => {
    // Clear the current list
    const userList = document.getElementById("user-list");

    userList.innerHTML = "";

    // Use a Loop in localStorage to view all users
    for (let i =0; i < localStorage.length; i++){
        // First get the key of localStorage
        const key = localStorage.key(i);
        const userData = JSON.parse(localStorage.getItem(key));
        // Create a new row for the user
        const row = document.createElement("tr");
        row.innerHTML = 
            `<td>${userData.name}</td>
             <td>${userData.email}</td>
             <td>${userData.color}</td>
             <td>
                 <button onclick="editUser('${userData.name}')">Edit</button>
                 <button onclick="deleteUser('${userData.name}')">Delete</button>
             </td>`;

        userList.appendChild(row);
    }
}

showAllUsers();

// Function to delete a user
deleteUser =(name) =>{
    localStorage.removeItem(name);
    showAllUsers();
}

// Function to edit a user

editUser = (name) =>{
    const userData = JSON.parse(localStorage.getItem(name));

    document.getElementById("name").value = userData.name;
    document.getElementById("email").value = userData.email;
    document.getElementById("color").value = userData.color;
}
