let user = {
    name: "Ruslan",
    age: 20,
}
console.log("loading")
let promise = new Promise(
    function (resolve) {
        let jsonData = JSON.stringify(user);
        resolve(jsonData)
    })
    .then(function (res) {
        setTimeout(function () {
            console.log("loading")
        }, 100)
        setTimeout(function () {
            let newobject = JSON.parse(res)
            console.log(newobject)
        }, 2000)
    })
    .catch((err) => {
        console.log("error")
    })