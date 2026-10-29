contenidoEntrada = /* html */ `
<section>
  <article class="content-card">
    <dl class="content-card-list">
      <dt class="list-item-title">Procedimiento general de resolución</dt>
      <dd class="description-container">
        <p>
          Una ecuación de primer grado (o lineal) es una igualdad algebraica donde
          la variable o incógnita tiene como exponente máximo 1. Resolverla consiste
          en encontrar el valor numérico de dicha incógnita que hace verdadera la
          igualdad, aplicando propiedades de uniformidad en las operaciones:
        </p>
        <ol>
          <li>
            <strong>Eliminar signos de agrupación:</strong> Si existen paréntesis,
            corchetes o llaves, se resuelven multiplicando o aplicando leyes de los
            signos de adentro hacia afuera.
          </li>
          <li>
            <strong>Eliminar denominadores:</strong> Si hay fracciones, se calcula el
            Mínimo Común Múltiplo (MCM) de todos los denominadores y se multiplica toda
            la ecuación por ese número para trabajar solo con coeficientes enteros.
          </li>
          <li>
            <strong>Transposición de términos:</strong> Se agrupan todos los términos que
            contengan la incógnita en un miembro de la igualdad (usualmente el izquierdo)
            y todos los términos constantes o independientes en el otro miembro,
            recordando invertir las operaciones (sumas pasan restando y viceversa).
          </li>
          <li>
            <strong>Reducción de términos semejantes:</strong> Se suman o restan los
            términos semejantes en cada lado de la ecuación.
          </li>
          <li>
            <strong>Despeje de la incógnita:</strong> El coeficiente que multiplica a la
            incógnita pasa al otro miembro dividiendo con su mismo signo.
          </li>
          <li>
            <strong>Comprobación:</strong> Se sustituye el valor hallado en la ecuación
            original para validar que ambos miembros den el mismo resultado.
          </li>
        </ol>
      </dd>

      <dt class="list-item-title">1. Ecuaciones enteras</dt>
      <dd class="description-container">
        <p>
          Son aquellas donde ninguno de los términos tiene denominadores fraccionarios.
        </p>
        <p>Ejemplo:<br />Resolver <strong>5x - 7 = 2x + 8</strong></p>
        <ol>
          <li>Transponemos términos: 5x - 2x = 8 + 7</li>
          <li>Reducimos términos semejantes: 3x = 15</li>
          <li>Despejamos x: x = 15 / 3 &nbsp;➔&nbsp; <strong>x = 5</strong></li>
        </ol>
        <p>
          <strong>Comprobación:</strong><br />
          Sustituyendo x = 5 en la ecuación original:<br />
          5(5) - 7 = 2(5) + 8<br />
          25 - 7 = 10 + 8<br />
          <strong>18 = 18</strong> (Se cumple la igualdad).
        </p>
      </dd>

      <dt class="list-item-title">2. Ecuaciones fraccionarias</dt>
      <dd class="description-container">
        <p>
          Presentan uno o más términos con fracciones numéricas. Se resuelven multiplicando
          toda la igualdad por el MCM de los denominadores.
        </p>
        <p>Ejemplo:<br />Resolver <strong>(x + 1) / 3 - (x - 2) / 4 = 2</strong></p>
        <ol>
          <li>El MCM de los denominadores 3 y 4 es 12.</li>
          <li>
            Multiplicamos toda la ecuación por 12:<br />
            12 * [(x + 1) / 3] - 12 * [(x - 2) / 4] = 12 * 2<br />
            4(x + 1) - 3(x - 2) = 24
          </li>
          <li>Eliminamos paréntesis: 4x + 4 - 3x + 6 = 24</li>
          <li>Reducimos términos semejantes: x + 10 = 24</li>
          <li>Despejamos x: x = 24 - 10 &nbsp;➔&nbsp; <strong>x = 14</strong></li>
        </ol>
        <p>
          <strong>Comprobación:</strong><br />
          Sustituyendo x = 14 en la ecuación original:<br />
          (14 + 1) / 3 - (14 - 2) / 4 = 2<br />
          15 / 3 - 12 / 4 = 2<br />
          5 - 3 = 2<br />
          <strong>2 = 2</strong> (Se cumple la igualdad).
        </p>
      </dd>

      <dt class="list-item-title">3. Ecuaciones con signos de agrupación</dt>
      <dd class="description-container">
        <p>
          Contienen paréntesis o corchetes que agrupan operaciones y deben expandirse
          mediante la propiedad distributiva antes de mover términos.
        </p>
        <p>Ejemplo:<br />Resolver <strong>3(2x - 4) - 2(x + 5) = 4 - (x - 6)</strong></p>
        <ol>
          <li>
            Expandimos los productos y distribuimos signos:<br />
            6x - 12 - 2x - 10 = 4 - x + 6
          </li>
          <li>Reducimos términos en cada miembro: 4x - 22 = 10 - x</li>
          <li>Transponemos términos: 4x + x = 10 + 22</li>
          <li>Reducimos términos semejantes: 5x = 32</li>
          <li>Despejamos x: <strong>x = 32 / 5</strong> (o 6.4)</li>
        </ol>
        <p>
          <strong>Comprobación:</strong><br />
          Sustituyendo x = 6.4:<br />
          Lado izquierdo: 3(2(6.4) - 4) - 2(6.4 + 5) = 3(12.8 - 4) - 2(11.4) = 3(8.8) - 22.8 = 26.4 - 22.8 = <strong>3.6</strong><br />
          Lado derecho: 4 - (6.4 - 6) = 4 - (0.4) = <strong>3.6</strong><br />
          <strong>3.6 = 3.6</strong> (Se cumple la igualdad).
        </p>
      </dd>

      <dt class="list-item-title">4. Ecuaciones con literales</dt>
      <dd class="description-container">
        <p>
          Son ecuaciones donde, además de la incógnita principal (usualmente <em>x</em>),
          existen otras letras (como <em>a</em>, <em>b</em>, <em>m</em>) que representan
          constantes o parámetros conocidos.
        </p>
        <p>Ejemplo:<br />Despejar <strong>x</strong> en <strong>a(x - 2) = b(x + 1) + 3a</strong> (con a ≠ b)</p>
        <ol>
          <li>Expandimos los paréntesis: ax - 2a = bx + b + 3a</li>
          <li>Transponemos los términos con la incógnita x a la izquierda y el resto a la derecha: ax - bx = b + 3a + 2a</li>
          <li>Reducimos y factorizamos x en el miembro izquierdo: x(a - b) = 5a + b</li>
          <li>Despejamos x dividiendo entre (a - b): <strong>x = (5a + b) / (a - b)</strong></li>
        </ol>
        <p>
          <strong>Comprobación:</strong><br />
          Si asignamos valores numéricos de prueba, por ejemplo a = 3 y b = 1:<br />
          x = (5(3) + 1) / (3 - 1) = 16 / 2 = 8.<br />
          Sustituyendo en la ecuación original con a = 3, b = 1 y x = 8:<br />
          Lado izquierdo: 3(8 - 2) = 3(6) = 18<br />
          Lado derecho: 1(8 + 1) + 3(3) = 9 + 9 = 18<br />
          <strong>18 = 18</strong> (El despeje literal es correcto).
        </p>
      </dd>

      <h3>Problema de aplicación (Desarrollo de Software)</h3>
      <div class="description-container">
        <p>
          <strong>Enunciado:</strong> Durante una sesión de depuración y pruebas de carga en
          un backend de microservicios, un servidor procesa peticiones en dos fases continuas.
          En la segunda fase, debido a la concurrencia, el servidor procesa el triple de
          peticiones que en la primera fase más 150 solicitudes adicionales. Si en total se
          atendieron 1,750 peticiones exitosas durante el monitoreo, ¿cuántas peticiones se
          procesaron en cada fase?
        </p>

        <ol>
          <li>
            <strong>Paso 1: Declaración de la incógnita</strong><br />
            Sea <em>x</em> el número de peticiones procesadas en la primera fase.
          </li>
          <li>
            <strong>Paso 2: Traducción al lenguaje algebraico</strong><br />
            Peticiones en la fase 1: <em>x</em><br />
            Peticiones en la fase 2: <em>3x + 150</em><br />
            Total de peticiones procesadas: <em>1,750</em>
          </li>
          <li>
            <strong>Paso 3: Planteamiento de la ecuación</strong><br />
            x + (3x + 150) = 1750
          </li>
          <li>
            <strong>Paso 4: Solución de la ecuación</strong><br />
            x + 3x + 150 = 1750<br />
            4x + 150 = 1750<br />
            4x = 1750 - 150<br />
            4x = 1600<br />
            x = 1600 / 4<br />
            <strong>x = 400</strong><br /><br />
            Por lo tanto:<br />
            Fase 1: <strong>400 peticiones</strong><br />
            Fase 2: 3(400) + 150 = 1200 + 150 = <strong>1,350 peticiones</strong>
          </li>
          <li>
            <strong>Paso 5: Validación contra el enunciado</strong><br />
            - La fase 2 (1,350) es el triple de la fase 1 (3 * 400 = 1,200) más 150 peticiones (1,200 + 150 = 1,350), lo cual coincide con la condición.<br />
            - La suma de ambas fases es 400 + 1,350 = 1,750 peticiones en total, cumpliendo exactamente con el volumen reportado por el servidor.
          </li>
        </ol>
      </div>
    </dl>
  </article>
</section>
`;
