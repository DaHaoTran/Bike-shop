const postToGGSheets = async (res) => {
    // Read the body as text (since you're sending x-www-form-urlencoded)
    const res = await fetch(res.url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: res.body
    });
    return res;
}

export { postToGGSheets }