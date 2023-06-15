document.addEventListener("DOMContentLoaded", function () {
  AOS.init();

  const dataEvento = new Date("Jun 18, 2023, 13:00:00");
  const timeStampEvento = dataEvento.getTime();

  const contaHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timeStampEvento - timeStampAtual;

    const diaEmMS = 1000 * 60 * 60 * 24;
    const horasEmMS = 1000 * 60 * 60;
    const minutoEmMS = 1000 * 60;

    const diasEvento = Math.floor(distanciaEvento / diaEmMS);
    const horasEvento = Math.floor((distanciaEvento % diaEmMS) / horasEmMS);
    const minutosEvento = Math.floor(
      (distanciaEvento % horasEmMS) / minutoEmMS
    );
    const segundosEvento = Math.floor((distanciaEvento % minutoEmMS) / 1000);

    document.getElementById(
      "contador"
    ).innerHTML = `${diasEvento}d ${horasEvento}h ${minutosEvento}min ${segundosEvento}s`;

    if (distanciaEvento < 0) {
      clearInterval(contaHoras);
      document.getElementById("contador").innerHTML = `Evento Expirou`;
    }
  }, 1000);
});
