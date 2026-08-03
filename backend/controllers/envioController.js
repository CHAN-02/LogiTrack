const Envio = require('../../src/models/envioModel');

const crearEnvio = async (req, res) => {
    try {
        const { empresa_id, cliente_nombre, direccion, total } = req.body;
        const nuevoEnvio = await Envio.crear({ empresa_id, cliente_nombre, direccion, total });
        res.status(201).json({
            message: 'Envío registrado exitosamente',
            data: nuevoEnvio
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { crearEnvio };