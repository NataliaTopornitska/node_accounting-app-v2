'use strict';

const express = require('express');
const { resetExpenses } = require('./services/expenses.service');
const { usersRouter } = require('./routes/usersRoute');
const { expensesRouter } = require('./routes/expensesRoute');
const { resetUsers } = require('./services/users.service');

function createServer() {
  const app = express();

  resetUsers();
  resetExpenses();

  app.use(express.json());

  app.use('/users', usersRouter);
  app.use('/expenses', expensesRouter);

  return app;
}

module.exports = {
  createServer,
};
