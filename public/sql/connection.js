import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "vozes_da_rua",
  waitForConnections: true,
  connectionLimit: 10,
};

const pool = mysql.createPool(dbConfig);

app.use(express.static(path.join(__dirname, '../public/sql')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, ''));
});

app.post('/api/doacoes', async (req, res) => {
  try {
    const {
      nome,
      email,
      telefone,
      forma_pagamento,
      valor,
      voluntario
    } = req.body;

    if (!nome || !email || !telefone || !forma_pagamento || valor == null) {
      return res.status(400).json({ error: 'Campos obrigatórios ausentes' });
    }

    const [userResult] = await pool.execute(
      `INSERT INTO users (user_name, email, phone) VALUES (?, ?, ?)`,
      [nome, email, Number(telefone)]
    );


    const [doacaoResult] = await pool.execute(
      `INSERT INTO doacoes (forma_pagamento, valor, voluntario)
       VALUES (?, ?, ?)`,
      [forma_pagamento, valor, voluntario]
    );

    res.status(201).json({
      success: true,
      userId: userResult.insertId,
      doacaoId: doacaoResult.insertId,
      message: 'Registro realizado com sucesso'
    });
  } catch (error) {
    console.error('Erro no insert:', error);
    res.status(500).json({ error: 'Falha ao registrar dados' });
  }
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log('Database connection pool created successfully.');
});