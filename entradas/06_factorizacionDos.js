contenidoEntrada = /* html */ ` 
<section>
  <article class="content-card">
    <dl class="content-card-list">
      <dt class="list-item-title">Suma y diferencia de cubos.</dt>
      <dd class="description-container">
        <p>
          Para factorizar una suma o diferencia de cubos, nos fijamos en que
          tenemos dos términos que se están sumando o restando y que ambos
          tienen raíz cúbica exacta. La factorización se forma por dos 
          paréntesis: un binomio y un trinomio. El binomio son las raíces
          cúbicas con el mismo signo que la expresión original. El trinomio 
          se forma con el cuadrado de la primera raíz, luego la primera por 
          la segunda pero con el signo contrario al original, y por último el 
          cuadrado de la segunda raíz siempre sumando.
        </p>
        <p>Ejemplo:<br />Factorizar x³ + 8</p>
        <ol>
          <li>Sacamos la raíz cúbica de ambos términos: x y 2</li>
          <li>Formamos el binomio con el mismo signo: (x + 2)</li>
          <li>
            Formamos el trinomio (cuadrado del primero, primero por el
            segundo con signo contrario, y cuadrado del segundo): 
            (x² - 2x + 4)
          </li>
          <li>El resultado es: (x + 2)(x² - 2x + 4)</li>
        </ol>
      </dd>

      <dt class="list-item-title">Trinomios x² + bx + c.</dt>
      <dd class="description-container">
        <p>
          Este caso es muy común. Para factorizarlo, abrimos dos paréntesis.
          En ambos ponemos la raíz cuadrada del primer término (casi siempre x).
          Luego buscamos dos números que multiplicados nos den el tercer término (c) 
          y sumados o restados nos den el coeficiente del segundo término (b).
        </p>
        <p>Ejemplo:<br />Factorizar x² + 5x + 6</p>
        <ol>
          <li>Sacamos la raíz del primero y la ponemos en dos paréntesis: (x &nbsp;)(x &nbsp;)</li>
          <li>Buscamos dos números que multiplicados den 6 y sumados den 5: 3 y 2</li>
          <li>
            El resultado es el producto de los binomios: (x + 3)(x + 2)
          </li>
        </ol>
      </dd>

      <dt class="list-item-title">Trinomios ax² + bx + c.</dt>
      <dd class="description-container">
        <p>
          Este se parece al anterior pero el término al cuadrado tiene un 
          coeficiente diferente de 1. Un truco fácil para factorizarlo es
          multiplicar todo el trinomio por el número (a) (el coeficiente de x²),
          dejando indicada la multiplicación en medio. Para no afectar la expresión,
          dividimos todo entre ese mismo número. Factorizamos como en el caso anterior 
          y al final simplificamos dividiendo.
        </p>
        <p>Ejemplo:<br />Factorizar 2x² + 5x + 2</p>
        <ol>
          <li>Multiplicamos y dividimos todo por el coeficiente (2): ((2x)² + 5(2x) + 4) / 2</li>
          <li>Buscamos dos números que multiplicados den 4 y sumados den 5: 4 y 1</li>
          <li>Escribimos la factorización preliminar: (2x + 4)(2x + 1) / 2</li>
          <li>Simplificamos dividiendo el primer paréntesis entre 2: (x + 2)(2x + 1)</li>
        </ol>
      </dd>

      <h3>
        Estrategia de factorización
      </h3>
      <div class="description-container">
        <p>
          Para decidir qué método aplicar cuando nos topamos con un polinomio, 
          la mejor guía es contar el número de términos. Recuerda siempre la regla de oro: 
          <strong>empezar buscando si hay un término común</strong> antes de probar 
          cualquier otra cosa.
        </p>
        <ul>
          <li>
            <strong>Cualquier cantidad de términos:</strong>
            <ul>
              <li><em>Término común (Factorización I):</em> Identificamos si todos los términos comparten una literal o un divisor común.</li>
            </ul>
          </li>
          <li>
            <strong>Si tiene 2 términos (Binomios):</strong>
            <ul>
              <li><em>Diferencia de cuadrados (Factorización I):</em> Se aplica si es una resta y ambos términos tienen raíz cuadrada exacta.</li>
              <li><em>Suma o diferencia de cubos (Factorización II):</em> Se aplica si se están sumando o restando y ambos tienen raíz cúbica exacta.</li>
            </ul>
          </li>
          <li>
            <strong>Si tiene 3 términos (Trinomios):</strong>
            <ul>
              <li><em>Trinomio Cuadrado Perfecto (Factorización I):</em> Revisamos si el primer y tercer término tienen raíz cuadrada exacta y si el doble de su producto da el término de en medio.</li>
              <li><em>Trinomio x² + bx + c (Factorización II):</em> Se aplica si el término que está al cuadrado tiene coeficiente 1.</li>
              <li><em>Trinomio ax² + bx + c (Factorización II):</em> Se aplica cuando el término al cuadrado tiene un coeficiente distinto de 1.</li>
            </ul>
          </li>
        </ul>
      </div>
    </dl>
    

  </article>
</section>
`;
