const pool = require('../config/db');

const Envio = {
    async crear({ empresa_id, cliente_nombre, direccion, total }) {
        const query = `
            INSERT INTO envios (empresa_id, cliente_nombre, direccion, total) 
            VALUES ($1, $2, $3, $4) 
            RETURNING id, empresa_id, cliente_nombre, direccion, total, estatus, created_at;
        `;
        const values = [empresa_id, cliente_nombre, direccion, total];
        const result = await pool.query(query, values);
        return result.rows[0];
    }
};

module.exports = Envio;