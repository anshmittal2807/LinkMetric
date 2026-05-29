 export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}   

 export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

 export const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
    return usernameRegex.test(username);
}

 export const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
}   

export const validateFormData = (name, username, email, password) => {
    if (!validateName(name)) {
        return { isValid: false, message: 'Invalid name' };
    }
    if (!validateUsername(username)) {
        return { isValid: false, message: 'Invalid username' };
    }
    if (!validateEmail(email)) {
        return { isValid: false, message: 'Invalid email' };
    }
    if (!validatePassword(password)) {
        return { isValid: false, message: 'password must contain at least one uppercase letter, one lowercase letter, one number, and one special character' };
    }
    return { isValid: true, message: 'All fields are valid' };      

};
