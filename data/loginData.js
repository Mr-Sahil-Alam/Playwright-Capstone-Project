module.exports = [

    {
        email: "validuser@gmail.com",
        password: "valid123",
        expected: "success"
    },

    {
        email: "wronguser@gmail.com",
        password: "wrong123",
        expected: "failure"
    },

    {
        email: "",
        password: "test123",
        expected: "failure"
    },

    {
        email: "test@gmail.com",
        password: "",
        expected: "failure"
    }

];