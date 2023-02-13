import axiosClient from "../../config/axios/axiosClient";

export const login = async (email, password) => {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    try {
        const res = await axiosClient.post('post', {
            email: email,
            password: password
        })
        // localStorage.setItem('userToken', res.token)
        return true;
    }
    catch (err) {
        console.log(err);
        localStorage.setItem('userToken', token)

        //fake test API
        return true;
    }
}
