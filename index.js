const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Update these paths to match your file names
const userRoutes = require('./routes/users');
const expenseRoutes = require('./routes/expenses');
const incomeRoutes = require('./routes/income');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Expense Tracker API',
        endpoints: {
            users: '/users',
            expenses: '/expenses',
            income: '/income'
        }
    });
});

// Routes
app.use('/users', userRoutes);
app.use('/expenses', expenseRoutes);
app.use('/income', incomeRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});