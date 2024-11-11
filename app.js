const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
const passwordLength = 6;
let password = "";

for (let i = 0; i < passwordLength; i++) {
    let randomChar = characters[Math.floor(Math.random() * characters.length)];
    password += randomChar;
}
    document.write("Secure Password Generator :- <br>");
    document.write("Your Secure Password :" , password );

    
