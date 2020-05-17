CREATE TABLE users (
	userId SERIAL PRIMARY KEY,
	username VARCHAR(120) NOT NULL,
	password VARCHAR(120) NOT NULL,
	firstName VARCHAR(60),
	lastName VARCHAR(120)
);

CREATE TABLE transactions (
	transactionsId SERIAL PRIMARY KEY,
	price INTEGER NOT NULL,
	location VARCHAR(120) NOT NULL,
	user_id INTEGER REFERENCES users (userId) NOT NULL
);

CREATE TABLE budget (
	budgetId SERIAL PRIMARY KEY,
	total_income INTEGER NOT NULL,
	monthly_fixed_costs INTEGER NOT NULL,
	investments INTEGER NOT NULL,
	savings INTEGER NOT NULL,
	spending INTEGER NOT NULL,
	user_id INTEGER REFERENCES users (userId) NOT NULL,
	transactions_id INTEGER REFERENCES transactions (transactionsId) NOT NULL
);