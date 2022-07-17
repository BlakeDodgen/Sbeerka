import Cookie from 'js-cookie';

const SetCookie = (cookiename, agecheck) => {
    Cookie.set(cookiename, agecheck, {
        expires:1 ,
        secure: true,
        sameSite:'strict',
        path: '/'

    });
} 

export default SetCookie;