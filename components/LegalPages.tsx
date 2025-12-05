import React from 'react';
import { SectionHeading } from './ui/SectionHeading';

const LegalLayout: React.FC<{ title: string; subtitle: string; children: React.ReactNode }> = ({ title, subtitle, children }) => {
  return (
    <div className="pt-24 pb-20 bg-zinc-50 dark:bg-zinc-950 min-h-screen text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle={subtitle} title={title} alignment="center" />
        <div className="mt-12 space-y-8 font-light leading-relaxed text-justify">
          {children}
        </div>
      </div>
    </div>
  );
};

export const LegalPage: React.FC = () => {
  return (
    <LegalLayout title="Aviso Legal" subtitle="Condiciones Legales">
      <div className="space-y-6">
        <h3 className="text-xl text-zinc-900 dark:text-white font-serif">Política de privacidad y protección de datos. Uso y protección de datos de los usuarios de www.pinazodecoraciones.com</h3>
        
        <section>
          <h4 className="text-wine-500 font-bold mb-2">1. Ley de protección de datos 15/1999</h4>
          <p>
            De acuerdo con lo establecido en la Ley Orgánica 15/1999 los datos personales recogidos por Pinazo Decoraciones, S.L. a través de formularios, correo electrónico u otro medio análogo, serán objeto de un tratamiento automatizado e incorporados a los correspondientes ficheros automatizados de carácter personal de los que Pinazo Decoraciones S.L. será titular y responsable.
          </p>
        </section>

        <section>
          <h4 className="text-wine-500 font-bold mb-2">2. Consentimiento en el uso de datos</h4>
          <p>
            Pinazo Decoraciones S.L. deberá obtener el previo consentimiento inequívoco de los Usuarios para efectuar tratamientos de sus datos con finalidades distintas a las mencionadas con anterioridad. Para el ejercicio de los derechos de acceso, rectificación, cancelación u oposición a los datos personales, el usuario podrá dirigirse a Pinazo Decoraciones S.L.
          </p>
          <p className="mt-2">
            Pinazo Decoraciones S.L. pondrá a disposición de los Usuarios los recursos técnicos adecuados para que presten de forma inequívoca su consentimiento, y para que, de forma previa a la prestación del consentimiento, pueda acceder a nuestra política de protección de datos. Salvo en los campos en los que se indique lo contrario, las respuestas a los datos de carácter personal son voluntarias, sin que la falta de contestación a dichas preguntas implique una merma en la calidad o cantidad de los servicios correspondientes, a menos que se indique otra cosa.
          </p>
        </section>

        <section>
          <h4 className="text-wine-500 font-bold mb-2">3. Finalidad del uso de datos</h4>
          <p>
            La incorporación al Fichero y tratamiento automatización de los datos Personales tiene como finalidad la gestión, administración, prestación, ampliación y mejora de los servicios en los que el Usuario decida suscribirse o darse de alta, la adecuación del contenido íntegro del portal a las preferencias de los usuarios, el diseño de cualquier nuevo elemento que configure el portal y el envío de actualizaciones de los servicios. La notificación de este tipo de incidencias se realizará enviando un correo a través de nuestro formulario de notificación de incidencias.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
};

export const PrivacyPage: React.FC = () => {
  return (
    <LegalLayout title="Política de Privacidad" subtitle="Protección de Datos">
      <div className="space-y-6">
        <p>
          En Pinazo Decoraciones S.L., nos comprometemos a proteger y respetar su privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos su información personal cuando visita nuestro sitio web o utiliza nuestros servicios.
        </p>

        <section>
          <h4 className="text-zinc-900 dark:text-white font-serif text-lg mb-2">Responsable del Tratamiento</h4>
          <p>
            El responsable del tratamiento de sus datos es Pinazo Decoraciones S.L., con domicilio en C/ Ceramistas n2 (Poligono Ind. El Barranc.), 46132 Almassera, España.
          </p>
        </section>

        <section>
          <h4 className="text-zinc-900 dark:text-white font-serif text-lg mb-2">Información que Recopilamos</h4>
          <p>Podemos recopilar y procesar los siguientes datos sobre usted:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-zinc-500 dark:text-zinc-400">
            <li>Información que nos proporciona al rellenar formularios en nuestro sitio (ej. formulario de contacto).</li>
            <li>Si se pone en contacto con nosotros, podemos guardar un registro de esa correspondencia.</li>
            <li>Detalles de sus visitas a nuestro sitio web y los recursos a los que accede.</li>
          </ul>
        </section>

        <section>
          <h4 className="text-zinc-900 dark:text-white font-serif text-lg mb-2">Uso de la Información</h4>
          <p>Utilizamos la información que tenemos sobre usted para:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-zinc-500 dark:text-zinc-400">
            <li>Proporcionarle la información, productos o servicios que nos solicite.</li>
            <li>Cumplir con nuestras obligaciones derivadas de cualquier contrato celebrado entre usted y nosotros.</li>
            <li>Notificarle sobre cambios en nuestro servicio.</li>
          </ul>
        </section>

        <section>
          <h4 className="text-zinc-900 dark:text-white font-serif text-lg mb-2">Sus Derechos</h4>
          <p>
            Tiene derecho a solicitarnos que no procesemos sus datos personales para fines de marketing. Puede ejercer sus derechos de acceso, rectificación, cancelación y oposición contactándonos en pinazo@pinazodecoraciones.com.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
};

export const CookiesPage: React.FC = () => {
  return (
    <LegalLayout title="Política de Cookies" subtitle="Información de Uso">
      <div className="space-y-6">
        <p>
          Pinazo Decoraciones S.L. utiliza cookies para mejorar la experiencia de los usuarios, facilitando la navegación por nuestra web. Estamos haciendo todo lo posible por facilitar el uso de dichas cookies, así como su gestión y control al utilizar nuestros servicios.
        </p>

        <section>
          <h4 className="text-zinc-900 dark:text-white font-serif text-lg mb-2">¿Qué son las cookies?</h4>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario de Internet al visitar una página web. Es el operador del sitio web el que determina qué tipo de información contiene dicha cookie y cuál es su propósito, pudiendo además ser utilizada por el servidor web cada vez que visite dicha web.
          </p>
        </section>

        <section>
          <h4 className="text-zinc-900 dark:text-white font-serif text-lg mb-2">Tipos de Cookies que utilizamos</h4>
          <ul className="space-y-4">
            <li>
              <strong className="text-wine-500">Cookies Técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de la página web y la utilización de las diferentes opciones o servicios que en ella existan.
            </li>
            <li>
              <strong className="text-wine-500">Cookies de Análisis:</strong> Son aquellas que nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado.
            </li>
          </ul>
        </section>

        <section>
          <h4 className="text-zinc-900 dark:text-white font-serif text-lg mb-2">Cómo gestionar las cookies en el navegador</h4>
          <p>
            El usuario tiene la opción de permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su terminal:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-zinc-500 dark:text-zinc-400">
            <li>Chrome</li>
            <li>Explorer</li>
            <li>Firefox</li>
            <li>Safari</li>
          </ul>
          <p className="mt-4">
            Si bloquea el uso de cookies en su navegador es posible que algunos servicios o funcionalidades de la página web no estén disponibles.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
};