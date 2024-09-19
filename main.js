let users = [
    {
        nameOfUser: "Elvin",
        password: "123"
    },
    {
        nameOfUser: "Mikyail",
        password: "123"
    },
    {
        nameOfUser: "Aylin",
        password: "123"
    },
    {
        nameOfUser: "Meleyke",
        password: "123"
    },
]


$("#loginBtn").click(function () {
    let input1 = document.getElementById("validationCustom01")
    let input2 = document.getElementById("validationCustom02")

    users.forEach(user => {
        if (user.nameOfUser === input1.value && user.password === input2.value ) {
            alert("User is logged in")
        }

    })

})