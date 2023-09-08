function calcularDescuento(valorCompra) {
    if (valorCompra <= 1000) {
      return valorCompra * 0.15;
    } else if (valorCompra <= 2000) {
      return valorCompra * 0.20;
    } else {
      return valorCompra * 0.30;
    }
  }
  
  function gestionarCompras() {
    while (true) {
      let valorCompra = prompt("¡Hola! Por favor ingresa el valor total de tu compra en USD:");
  
      if (valorCompra === null) {
        break; 
      }
  
      valorCompra = parseFloat(valorCompra);
  
      if (isNaN(valorCompra) || valorCompra < 0) {
        alert("Ingresa un valor válido.");
        continue;
      }
  
      const descuento = calcularDescuento(valorCompra);
      const valortotal = valorCompra - descuento;
  
      alert("Tu descuento en ese pedido es de: USD" + " " + descuento);
      alert("Tu valor a pagar es de: USD" + " " + valortotal);
    }
  }
  
  gestionarCompras();