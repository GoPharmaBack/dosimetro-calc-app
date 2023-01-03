import React, { useState, useEffect } from 'react'

function Calculadora () {
  const [clear, setClear] = useState(false)
  const [currentAltura, setCurrentAltura] = useState(0)
  const [currentPeso, setCurrentPeso] = useState(0)
  const [currentBsa, setCurrentBsa] = useState(0)
  const [currentDosis, setCurrentDosis] = useState(0)
  const [currentViales, setCurrentViales] = useState(0)

  useEffect(() => {
    document.querySelector('.result').value = '0'
  }, [])

  const Formula = (e) => {
    e.preventDefault()
    if (clear) setClear(false)
    const currentAltura = document.querySelector('#altura').value
    const currentPeso = document.querySelector('#peso').value
    const ajusteDosis = document.querySelector('#dosis').value
    const decimal = 0.7184
    const alturaParcial = Math.pow(currentAltura, 0.725)
    const pesoParcial = Math.pow(currentPeso, 0.425)

    const superficie = (alturaParcial * pesoParcial * decimal) / 100
    setCurrentBsa(superficie.toFixed(4))
    console.log(superficie)

    const dosis = parseFloat(superficie * ajusteDosis)
    setCurrentDosis(dosis.toFixed(4))

    console.log(dosis.toFixed(4))

    const vialesAjustados = (dosis * 1) / 1
    setCurrentViales(vialesAjustados.toFixed(4))
  }
  console.log(currentPeso)
  console.log(currentAltura)

  const Clear = (e) => {
    e.preventDefault()
    document.querySelector('form').reset()
    setClear(true)
    setCurrentAltura(0)
    setCurrentPeso(0)
    setCurrentDosis(0)
    setCurrentViales(0)
  }
  return (
    <>
      <section className='calculadora'>
        <form>
          <div className='contenedor-form'>
            <div className='bloque-rosa'>
              <div className='datos-usuario'>
                <div className='group-usuario'>
                  <label> Altura: </label>
                  <div>
                    <input
                      type='text'
                      id='altura'
                      placeholder='Ingresa la altura'
                    />
                    <p>cm</p>
                  </div>
                </div>

                <div className='group-usuario'>
                  <label> Peso: </label>
                  <div>
                    <input
                      type='text'
                      id='peso'
                      placeholder='Ingresa el peso'
                    />
                    <p> kg</p>
                  </div>
                </div>
              </div>
              <div className='group-usuario-ajuste'>
                <label>Seleccionar ajuste de dosis:</label>
                <select name='dosis' id='dosis'>
                  <option value='1.4'>1.4 mg/m2</option>
                  <option value='1.1'>1.1 mg/m2</option>
                  <option value='0.7'>0.7 mg/m2</option>
                </select>
              </div>
              <div className='botones-form'>
                <button onClick={Formula}>
                  <strong>Calcular dosis</strong>
                </button>

                <button onClick={Clear}>Borrar datos</button>
              </div>
            </div>

            <div className='bloque-azul'>
              <div className='datos-bsa'>
                <label> <strong>BSA</strong> (Superficie Corporal): </label>
                <div>
                  {' '}
                  <input
                    type='text'
                    className='result'
                    value={currentBsa}
                    readOnly
                  />
                  <p>
                    m<sup>2</sup>
                  </p>
                </div>
              </div>

              <div className='datos-viales'>
                <div className='caja-azul'>
                  <div className='grupo-viales'>
                    <label>Dosis: </label>
                    <div>
                      <input
                        type='text'
                        className='result'
                        value={currentDosis}
                        readOnly
                      />
                      mg
                    </div>
                  </div>
                  <div className='grupo-viales'>
                    <div className='titulo-viales'>
                      <span>No. de viales</span>
                      <label>por aplicación:</label>
                    </div>
                    <input
                      type='text'
                      className='result'
                      value={currentViales}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
      <section className='datos'>
        <div className='informacion'>
          <p className='titulo'>Información</p>
          <p className='parrafo'>
            Esta calculadora está basada en la fórmula clásica de DuBois y
            DuBois. <sup>1</sup>
          </p>
          <p>
            Se ha intentado que los cálculos sean lo más exactos posibles. Por
            supuesto, se encontrarán ligeras diferencias en las cifras si se
            comparan ambos, pero en general, escasamente significativas. La
            valoración es también similar: <sup>2</sup>
          </p>
          <section className='tabla'>
            <table>
              <tbody>
                <tr>
                  <td>
                    <strong>Normal</strong>
                  </td>
                  <td>
                    1.7 m<sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Media Varones</strong>
                  </td>
                  <td>
                    1.9 m<sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Media Mujeres</strong>
                  </td>
                  <td>
                    1.6 m<sup>2</sup>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <div className='frase'>
            <p>
              <strong>
                La dosis recomendada de Halaven<sup>®</sup> es 1.4 mg/m
                <sup>2</sup>{' '}
              </strong>
              debe ser administrada por vía intravenosa durante 2 a 5 minutos
              los días 1 y 8 de cada ciclo de 21 días.<sup>3</sup>
            </p>
          </div>

          <small>
            <strong>Referencias:</strong>
          </small>
          <small>
            1.- Dubois D, Dubois EF. A formula to estimate the approximate
            surface area if height and weight be known. Arch Intern Med. 1916;
            17:863-871.
          </small>
          <small>
            2.- Wang Y., Moss, J, Thisted R. Predictors of Body Surface Area. J
            Clin Anesth 1992; 4(1): 4-10.
          </small>
          <small>3.- Halaven-IPPA-193300423M0029-02dic2019.</small>
        </div>
        <div className='formulas'>
          <p className='titulo'>fórmulas</p>
          <div className='contenedor-formulas'>
            <div className='formula'>
              <p>
                Fórmula de DuBois y DuBois: <sup>1</sup>
              </p>
              <strong>
                BSA = 0.007184 x Peso <sup>0.425</sup> x altura <sup>0.725</sup>
              </strong>
            </div>
            <div className='formula'>
              <p>
                Fórmula para determinar dosis: <sup>2</sup>
              </p>
              <strong>
                {' '}
                Dosis = 1.4 mg/m<sup>2</sup>{' '}
              </strong>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Calculadora
