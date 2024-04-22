function Validation(value) {
    let errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (value.email === "") {
        errors.email = "Email should not be empty";
    } else if (!emailPattern.test(value.email)) {
        errors.email = "Invalid email format";
    } else {
        errors.email = "";
    }

    if (value.password === "") {
        errors.password = "Password should not be empty";
    } else if (!passwordPattern.test(value.password)) {
        errors.password = "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit";
    } else {
        errors.password = "";
    }

    return errors;
}

export default Validation;
