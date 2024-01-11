export const checkValidations = (name="",email,password) => {
    const nameRegex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
    if(name){
        if(!nameRegex.test(name)){
        return "Name is not Valid";
        } 
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    if(!emailRegex){
     return "Email Id is not Valid";
    }
    const passwordRegex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!passwordRegex){
        return "Password is not Valid";
    }

    return null;
}
