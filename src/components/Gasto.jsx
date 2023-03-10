import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"
import { formatDate } from '../helpers';

import IconoAhorro from '../img/icono_ahorro.svg'
import IconoAlimentos from '../img/icono_comida.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'
import IconoGastos from '../img/icono_gastos.svg'

const diccionarioIconos = {
    ahorro: IconoAhorro,
    alimentos: IconoAlimentos,
    casa:IconoCasa,
    salud: IconoSalud,
    suscripciones: IconoSuscripciones,
    varios: IconoGastos
}
const Gasto = ({gasto, setGastoEditar, eliminarGasto}) => {

    const {categoria, nombre, cantidad, fecha, id} = gasto;

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setGastoEditar(gasto)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction 
                onClick={() => eliminarGasto(id)}
                destructive={true}
            >
                Borrar
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className='gasto sombra'>
                    <div className="contenido-gasto">
                        <img 
                            src={diccionarioIconos[categoria]}
                            alt='Icono gasto' 
                        />
                        <div className="descripcion-gasto">
                            <p className="categoria">
                                {categoria}
                            </p>
                            <p className="nombre-gasto">{nombre}</p>
                            <p className="fecha-gasto">
                                Agregado el: {''}
                                <span>{formatDate(fecha)}</span>
                            </p>
                            
                        </div>
                    </div>
                    <p className="cantidad-gasto">${cantidad}</p>
                </div>
            </SwipeableListItem>
           
        </SwipeableList>
    )
}

export default Gasto