<?php
if (!isset($_REQUEST['cod']))
  echo "Seleccione su signo.";
else
{    
    if ($_REQUEST['cod']==1)
      echo "<strong>Aries:</strong> Hoy los cambios ser&#xE1;n f&#xED;sicos, personales, de car&#xE1;cter, Te sentir&#xE1;s impulsivo y tomar&#xE1;s  iniciativas. Per&#xED;odo en donde considerar&#xE1;s unirte a agrupaciones de beneficencia, o de ayuda a los dem&#xE1;s.";
    if ($_REQUEST['cod']==2)
      echo "<strong>Tauro:</strong> Hoy los cambios ser&#xE1;n privados, &#xED;ntimos. Recuerdos. Ayuda, solidaridad. Asuntos en lugares de retiro. Tu c&#xF3;nyuge puede aportar buen status a tu vida o apoyo a tu profesi&#xF3;n.";
    if ($_REQUEST['cod']==3)
      echo "<strong>G&#xE9;minis:</strong> Los asuntos de hoy tienen que ver con las amistades, reuniones, actividades con ellos. D&#xED;a esperanzado, ilusiones. Mucha energ&#xED;a sexual y fuerza emocional. Deseos dif&#xED;ciles de controlar.";
    if ($_REQUEST['cod']==4)
      echo "<strong>Cancer:</strong> Este d&#xED;a la profesi&#xF3;n y las relaciones con superiores y con tu madre ser&#xE1;n de importancia. Actividad en relaci&#xF3;n a estos temas. Momentos positivos con compa&#xF1;eros de trabajo. Actividad laboral agradable.";
    if ($_REQUEST['cod']==5)
      echo "<strong>Leo:</strong> Este d&#xED;a los estudios, los viajes, el extranjero y la espiritualidad ser&#xE1;n lo importante. Pensamientos, religi&#xF3;n y filosof&#xED;a tambi&#xE9;n. Vivencias k&#xE1;rmicas de la &#xE9;poca te vuelven responsable tomando decisiones.";
    if ($_REQUEST['cod']==6)
      echo "<strong>Virgo:</strong> Para este d&#xED;a toma importancia tu vida sexual, tal vez miedos, temas legales, juicios o herencias. Experiencias extra&#xF1;as. Hay karma de prueba durante este per&#xED;odo en tu parte psicol&#xF3;gica, gener&#xE1;ndose algunos replanteos.";
    if ($_REQUEST['cod']==7)
      echo "<strong>Libra:</strong> Hoy todo asunto tiene que ver con tu pareja, tambi&#xE9;n con socios, con la gente o el p&#xFA;blico. Ellos ser&#xE1;n lo m&#xE1;s importante del d&#xED;a. Ganancias a trav&#xE9;s de especulaciones o del juego. Actividades vocacionales art&#xED;sticas.";
    if ($_REQUEST['cod']==8)
      echo "<strong>Escorpio:</strong> Hoy todo asunto tiene que ver con temas de trabajo y de salud. Presta atenci&#xF3;n a ambos. Experiencias diversas con compa&#xF1;eros. Durante este per&#xED;odo tendr&#xE1;s muchos recursos para ganar dinero.";
    if ($_REQUEST['cod']==9)
      echo "<strong>Sagitario:</strong> Durante este d&#xED;a se vivir&#xE1;n cambios en relaci&#xF3;n a los noviazgos o a los hijos. Creatividad, actividad, diversiones y salidas. Per&#xED;odo de encuentros con personas o situaciones que te impresionan.";
    if ($_REQUEST['cod']==10)
      echo "<strong>Capricornio:</strong> Los cambios del d&#xED;a tienen que ver con tu hogar, con la convivencia y con el padre. Asuntos relativos al car&#xE1;cter en la convivencia. El karma de responsabilidad de estos momentos te acercar&#xE1; al mundo de lo desconocido, mucha madurez y contacto con el m&#xE1;s all&#xE1;.";
    if ($_REQUEST['cod']==11)
      echo "<strong>Acuario:</strong> Hoy todo asunto tiene que ver con el entorno inmediato, hermanos y vecinos, con la comunicaci&#xF3;n, los viajes cortos o traslados frecuentes. El hablar y trasladarse ser&#xE1; importante hoy. Mentalidad e ideas activas.";
    if ($_REQUEST['cod']==12)
      echo "<strong>Piscis:</strong> Durante este d&#xED;a se vivir&#xE1;n cambios en la econom&#xED;a, movimientos en los ingresos, negocios, valores. Momentos de gran fuerza y decisi&#xF3;n profesionales, buscar&#xE1;s el liderazgo.";
}
?>