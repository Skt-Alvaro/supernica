export const getProducts = async () => {
    const url = "http://127.0.0.1:8000/api/products";
    const req = await fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
        },
    });
    const { response } = await req.json();
    return response;
};
