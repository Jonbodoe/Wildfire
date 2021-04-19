

// NOT REAL MIDDLEWARE, PLACEMENT FOR NOW UNTIL FINDING A MIDDLEWARE SOLUTION


const verifyLoginInfo = (info, logins) => {
    const { email, password } = info;
    const emailCheck = logins.filter(login => login.credientials.email === email);
    const [loginInfo] = emailCheck;
    if (!loginInfo) {
        return false
    }
    // console.log(emailCheck,loginInfo, 'logininfo')
    if (loginInfo.credientials.password === password) {
        return true
    } else {
        return false
    }
}

export default verifyLoginInfo;