// use strict";
/**
 * Objeto que mapea cada vocal con su número correspondiente.
 */
const vocalesNumeros = {
    'a': '1',
    'e': '2',
    'i': '3',
    'o': '4',
    'u': '5'
  };
  /**
   * Codifica un texto reemplazando cada vocal por su número correspondiente.
   * @param texto El texto a codificar.
   * @returns El texto codificado.
   */
  function codificarTextoNumero(texto) {
    let textoCodificado = '';
    for (let caracter of texto) {
      if (caracter.toLowerCase() in vocalesNumeros) {
        textoCodificado += vocalesNumeros[caracter.toLowerCase()];
      }
      else {
        textoCodificado += caracter;
      }
    }
    return textoCodificado;
  }
  const numerosTextoEncriptado = {
    '1': 'ai',
    '2': 'enter',
    '3': 'imes',
    '4': 'ober',
    '5': 'ufat'
  };
  /**
   * Codifica un texto reemplazando los números por cadenas de texto predefinidas
   * según el mapa de conversión 'numerosTextoEncriptado'.
   * @param texto El texto a codificar.
   * @returns El texto codificado.
   */
  function codificarNumeroClave(texto) {
    let textoCodificado = '';
    for (let caracter of texto) {
      if (caracter in numerosTextoEncriptado) {
        textoCodificado += numerosTextoEncriptado[caracter];
      }
      else {
        textoCodificado += caracter;
      }
    }
    return textoCodificado;
  }
  /**
   * Codifica un texto completo en clave a través de la combinación
   * de codificación de vocales a números
   * y reemplazo de números por palabras encriptadas.
   * @param idEntrada - El texto a codificar.
   * @returns El texto codificado en clave.
   */
  function codificarTextoCompleto(idEntrada, idDestino) {
    // Codificar las vocales a números
    const textoCodificadoCompleto = codificarTextoNumero(document.getElementById(idEntrada).value);
    // Reemplazar los números por las palabras encriptadas correspondientes
    document.getElementById(idDestino).value = codificarNumeroClave(textoCodificadoCompleto);
  
    if (codificarNumeroClave(textoCodificadoCompleto)) {
      
      alert('El texto ha sido codificado')
      
      document.getElementById("imgDer").style.display="none"
      document.getElementById("contenedor-h3").style.display="none"
    }
    document.getElementById(idEntrada).value = "";
    // return codificarNumeroClave(textoCodificadoCompleto);
  }

  const encriptado = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
  };
  /**
   * Decodifica un texto encriptado según el mapa de conversión 'encriptado'.
   * @param textoCodificado El texto a decodificar.
   * @returns El texto decodificado.
   */
  function decodificarTexto(idTextoFinal, idTextoDecodificado) {
    // Convertir el texto a minúsculas para facilitar el procesamiento
    const textoCodificado  = document.getElementById(idTextoFinal).value
    let textoMinusculas = textoCodificado.toLowerCase(textoCodificado);
    let textoDecodificado = '';
    if (textoMinusculas) {
      // Iterar sobre cada clave en el mapa de conversión
      for (let clave in encriptado) {
        // Obtener la vocal correspondiente a la clave
        const vocal = encriptado[clave];
        // Reemplazar cada ocurrencia de la clave por la vocal correspondiente
        textoDecodificado = textoMinusculas.split(clave).join(vocal);
        textoMinusculas = textoDecodificado;
      }

      document.getElementById("imgDer").style.display="block"
      document.getElementById("contenedor-h3").style.display="block"

      document.getElementById(idTextoFinal).value = "";
       // Asigna el texto decodificado
      document.getElementById(idTextoDecodificado).value = textoDecodificado;
  
    }else{
  
      alert('No ha iongresado ningun texto')
  
    }
  
    return textoDecodificado;
  }
  
  function copiarPortapeles(id) {
    texto = document.getElementById(id).value

    navigator.clipboard.writeText(texto)
    .then(() => {
      alert('Texto copiado al portapapeles')
    })
    .catch(err => {
      alert('Error al copiar al portapapeles:', err)
    })
  } 