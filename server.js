const express = require('express');
const path = require('path');
const errorHandler = require('./middleware/errorHandler');
const bookRoutes = require('./routes/books');

const app = express();

// ── Middleware ──────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Static Files ────────────────────────────────────────────
app.use(express.static(path.join(__dirname)));

// ── API Routes ──────────────────────────────────────────────
app.use('/books', bookRoutes);

// ── 404 Handler ─────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// ── Central Error Handler ───────────────────────────────────
app.use(errorHandler);

// ── Start Server ────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Library API running on http://localhost:${PORT}`);
  console.log(`📚 Total books loaded: 1000`);
});
