import { useState } from 'react';
import { addHours } from 'date-fns';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import { registerLocale } from  'react-datepicker';
import es from 'date-fns/locale/es';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale('es', es)

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {
    const [isOpen, setIsOpen] = useState( true );
    const [formValues, setFormValues] = useState({
        title: 'Fernando',
        notes: 'Santi',
        start: new Date(),
        end: addHours( new Date(), 2 )
    })            

    const onCloseModal = () => {
        console.log('cerrando modal');
        setIsOpen( false );
    }

    const onInputChanged = ({ target }) => {
        setFormValues({
            ...formValues,
            [ target.name ]: target.value
        });
    }

    const onDateChange = ( event, changing ) => {
        setFormValues({
            ...formValues,
            [ changing ]: event
        })
    }

    return (
        <Modal  className="modal"
                closeTimeoutMS={ 200 }
                isOpen={ isOpen }
                onRequestClose={ onCloseModal }
                overlayClassName="modal-fondo"
                style={ customStyles } >
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container">

                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label>
                    <DatePicker className='form-control'
                                dateFormat='Pp'
                                locale='es'
                                selected={ formValues.start }
                                showTimeSelect
                                timeCaption='Hora'
                                onChange={ (event) => onDateChange( event, 'start' )  } />
                </div>

                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label>
                    <DatePicker className='form-control'
                                dateFormat='Pp'
                                locale='es'
                                minDate={ formValues.start }
                                selected={ formValues.end }
                                showTimeSelect
                                timeCaption='Hora'
                                onChange={ (event) => onDateChange( event, 'end' )  } />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input  type="text" 
                            className="form-control"
                            placeholder="Título del evento"
                            name="title"
                            autoComplete="off"
                            value={ formValues.title }
                            onChange={ onInputChanged }
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group mb-2">
                    <textarea type="text" 
                              className="form-control"
                              placeholder="Notas"
                              rows="5"
                              name="notes"
                              value={ formValues.notes }
                              onChange={ onInputChanged }
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}
