-- 1. Crear tabla de Empresas
CREATE TABLE IF NOT EXISTS empresas (
    id SERIAL PRIMARY KEY,
    nombre_negocio VARCHAR(150) NOT NULL,
    correo VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Crear tabla de Repartidores
CREATE TABLE IF NOT EXISTS repartidores (
    id SERIAL PRIMARY KEY,
    empresa_id INT NOT NULL,
    nombre_completo VARCHAR(150) NOT NULL,
    telefono VARCHAR(30) NOT NULL,
    tipo_vehiculo VARCHAR(50) NOT NULL,
    placas VARCHAR(20),
    estatus VARCHAR(30) DEFAULT 'Disponible',
    CONSTRAINT fk_empresa_repartidor FOREIGN KEY (empresa_id) REFERENCES empresas(id) ON DELETE CASCADE
);

-- 3. Crear tabla de Envíos / Pedidos
CREATE TABLE IF NOT EXISTS envios (
    id SERIAL PRIMARY KEY,
    empresa_id INT NOT NULL,
    repartidor_id INT NULL,
    cliente_nombre VARCHAR(150) NOT NULL,
    direccion TEXT NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    estatus VARCHAR(30) DEFAULT 'Pendiente',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_empresa_envio FOREIGN KEY (empresa_id) REFERENCES empresas(id) ON DELETE CASCADE,
    CONSTRAINT fk_repartidor_envio FOREIGN KEY (repartidor_id) REFERENCES repartidores(id) ON DELETE SET NULL
);