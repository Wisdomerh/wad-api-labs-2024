import dotenv from 'dotenv';
import express from 'express';
import tasksRouter from './api/tasks';
import './db';
import usersRouter from './api/users';

dotenv.config();

const app = express();

const port = process.env.PORT;

// Middleware to parse JSON
app.use(express.json());

// Define the error handler middleware
const errHandler = (err, req, res, next) => {
  /* If the error is in development then send the stack trace, 
     if in production then just send the error message */
  if (process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(
    `Hey!! You caught the error 👍👍. Here's the details: ${err.stack}`
  );
};

// Routes
app.use('/api/tasks', tasksRouter);
app.use('/api/users', usersRouter);

// Use the error handler
app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
