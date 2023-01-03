import React from 'react'

import LogoEisai from './assets/img/eisai-logo.png'
import LogoHalven from './assets/img/halaven.png'
import Calculadora from './components/Calculadora'

function App () { // This is a function component
  return (
    <div className='App'>
      <header>
        <h1>
          Dosímetro <strong>Eribulina</strong>
        </h1>
      </header>
      <div className='app-contenedor'>
        <Calculadora />

        <section className='logos-footer'>
          <img src={LogoEisai} alt='logo-eisai' />
          <img src={LogoHalven} alt='logo-halaven' />
        </section>
        <div className='color'></div>
        <small className='crc'>
          <span>CRC:</span> HAL844-22. <span>Aviso Cofepris No.</span>{' '}
          213300202C8894/213300202C8897.
        </small>
        <small className='legales'>
          Toda la información contenida y generada por el sistema de Eisai
          Laboratorios S. de R.L. de C.V. se ofrece únicamente para fines
          educativos.
        </small>
        <small className='legales'>
          Esta información no debe emplearse para el diagnóstico o tratamiento
          de ninguna enfermedad o problema de salud.
        </small>
        <small className='legales'>
          <strong>
            EL PROPÓSITO DE ESTA INFORMACIÓN NO ES SUSTITUIR EL CRITERIO CLÍNICO
            NI ORIENTAR SOBRE EL TRATAMIENTO DE PACIENTES INDIVIDUALES DE NINGÚN
            MODO.
          </strong>
        </small>
      </div>
    </div>
  )
}

export default App
