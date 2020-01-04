module.exports = {
    validateUser
}

function validateUser(user){

    let errors = [];

    if(!user.username || user.username.length < 5 ){
    errors.push('Your Username must be at LEAST 5 characters.')
    }
    

    if(!user.password || user.password.length < 8){
    errors.push('Your Password must be at lease 8 characters long!!')
    }
    

    return {
        isSuccessful: errors.length > 0 ? false: true,
        errors
    }
}