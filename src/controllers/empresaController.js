const Empresa = require('../models/empresaModel');

const registrarEmpresa = async (req, res) => {
    try {
        const { nombre_negocio, correo, password } = req.body;
        const nuevaEmpresa = await Empresa.crear({ nombre_negocio, correo, password });
        res.status(201).json({
            message: 'Empresa registrada exitosamente',
            data: nuevaEmpresa
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { registrarEmpresa };