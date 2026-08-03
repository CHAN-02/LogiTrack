import React, { useState } from 'react';
import './login.css';

export default function login() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <main className="w-full max-w-[440px] animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="auth-card bg-white rounded-xl overflow-hidden border border-[#c1c7ce]">
          
          {/* Card Header: Logo Area */}
          <div className="px-6 pt-12 pb-6 flex flex-col items-center">
            <img 
              alt="LogiTrack Logo" 
              className="h-20 w-auto mb-4 object-contain" 
              src="https://lh3.googleusercontent.com/aida/AP1WRLsguqmHEnv8SbOjWuVYYJ5YJcCWLZwImwkftP40WBLQ5ZLdkT5Fp2MRoUEJNih1zSr9N-wTrPOyXYyb9dRRYGuXiqUhY9h6FaRRkNjH6CIPBOwcTNeoJ4mypntl2W0wvezniaz_2wukMD9ZhIHGRbR9IuQfmPtKkjjJHOJ6bRT5f8HksM_XwqdPcQ8QxmDDFqJRcCMAxK2tVd6ZYHqQ7Mc1bUTN1Gj0WOjfhqWeCPr_QqUEASzNAhv1FA" 
            />
            <p className="text-[14px] leading-[20px] text-[#41474d] text-center px-4">
              Gestión inteligente de flotas y logística de última milla.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-[#c1c7ce] px-6">
            <button 
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-4 text-center transition-all text-[14px] leading-[16px] tracking-[0.05em] ${
                activeTab === 'login' ? 'tab-active' : 'tab-inactive'
              }`}
            >
              Iniciar Sesión
            </button>
            <button 
              onClick={() => setActiveTab('register')}
              className={`flex-1 py-4 text-center transition-all text-[14px] leading-[16px] tracking-[0.05em] ${
                activeTab === 'register' ? 'tab-active' : 'tab-inactive'
              }`}
            >
              Registrarse
            </button>
          </div>

          {/* Tab Content: Login */}
          {activeTab === 'login' && (
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <label className="block text-[14px] leading-[16px] tracking-[0.05em] font-semibold text-[#191c1d]">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <span translate="no" className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#72787e] text-[20px]">
                    mail
                  </span>
                  <input 
                    type="email" 
                    placeholder="ejemplo@logitrack.com" 
                    className="w-full pl-12 pr-4 py-3 bg-white border border-[#c1c7ce] rounded-lg focus:ring-2 focus:ring-[#1b4965]/10 focus:border-[#00324b] outline-none transition-all text-[16px] leading-[24px]" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[14px] leading-[16px] tracking-[0.05em] font-semibold text-[#191c1d]">
                  Contraseña
                </label>
                <div className="relative">
                  <span translate="no" className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#72787e] text-[20px]">
                    
                  </span>
                  <input 
                    type="password" 
                    placeholder="" 
                    className="w-full pl-12 pr-4 py-3 bg-white border border-[#c1c7ce] rounded-lg focus:ring-2 focus:ring-[#1b4965]/10 focus:border-[#00324b] outline-none transition-all text-[16px] leading-[24px]" 
                  />
                </div>
              </div>

              <div className="flex items-center justify-between py-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 text-[#00324b] border-[#c1c7ce] rounded focus:ring-[#00324b]" 
                  />
                  <span className="text-[14px] leading-[20px] text-[#41474d]">Recordarme</span>
                </label>
                <a href="#" className="text-[14px] leading-[20px] text-[#00687a] hover:underline transition-all">
                  ¿Olvidó su contraseña?
                </a>
              </div>

              <button className="w-full bg-[#1b4965] text-white py-4 rounded-lg text-[14px] leading-[16px] tracking-[0.05em] font-semibold hover:opacity-90 active:scale-[0.98] transition-all shadow-md mt-4">
                Entrar
              </button>
            </div>
          )}

          {/* Tab Content: Register */}
          {activeTab === 'register' && (
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <label className="block text-[14px] leading-[16px] tracking-[0.05em] font-semibold text-[#191c1d]">
                  Nombre del Negocio
                </label>
                <div className="relative">
                  <span translate="no" className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#72787e] text-[20px]">
                    
                  </span>
                  <input 
                    type="text" 
                    placeholder="Nombre de su empresa" 
                    className="w-full pl-12 pr-4 py-3 bg-white border border-[#c1c7ce] rounded-lg focus:ring-2 focus:ring-[#1b4965]/10 focus:border-[#00324b] outline-none transition-all text-[16px] leading-[24px]" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[14px] leading-[16px] tracking-[0.05em] font-semibold text-[#191c1d]">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <span translate="no" className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#72787e] text-[20px]">
                    
                  </span>
                  <input 
                    type="email" 
                    placeholder="ejemplo@empresa.com" 
                    className="w-full pl-12 pr-4 py-3 bg-white border border-[#c1c7ce] rounded-lg focus:ring-2 focus:ring-[#1b4965]/10 focus:border-[#00324b] outline-none transition-all text-[16px] leading-[24px]" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[14px] leading-[16px] tracking-[0.05em] font-semibold text-[#191c1d]">
                  Contraseña
                </label>
                <div className="relative">
                  <span translate="no" className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#72787e] text-[20px]">
                    
                  </span>
                  <input 
                    type="password" 
                    placeholder="Mínimo 8 caracteres" 
                    className="w-full pl-12 pr-4 py-3 bg-white border border-[#c1c7ce] rounded-lg focus:ring-2 focus:ring-[#1b4965]/10 focus:border-[#00324b] outline-none transition-all text-[16px] leading-[24px]" 
                  />
                </div>
              </div>

              <p className="text-[14px] leading-[20px] text-[#41474d] pt-2">
                Al crear una cuenta, acepta nuestros <a href="#" className="text-[#00687a] hover:underline">Términos de Servicio</a> y <a href="#" className="text-[#00687a] hover:underline">Política de Privacidad</a>.
              </p>

              <button className="w-full bg-[#1b4965] text-white py-4 rounded-lg text-[14px] leading-[16px] tracking-[0.05em] font-semibold hover:opacity-90 active:scale-[0.98] transition-all shadow-md mt-4">
                Crear Cuenta
              </button>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}