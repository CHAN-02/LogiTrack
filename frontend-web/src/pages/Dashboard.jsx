import React from 'react';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] min-h-screen scroll-hide overflow-x-hidden font-['Inter',sans-serif]">
      {/* SIDE BAR NAVIGATION */}
      <aside className="bg-[#00324b] shadow-lg h-full w-64 fixed left-0 top-0 flex flex-col py-6 z-50" id="sidebar">
        <div className="px-6 mb-8 flex items-center gap-3">
          <img 
            alt="LogiTrack Logo" 
            className="w-10 h-10 object-contain" 
            src="https://lh3.googleusercontent.com/aida/AP1WRLsguqmHEnv8SbOjWuVYYJ5YJcCWLZwImwkftP40WBLQ5ZLdkT5Fp2MRoUEJNih1zSr9N-wTrPOyXYyb9dRRYGuXiqUhY9h6FaRRkNjH6CIPBOwcTNeoJ4mypntl2W0wvezniaz_2wukMD9ZhIHGRbR9IuQfmPtKkjjJHOJ6bRT5f8HksM_XwqdPcQ8QxmDDFqJRcCMAxK2tVd6ZYHqQ7Mc1bUTN1Gj0WOjfhqWeCPr_QqUEASzNAhv1FA"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-semibold text-white">LogiCommand</span>
            <span className="text-xs text-[#8eb8d8] opacity-80">Gestión de Flotas</span>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          <div className="font-bold py-3 duration-200 ease-in-out cursor-pointer hover:bg-[#1b4965] flex items-center gap-3 text-[#8eb8d8] pl-4 border-l-4 border-[#abedff]">
            <span className="material-symbols-outlined text-[#abedff]" style={{ fontVariationSettings: '"FILL" 1' }}>dashboard</span>
            <span className="text-sm font-semibold text-white">Panel Principal</span>
          </div>
          <div className="text-[#8eb8d8] pl-4 py-3 duration-200 ease-in-out cursor-pointer hover:bg-[#1b4965] flex items-center gap-3">
            <span className="material-symbols-outlined"></span>
            <span className="text-sm font-semibold">Envíos</span>
          </div>
          <div className="text-[#8eb8d8] pl-4 py-3 duration-200 ease-in-out cursor-pointer hover:bg-[#1b4965] flex items-center gap-3">
            <span className="material-symbols-outlined"></span>
            <span className="text-sm font-semibold">Flota</span>
          </div>
        </nav>

        <div className="mt-auto px-4 space-y-2">
          <button className="w-full bg-[#abedff] text-[#001f26] py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 shadow-md hover:brightness-110 transition-all active:scale-95">
            <span className="material-symbols-outlined"></span>
            Nuevo Pedido
          </button>
          <hr className="border-[#8eb8d8]/20 my-4" />
          <div className="text-[#8eb8d8] pl-4 py-2 duration-200 ease-in-out cursor-pointer hover:bg-[#1b4965] flex items-center gap-3">
            <span className="material-symbols-outlined text-[#ba1a1a]"></span>
            <span className="text-sm font-semibold text-[#8eb8d8]">Cerrar Sesión</span>
          </div>
        </div>
      </aside>

      {/* TOP NAV BAR */}
      <header className="flex justify-between items-center px-8 h-16 w-[calc(100%-256px)] ml-64 bg-[#f8f9fa] border-b border-[#c1c7ce] sticky top-0 z-40">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative w-96 max-w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#72787e]"></span>
            <input 
              className="w-full bg-[#f3f4f5] border border-[#c1c7ce] rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-[#00324b] focus:border-[#00324b] transition-all outline-none" 
              placeholder="Buscar envíos, vehículos o rutas..." 
              type="text" 
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <button className="text-[#41474d] hover:text-[#00324b] transition-all cursor-pointer relative flex items-center">
              <span className="material-symbols-outlined"></span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-[#ba1a1a] rounded-full"></span>
            </button>
          </div>
          <div className="h-8 w-px bg-[#c1c7ce] mx-2"></div>
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-[#1b4965] flex items-center justify-center text-white overflow-hidden ring-2 ring-transparent group-hover:ring-[#00324b] transition-all">
              <span className="material-symbols-outlined"></span>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT CANVAS */}
      <main className="ml-64 p-6 min-h-[calc(100vh-64px)] bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto space-y-6">
          
          {/* HEADER INFO */}
          <div className="flex justify-between items-end mb-4">
            <div>
              <h1 className="text-3xl font-bold text-[#00324b]">Vista de Operaciones</h1>
              <p className="text-base text-[#41474d]">Monitoreo en tiempo real de logística y entregas</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-[#e1e3e4] px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-[#edeeef] transition-colors border border-[#c1c7ce]">
                <span className="material-symbols-outlined text-sm"></span>
                Hoy
              </button>
              <button className="bg-[#00324b] text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity shadow-md">
                <span className="material-symbols-outlined text-sm"></span>
                Exportar Reporte
              </button>
            </div>
          </div>

          {/* METRIC CARDS - Bento Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-[0px_4px_12px_rgba(27,73,101,0.05)] border border-[#edeeef] hover:shadow-lg transition-shadow group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-[#a1cced]/20 rounded-lg text-[#00324b]">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}></span>
                </div>
                <span className="text-green-600 bg-green-50 px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]"></span>
                  +12%
                </span>
              </div>
              <p className="text-[#41474d] text-sm font-semibold mb-1">Pedidos Totales (Hoy)</p>
              <h3 className="text-3xl font-bold text-[#00324b]"></h3>
              <div className="mt-4 h-1 w-full bg-[#edeeef] rounded-full overflow-hidden">
                <div className="h-full bg-[#1b4965] w-[0%]"></div>
              </div>
              <p className="mt-2 text-xs font-medium text-[#72787e]">Meta diaria en progreso</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-[0px_4px_12px_rgba(27,73,101,0.05)] border border-[#edeeef] hover:shadow-lg transition-shadow group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-[#97e9ff]/20 rounded-lg text-[#00687a]">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}></span>
                </div>
                <span className="text-amber-600 bg-amber-50 px-2 py-1 rounded text-xs font-bold">En Ruta</span>
              </div>
              <p className="text-[#41474d] text-sm font-semibold mb-1">Pedidos Activos (En ruta)</p>
              <h3 className="text-3xl font-bold text-[#00687a]"></h3>
              <div className="mt-4 flex gap-1">
                <div className="h-1 flex-1 bg-[#00687a] rounded-full"></div>
                <div className="h-1 flex-1 bg-[#00687a] rounded-full"></div>
                <div className="h-1 flex-1 bg-[#00687a] rounded-full"></div>
              </div>
              <p className="mt-2 text-xs font-medium text-[#72787e]">Monitoreo activo de flota</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-[0px_4px_12px_rgba(27,73,101,0.05)] border border-[#edeeef] hover:shadow-lg transition-shadow group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-[#c0ebea]/40 rounded-lg text-[#053434]">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}></span>
                </div>
                <button className="text-[#72787e] hover:text-[#00324b] transition-colors flex items-center">
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
              </div>
              <p className="text-[#41474d] text-sm font-semibold mb-1">Efectivo Estimado en Ruta</p>
              <h3 className="text-3xl font-bold text-[#244d4d]"></h3>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-[#d9dadb]"></div>
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-[#72787e]"></div>
                </div>
                <span className="text-xs font-medium text-[#72787e]"></span>
              </div>
              <p className="mt-2 text-xs font-medium text-[#72787e]">Liquidación programada</p>
            </div>
          </div>

          {/* RECENT SHIPMENTS TABLE */}
          <div className="bg-white rounded-xl shadow-[0px_4px_12px_rgba(27,73,101,0.05)] border border-[#edeeef]">
            <div className="px-6 py-4 border-b border-[#edeeef] flex items-center justify-between">
              <h3 className="text-xl font-semibold text-[#00324b]">Últimos Envíos</h3>
              <button className="text-[#00324b] hover:underline text-sm font-semibold">Ver todos</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#f3f4f5]">
                  <tr>
                    <th className="px-6 py-3 text-sm font-semibold text-[#72787e] uppercase tracking-wider">ID Envío</th>
                    <th className="px-6 py-3 text-sm font-semibold text-[#72787e] uppercase tracking-wider">Cliente</th>
                    <th className="px-6 py-3 text-sm font-semibold text-[#72787e] uppercase tracking-wider">Destino</th>
                    <th className="px-6 py-3 text-sm font-semibold text-[#72787e] uppercase tracking-wider">Estado</th>
                    <th className="px-6 py-3 text-sm font-semibold text-[#72787e] uppercase tracking-wider">Conductor</th>
                    <th className="px-6 py-3 text-sm font-semibold text-[#72787e] uppercase tracking-wider text-right">Monto</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#edeeef]">
                  <tr className="hover:bg-[#ffffff] transition-colors cursor-pointer group">
                    <td colSpan="6" className="px-6 py-6 text-center text-sm text-[#72787e]">
                      No hay envíos registrados todavía. Conecta tu API para cargar los datos de forma dinámica.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>

      {/* FLOATING ACTION BUTTON */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-[#abedff] text-[#001f26] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined text-[32px]"></span>
      </button>
    </div>
  );
}