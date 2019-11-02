export default class FetchAsync {
    // get
    static getFatch(url2) {
        let geturl = url2;
        return new Promise((resolve, reject) => {
                var url1 = 'http://127.0.0.1:3000/' + geturl;
                fetch(url1, {
                    method: 'GET',
                    header: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Token': localStorage.getItem('token')
                    },
                }).then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        reject({status: response.status})
                    }
                }).then((res) => {
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
            }
        )
    }

    // post
    static postFatch(url2, params,_this) {
        // window.console.log("555");
        var url1 = 'http://127.0.0.1:3000/' + url2;
        return new Promise((resolve, reject) => {
                fetch(url1, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                        'Token': localStorage.getItem('token')
                    },
                    body: JSON.stringify(params)
                }).then(response => response.json()).then((res) => {
                    resolve(res);
                    window.console.log(res);
                    localStorage.setItem("Authorization",res.Token);
                    _this.$router.push('/home');
                }).catch((err) => {
                    reject(err)
                });
            }
        )
    }
}
