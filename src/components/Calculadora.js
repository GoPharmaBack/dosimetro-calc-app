import React, { useState, useEffect } from 'react'

function Calculadora() {
  const [clear, setClear] = useState(false);
  let [currentAltura, setCurrentAltura] = useState(0);
  let [currentPeso, setCurrentPeso] = useState(0);
  let [currentBsa, setCurrentBsa] = useState(0);
  let [currentDosis, setCurrentDosis] = useState(0);
  let [currentViales, setCurrentViales] = useState(0);

  useEffect(() => {
    document.querySelector(".result").value = "0";
  }, []);

  useEffect(() => {
    if (clear) document.querySelector(".result").value = "0";
  });
  const Formula = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    var currentAltura = document.querySelector("#altura").value;
    var currentPeso = document.querySelector("#peso").value;
    const decimal = 0.7184;
    let alturaParcial = Math.pow(currentAltura, 0.725);
    let pesoParcial = Math.pow(currentPeso, 0.425);

    let superficie = (alturaParcial * pesoParcial * decimal) / 100;
    setCurrentBsa(superficie.toFixed(4));
    console.log(superficie)

    var dosis = parseFloat(superficie * 1.4);
        setCurrentDosis(dosis.toFixed(4))

    console.log(dosis.toFixed(4));
  
    let vialesAjustados = (dosis *1/1)
    setCurrentViales(vialesAjustados.toFixed(4))



  };
  console.log(currentPeso);
  console.log(currentAltura);

  const Clear = (e) => {
    e.preventDefault();
    document.querySelector("form").reset();
    setClear(true);
    setCurrentAltura(0);
    setCurrentPeso(0);
    setCurrentDosis(0)
    setCurrentViales(0)
  };
  return (
    <section className="calculadora">

      <form>
        <div className="contenedor-form">
          <div className="bloque-rosa">
            <div className="datos-usuario">
              <div className="group-usuario">
                <label > Altura: </label>
                <div><input type="text" id="altura" placeholder="Ingresa la altura" />
                  <p>cm</p></div>
              </div>

              <div className="group-usuario">
                <label > Peso: </label>
                <div><input type="text" id="peso" placeholder="Ingresa el peso" />
                  <p> kg</p></div>
              </div>
            </div>

            <div className="botones-form">

              <button onClick={Formula}><strong>Calcular dosis</strong></button>

              <button onClick={Clear}>Borrar datos</button>
            </div>
          </div>


          <div className="bloque-azul">
            <div className="datos-bsa">
              <label> BSA (Superficie Corporal): </label>
              <div> <input type="text" className="result" value={currentBsa} readOnly />
                <p>m<sup>2</sup></p></div>
            </div>



            <div className="datos-viales">
              <div className="caja-azul">
                <div className="grupo-viales">
                  <label>Dosis: </label>
                  <div><input type="text" className="result" value={currentDosis} readOnly />
                    mg</div>
                </div>
                <div className="grupo-viales">
                  <div className="titulo-viales">
                  <span>No. de viales</span>
                  <label>por aplicación:</label>
                  </div>
                  <input type="text" className="result" value={currentViales} readOnly />
                  
                </div>
              </div>
            </div>
          </div>

        </div>
      </form>
    </section>
  )
}

export default Calculadora
