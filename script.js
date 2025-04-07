document.addEventListener("DOMContentLoaded", () => {
    const registrosTabla = document.getElementById("registros");
    const formulario = document.getElementById("registroForm");
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const telefonoInput = document.getElementById("telefono");
  
    function cargarRegistros() {
      const registros = JSON.parse(localStorage.getItem("registros")) || [];
      registrosTabla.innerHTML = registros.map(registro => `
        <tr>
          <td>${registro.nombre}</td>
          <td>${registro.email}</td>
          <td>${registro.telefono}</td>
        </tr>
      `).join("");
    }
  
    formulario.addEventListener("submit", (e) => {
      e.preventDefault();
      const nuevoRegistro = {
        nombre: nombreInput.value,
        email: emailInput.value,
        telefono: telefonoInput.value
      };
      const registros = JSON.parse(localStorage.getItem("registros")) || [];
      registros.push(nuevoRegistro);
      localStorage.setItem("registros", JSON.stringify(registros));
      formulario.reset();
      cargarRegistros();
    });
  
    cargarRegistros();
  });
  