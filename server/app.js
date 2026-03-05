const express = require('express');
const PORT = 3000
const app = express();
const userRouter = require('./Router/user.router');

app.use(express.json());
app.use("/users", userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})