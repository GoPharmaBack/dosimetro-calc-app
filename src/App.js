import React from "react";

import LogoEisai from './assets/img/eisai-logo.png'
import LogoHalven from './assets/img/halaven.png'
import Calculadora from './components/Calculadora'
function App() {


  return (
    <div className="App">
      <header >
        <h1>Dosímetro <strong>Eribulina</strong></h1>
      </header>
      <div className="app-contenedor">

        <Calculadora />
      
      
      <section className="datos">
        
        <div className="informacion">
          <p className="titulo">Información</p>
          <p className="parrafo">
            Esta calculadora está basada en la fórmula clásica de DuBois y
            DuBois.
          </p>
          <p>
            Se ha intentado que los cálculos sean lo más exactos posibles. Por
            supuesto, se encontrarán ligeras diferencias en las cifras si se
            comparan ambos, pero en general, escasamente significativas. La
            valoración es también similar:
          </p>
          <section className="tabla">
            <table>
              <tbody>
                <tr>
                  <td><strong>Normal</strong></td>
                  <td>1.7 m<sup>2</sup></td>
                </tr>
                <tr>
                  <td><strong>Media Varones</strong></td>
                  <td>1.9 m<sup>2</sup></td>
                </tr>
                <tr>
                  <td><strong>Media Mujeres</strong></td>
                  <td>1.6 m<sup>2</sup></td>
                </tr>
              </tbody>
            </table>
          </section>
          <small><strong>Referencias:</strong></small>
          <small
            >
            Dubois D, Dubois EF. A formula to estimate the approximate surface area if height and weight be known. Arch Intern Med. 1916; 17:863-871.</small
          >
          <small
            >Wang Y., Moss, J, Thisted R. Predictors of Body Surface Area. J
            Clin Anesth 1992; 4(1): 4-10.
          </small>
        </div>
        <div className="formulas">
          <p className="titulo">formulas</p>
          <div className="contenedor-formulas">
            <div className="formula">
              <p>Fórmula de DuBois y DuBois:</p>
              <strong >
                BSA = 0.007184 x Peso <sup>0.425</sup> x altura <sup>0.725</sup>
              </strong>
            </div>
            <div className="formula">
              <p>Fórmula para determinar dosis:</p>
              <strong> Dosis = 1.4 mg/m<sup>2</sup> </strong>
            </div>
          </div>
        </div>
      </section>

      <section className="logos-footer">
        <img src={LogoEisai} alt="logo-eisai" /><img
          src={LogoHalven}
          alt="logo-halaven"
        />
      </section>
      <div className="color"></div>
      </div>
      </div>
      );
}

      export default App;
