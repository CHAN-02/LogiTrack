import React, { useState } from 'react';

export default function Login() {
    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h2>LogiTrack - Acceso Administrativo</h2>
            <form>
                <div>
                    <input type="email" placeholder="Correo electrónico" required />
                </div>
                <div style={{ marginTop: '1rem' }}>
                    <input type="password" placeholder="Contraseña" required />
                </div>
                <button type="submit" style={{ marginTop: '1rem' }}>Ingresar</button>
            </form>
        </div>
    );
}