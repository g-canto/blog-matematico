contenidoEntrada = /* html */ ` <section>
  <article class="content-card">
    <dl class="content-card-list">
      <dt class="list-item-title">Termino común.</dt>
      <dd class="description-container">
        <p>
          Para factorizar un producto con terminos en comun primero se
          identifica el maximo comun divisor de los coeficientes, si es que
          existe. Luego se buscan literales que aparecen en todos los terminos
          con su menor exponente. El termino comun termina siendo el producto
          del MCD y las literales con sus exponentes correspondientes. Y la
          factorizacion termina siendo el termino comun multiplicado por la
          expresion inicial dividida entre este termino comun.
        </p>
        <p>Ejemplo:<br />Factorizar 4x³ + 8x² +2x</p>
        <ol>
          <li>Se calcula el MCD de 4,8 y 2: 2</li>
          <li>
            Buscamos las literales comunes en cada termino con su exponente mas
            pequeño: x
          </li>
          <li>El termino común es entonces: 2x</li>
          <li>El resultado es: 2x(2x² + 4x +1)</li>
        </ol>
        <img
          class="content-card-image"
          src="assets/images/factorComun.jpeg"
          alt="Ejemplo visual de factor comun"
        />
      </dd>

      <dt class="list-item-title">Trinomio Cuadrado Perfecto.</dt>
      <dd class="description-container">
        <p>
          Para factorizar un trinomio cuadrado perfecto, primero se verifica si
          el primer y el tercer termino tienen raices exactas. Si el segundo
          termino es el producto de estas raices, multiplicado por dos podemos
          usar este metodo. El resultado de la factorizacion seria la raiz
          cuadrada del primer termino mas o menos (dependiendo del signo del
          segundo termino) la raiz del tercer termino, elevado al cuadrado.
        </p>
        <p>Ejemplo:<br />Factorizar x² + 6x + 9</p>
        <ol>
          <li>Se saca la raiz del primero: x</li>
          <li>Se saca la raiz del tercero: 3</li>
          <li>
            Se eleva la suma de estos (debido al segundo termino) al cuadrado:
            (x + 3)²
          </li>
        </ol>
        <img src="assets/images/TCP.jpeg" alt="Representacion visual de TCP" />
      </dd>

      <dt class="list-item-title">Diferencia de cuadrados.</dt>
      <dd class="description-container">
        <p>
          Este metodo se usa cuando tenemos un binomio al cuadrado donde hay una
          resta y los terminos tienen raices exactas. El resultado de la
          factorizacion es un producto de las raices primero sumadas y luego
          restadas, osea conjugadas.
        </p>
        <p>Ejemplo:<br />Factorizar (x² - 64)</p>
        <ol>
          <li>Se saca la raiz del primero: x</li>
          <li>Se saca la raiz del segundo: 8</li>
          <li>El resultado es el producto suma: (x + 8)(x - 8)</li>
        </ol>
        <img
          src="assets/images/diferenciaDeCuadrados.jpeg"
          alt="Representacion visual binomios con termino comun"
        />
      </dd>

      <table class="entry-table">
      <thead>
        <tr>
          <th>Producto Notable (Expresión expandida)</th>
          <th>Factorización (Forma factorizada)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <strong>Polinomio con factor común:</strong><br />
            4x³ + 8x² + 2x
          </td>
          <td>
            <strong>Término común:</strong><br />
            2x(2x² + 4x + 1)
          </td>
        </tr>
        <tr>
          <td>
            <strong>Trinomio Cuadrado Perfecto:</strong><br />
            x² + 6x + 9
          </td>
          <td>
            <strong>Binomio al cuadrado:</strong><br />
            (x + 3)² <em>o</em> (x + 3)(x + 3)
          </td>
        </tr>
        <tr>
          <td>
            <strong>Diferencia de cuadrados:</strong><br />
            x² - 64
          </td>
          <td>
            <strong>Binomios conjugados:</strong><br />
            (x + 8)(x - 8)
          </td>
        </tr>
      </tbody>
    </table>
    </dl>
    
  </article>
</section>`;
