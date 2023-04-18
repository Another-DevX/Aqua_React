import React from "react";
import { CheckItem } from "./CheckItem";

const todos = [
  {
    link: "",
    text: "Quita todas las hojas, bichos y suciedad de la superficie del agua con un saca hojas.",
    title: "Pasa el saca hojas",
  },
  {
    link: "",
    text: "<b>1.</b> Introduce el Aspira-Fondos (Aspiradora).\n\n<b>2.</b> Introduce la manguera de manera vertical para que no quede aire atrapado en la manguera.\n\n<b>3.</b> Conecta la manguera al punto de aspirado.\n\n<b>4.</b> Apaga tu bomba.\n\n<b>5.</b> Abre la llave del punto de aspirado y cierra la llave del drenaje de fondo y cualquier otra llave que ingrese a la bomba.\n\n<b>6.</b> Coloca el filtro en posición 'Filtrado'.\n\n<b>7.</b> Enciende la bomba..\n\n<b>8.</b> Verifica que pase agua por la bomba y también que este succionando correctamente el aspira-fondos.\n\n<b>9.</b> Aspira la piscina (primero los rincones y luego a lo ancho) con movimientos lentos.\n\n<b>10.</b> Apaga la bomba y configura tus llaves de la manera habitual.\n\n<b>11.</b> Retira el aspira-fondos.\n\n<b>12.</b> Limpia la parte inferior del carrito del aspira- fondos.\n\n<b>13.</b> Retira la manguera expulsando el agua.\n\n<b>14.</b> Limpia el canastillo de tu skimmer.\n\n<b>15.</b> Limpia la parte inferior del carrito aspira- fondos.\n\n<b>16.</b> Guarda el aspira-fondos y su manguera lejos del sol. Si tu piscina es residencial aspirala 2 veces por semana o como mínimo una.\n\nSi tu piscina es pública aspírala diariamente. Si no tienes una bomba ni filtro entonces utiliza una manguera, llénala de agua, introduce un extremo a la piscina, tapa el otro extremo y llévalo un punto de drenaje más bajo que el nivel de agua de la piscina, suéltalo y verifica que salga agua, luego aspira la piscina.\n\nSi no vas a aspirar la piscina, al menos pásale una escoba o goma para cepillar las paredes y piso, de esa manera la suciedad no se adherirá al fondo.",
    title: "Aspira la piscina",
  },
  {
    link: "",
    text: "<b>1.</b> El nivel de cloro debe estar permanentemente entre 1 a 3 ppm. (Si es piscina residencial debe estar en 2ppm y si es piscina pública debe estar en 3 ppm).\n\n<b>2.</b> El nivel de pH debe estar entre 7.2 a 7.6 de manera ideal. \n\nTe recomiendo medir el nivel de cloro todos los días y el nivel de pH 2 veces por semana.",
    title: "Mide el nivel de cloro y PH",
  },
  {
    link: "/calcular",
    text: " El pH es una medida de la acidez o alcalinidad del agua y es importante para mantener un ambiente saludable para los usuarios.",
    title: "Ajusta el PH entre 7.2 y 7.6",
  },
  {
    link: "",
    text: '<b>1.</b> Calcula la cantidad de cloro que necesitas en la calculadora CLORO.\n\n<b>2.</b> Añade cloro:\n\n<ul><li>a. Si usarás Tricloro granulado, échalo al anochecer y simplemente espárcelo en el agua sin mezclarlo. (Es recomendado usarlo de manera habitual para mantener estable el nivel de cloro si le llega mucho sol)</li><li>b. Si usarás tabletas de tricloro, déjalas flotando todo el día y la noche en una boya flotante para pastillas. (Son muy buenas si le llega mucho sol y solamente es necesario reponerlas una vez por semana)</li><li>c. Si usarás cloro líquido, mézclalo en un balde con agua por unos segundos y échalo en los contornos. (Es excelente para hacer shock de cloro. Si la piscina recibe mucho sol asegúrate de tener el estabilizador entre 30 a 50 ppm para que no se evapore rápidamente)</li><li>d. Si usarás hipoclorito de calcio mézclalo bien en un balde con agua por 3 minutos y espárcelo en los contornos de la piscina. (Es excelente para hacer shock de cloro).</li><li>e. Si usarás dicloro, mézclalo en un balde con agua por 3 minutos y espárcelo en los contornos de la piscina. (Sirve para hacer shock de cloro pero acumula rápidamente el ácido cianúrico).</li></ul> Si tu alberca no tiene nivel de cloro, te recomiendo añadir cloro shock mezclado en un balde para alcanzar rápidamente al menos 3 ppm.',
    title: "Añade cloro a la piscina",
  },
  {
    link: "",
    text: "No es necesario filtrar el agua diariamente si es que no se bañaron muchas personas y el agua quedó completamente cristalina no es necesario filtrarla. Si no tienes un filtro no te preocupes, puedes saltarte este paso y no causará mayores problemas con el agua, a menos que la utilicen muchas personas cada día.\n\nEn caso que se hayan bañado y no esté totalmente cristalina, filtrala por 4 horas luego de haber añadido el cloro, después que se terminaron de bañar. Mucho mejor si añades clarificante a base de polimeros sintéticos para mejorar la eficiencia del filtro y que quede totalmente cristalina más rápidamente. (Añade 3 mililitros de clarificante por cada 1000 litros de agua).",
    title: "Filtra el agua de la piscina",
  },
  {
    link: "",
    text: "Cuando se salga la última persona que se bañó en la piscina cúbrela con una lona o carpa. ¡Tiene muchísimas ventajas! Como ser:\n\n<b>1.</b> Conservará mucho mejor la temperatura.\n\n<b>2.</b> El cloro o cualquier desinfectante tendrá mucho mayor duración.\n\n<b>3.</b> No se ensuciará.\n\n<b>4.</b> Incluso calentará más en el día con el sol.",
    title: "Cubre tu piscina al final del dia",
  },
];

function Checklist() {
  return (
    <div className="min-h-screen flex justify-center items-center pt-20 back_gradient">
      <div className="flex flex-col items-center rounded-md gap-4 m-4 lg:m-8 p-3 lg:p-8 w-5/6 max-w-md bg-white shadow-xl  ">
        <h1 className="text-2xl font-bold text-center text-blue-500">
          Mantenimiento diario
        </h1>
        <ul className="flex flex-col gap-4 ">
          {todos.map((item) => (
            <CheckItem item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export { Checklist };
