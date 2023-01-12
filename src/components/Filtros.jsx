import { useState, useEffect } from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className="filtros sombra contenedor">
        <form >
            <div className="campo">
                <label>Filtrar gastos</label>
                <select
                    value={filtro}
                    onChange={e=> { setFiltro(e.target.value)}}
                >
                    <option value="">-- Todas las categorías --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="alimentos">Alimentos</option>
                    <option value="casa">Casa</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                    <option value="varios">Gastos Varios</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filtros