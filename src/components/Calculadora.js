import React, { useState, useEffect } from 'react'

function Calculadora() {
  const [clear, setClear] = useState(false);
  let [currentAltura, setCurrentAltura] = useState(0);
  let [currentPeso, setCurrentPeso] = useState(0);
  useEffect(() => {
    document.querySelector(".result").value = "0";
  }, []);

  useEffect(() => {
    if (clear) document.querySelector(".result").value = "0";
  });
  const Formula = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    let currentAltura = document.querySelector("#altura").value;
    let currentPeso = document.querySelector("#peso").value;
    const decimal = 0.7184;
    let alturaParcial = Math.pow(currentAltura, 0.725);
    let pesoParcial = Math.pow(currentPeso, 0.425);
    let superficie = Math.round(alturaParcial * pesoParcial * decimal) / 100;
    setCurrentAltura(superficie);
  };

  const Clear = (e) => {
    e.preventDefault();
    document.querySelector("form").reset();
    setClear(true);
    setCurrentAltura(0);
    setCurrentPeso(0);
  };
  return (
    <div className="calculadora">
      <form>
        <div className="grupo-form">
          <label htmlFor=""> Altura: </label>
          <input type="text" id="altura" placeholder="Ingresa la altura" />
        </div>
        <br />
        <div className="grupo-form">
          <label htmlFor=""> Peso: </label>
          <input type="text" id="peso" placeholder="Ingresa el peso" />
        </div>
        <hr />

        <button onClick={Formula}>Calcular</button>

        <button onClick={Clear}>Limpiar</button>

        <hr />
        <label htmlFor=""> BSA (Superficie Corporal): </label>

        <input type="text" className="result" value={currentAltura} readOnly />
      </form>
    </div>
  )
}

export default Calculadora
