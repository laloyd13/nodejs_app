const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
<html>
  <head>
    <title>Simple App</title>
    <style>
      body {
        font-family: sans-serif;
        background: #0b1120;
        color: #e5e7eb;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        text-align: center;
        margin: 0;
      }
      .card {
        background: #111827;
        padding: 2rem;
        border-radius: 1rem;
        max-width: 400px;
        width: 100%;
      }
      .name {
        font-size: 1.8rem;
        font-weight: bold;
      }
      .section {
        color: #9ca3af;
        margin: 0.5rem 0 1rem 0;
      }
      blockquote {
        font-style: italic;
        color: #d1d5db;
        margin: 0;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="name">Jhon Lloyd B. Saludes</div>
      <div class="section">BSIT NT 4101</div>
      <blockquote>“The expert in anything was once a beginner.”</blockquote>
    </div>
  </body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
