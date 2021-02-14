export const logout = async (props) => {
    const url = "http://127.0.0.1:8000/api/users/logout";
    const req = await fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${props.token}`,
        },
    });
    const res = await req.json();
    return res;
};
