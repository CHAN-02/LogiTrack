const pool = require('../config/db');

const Empresa = {
    async crear({ nombre_negocio, correo, password }) {
        const query = `
            INSERT INTO empresas (nombre_negocio, correo, password) 
            VALUES ($1, $2, $3) 
            RETURNING id, nombre_negocio, correo, created_at;
        `;
        const values = [nombre_negocio, correo, password];
        const result = await pool.query(query, values);
        return result.rows[0];
    }
};

module.exports = Empresa;