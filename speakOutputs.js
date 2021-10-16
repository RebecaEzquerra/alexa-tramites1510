const msgs = {

    msgs: (m) => {
            switch (m) {
                case 'WELCOME_MSG' :return 'Bienvenido a la consulta de trámites para UAM Azcapoztalco';
                case 'HELP_MSG' :return 'Por favor dime el nombre del trámite del que quieres más detalle';
                case 'GOODBYE_MSG' :return 'Hasta luego';
                case 'ERROR_MSG': return 'Lo siento, ha habido un problema. Por favor inténtalo otra vez.'; 
                case '1': 
                    return 'Consulta en el instructivo de inscripción, donde se encontrará el módulo de expedición de credencial. Acude, y presenta identificación oficial con fotografía y firma, y comprobante de inscripción.';
                case '2':
                    return 'Ingresa a la página http://cse.azc.uam.mx,  ve al apartado de Alumno Licenciatura, presiona el botón que dice SISE e ingresa los datos solicitados. Después de realizar el pago, presentate en el lugar indicado a recoger la credencial con tu identificación.';
                case '3':
                    return 'Debes acudir a la caja de la Unidad, en el edificio C, tercer piso, a realizar el pago correspondiente con el formato lleno. Si cuentas con dinero en tu monedero electrónico , puedes realizar el pago en las ventanillas de la Coordinación de Sistemas Escolares. Posteriormente deberás entregar este formato pagado en las ventanillas de Sistemas Escolares, ahí te darán tu comprobante de trámite solicitado, indicándote la fecha a partir de la que podrás recoger tu constancia.';
                case '4':
                    return 'Llena tu solicitud para la constancia de Afiliación al Segura Facultativo en el Sistema Integral de Sistemas Escolares. Acude a la caja de la Unidad, en el edificio C, tercer piso, a realizar el pago correspondiente con el formato lleno. Si cuentas con dinero en tu monedero electrónico, puedes realizar el pago en las ventanillas de la Coordinación de Sistemas Escolares. Después entrega el formato pagado en las ventanillas de Sistemas Escolares, ahí te darán tu comprobante de trámite solicitado, que indican fecha en la que podrás recoger tu constancia. Después de recoger esta constancia, acude con tu comprobante de trámite solicitado, credencial vigente y tu constancia de afiliación al seguro facultativo a la clínica';
                case '5':
                    return 'Debes acudir a la Sección de Análisis y Programación Escolar ubicada en el edificio T, planta baja y solicitar el formato de actualización de datos';
                case '6':
                    return 'Acude a la oficina de la Sección de Servicios de Soporte Técnico y Redes, en la planta baja del edificio T.';
                case '7':
                    return 'Puedes consultar los siguientes enlaces https://vinculacion.azc.uam.mx/a_servicio.html  o  http://lenguas.azc.uam.mx/.   Ahí encontraras toda la información relacionada. ';
                case '8':
                    return 'Presenta la solicitud dentro de los seis trimestres lectivos a partir del vencimiento del plazo máximo así como una carta al director de división como Presidente del Consejo Divisional, explicando los motivos por los cuales no concluyó en el plazo máximo.';
                    
                default:
                    // code
            }
    }
}

module.exports = msgs;