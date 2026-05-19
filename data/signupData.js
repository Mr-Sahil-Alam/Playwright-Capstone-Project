module.exports = [

    {
        name: "Sahil",
        email: "sahiltest1@gmail.com",
        expected: "success"
    },

    {
        name: "",
        email: "emptyname@gmail.com",
        expected: "failure"
    },


    {
        name: "Invalid Email",
        email: "wrongemail",
        expected: "failure"
    }

];