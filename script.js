document.addEventListener("DOMContentLoaded", function () {
  const destinoSelect = document.getElementById("destino");
  const diasInput = document.getElementById("dias");
  const boton = document.getElementById("calcular");
  const resultado = document.getElementById("resultado");

  const tasas = {
    Cuzco: 120,
    Rio: 200,
    Miami: 300,
    Barcelona: 250,
    Tokyo: 280,
    Paris: 270,
    Roma: 260,
    Berlin: 265
  };

  const monedas = {
    Cuzco: "PEN",
    Rio: "BRL",
    Miami: "USD",
    Barcelona: "EUR",
    Tokyo: "JPY",
    Paris: "EUR",
    Roma: "EUR",
    Berlin: "EUR"
  };

  boton.addEventListener("click", function () {
    const destino = destinoSelect.value;
    const dias = parseInt(diasInput.value);

    if (dias < 31) {
      const tasa = tasas[destino];
      const codigoMoneda = monedas[destino];
      const totalEnMonedaLocal = dias * 100;
      const totalEnPesos = totalEnMonedaLocal * tasa;

      resultado.innerHTML = `
        <p>Necesitas 100 (${codigoMoneda}) por día, para estar tranquilo.</p>
        <p>Entonces junta ${totalEnPesos.toLocaleString("es-AR")} pesos argentinos.</p>
      `;
    }
  });
});
