console.log("index.js is loaded")

function getUserInfo() {

    const userId = getUserId()

    fetch(`https://api.github.com/users/${userId}`)
        .then(response => {
            console.log(response.status)

            // get error response?
            if (!response.ok) {
                console.error("サーバエラーやで", response)
            }
            else {
                response.json().then(userInfo => {
                    // get JSON parsed object
                    console.log(userInfo)

                    //受け取ったものをHTMLに組み立てる
                    const view = createView(userInfo)
                    //DOMに入れる
                    displayView(view)
                })
            }
        }).catch(error => {
            console.error("ネットワークエラーやで", error)
        })
};

function getUserId() {
    const value = document.getElementById("userId").value
    return encodeURIComponent(value)
}

function escapeSpecialChars(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function escapeHTML(strings, ...values) {
    return strings.reduce((result, str, i) => {
        const value = values[i - 1];
        if (typeof value === "string") {
            return result + escapeSpecialChars(value) + str;
        }
        else {
            return result + String(value) + str;
        }
    });
}

function createView(userInfo) {
    return escapeHTML `
        <h4>${userInfo.name} (@${userInfo.login})</h4>
        <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
        <dl>
            <dt>Location</dt>
            <dd>${userInfo.location}</dd>
            <dt>Repositories</dt>
            <dd>${userInfo.public_repos}</dd>
        </dl>
        `;
}

function displayView(view) {
    const result = document.getElementById("result");
    result.innerHTML = view
}
