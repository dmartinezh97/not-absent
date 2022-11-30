const robot = require('robotjs');
const utils = require('./utils');

async function start() {
  console.log('Inicio');
  robot.setMouseDelay(2);
  await utils.delay(3000);

  const screenSize = robot.getScreenSize();
  const screenMiddle = { x: screenSize.width / 2, y: screenSize.height / 2 };
  robot.moveMouse(screenMiddle.x, screenMiddle.y);

  // En bucle mientras no se mueva el ratón
  while (robot.getMousePos().y === screenMiddle.y) {
    for (let x = screenMiddle.x - 50; x < screenMiddle.x + 50; x++) {
      robot.moveMouse(x, screenMiddle.y);
    }
    await utils.delay(1000);
    for (let x = screenMiddle.x + 50; x > screenMiddle.x - 50; x--) {
      robot.moveMouse(x, screenMiddle.y);
    }
    await utils.delay(1000);
  }

  console.log('Fin');
}

start();
