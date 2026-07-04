function registerUser(
    username: string,
    email: string,
    role: string = "User",
    phone?: string
): void {
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Role:", role);
    console.log("Phone:", phone);
}

registerUser("Shams", "shams@example.com");

registerUser(
    "Ali",
    "ali@example.com",
    "Admin"
);

registerUser(
    "Rahul",
    "rahul@example.com",
    "Moderator",
    "9876543210"
);
function printNumbers(...numbers: number[]) {
    console.log(numbers);
}

printNumbers(10, 20, 30,40);