             ///Task # 32 ///////
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

let current_users: string[] = ['Arsalan', 'Babar', 'daoud', 'Kumail', 'Wajahat'];

let new_users: string[] = ['Arsalan', 'Talha', 'Hamdan', 'Babar', 'Wajahat']; 

for (let new_username of new_users) {
    if (current_users.includes(new_username)) {
        console.log(`The username '${new_username}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${new_username}' is available.`);
    }
}
          
             