window.onload = function() {
  console.log('hello');
  var game = new Phaser.Game(600, 500, Phaser.AUTO, 'phaser-example', { create: create, update: update, render: render });
  var rect;
  var peoria, sunCity, glendale, youngtown, northPhoenix, paradiseValley, caveCreek, northScottsdale, scottsdale, fountainHills, goodyears, park, avondale, tolleson, phoenix, chandler, northMesa, southPhoenix, chandler, gilbert, southMesa;
  var graphics;

  function create() {
    game.stage.backgroundColor = "#000";


    this.state = 'movementPartOne';
    // rect = new Phaser.Rectangle(50, 50, 50, 50);
    // rect.neighbors = ['hello', 'world'];

    peoria = new Phaser.Polygon();

    //Peoria
    //  And then populate it via setTo, using any combination of values as above
    peoria.setTo([ new Phaser.Point(50, 50), new Phaser.Point(175, 50), new Phaser.Point(175, 200), new Phaser.Point(125, 200), new Phaser.Point(125, 100), new Phaser.Point(50, 100) ]);

    graphics = game.add.graphics(0, 0);

    graphics.beginFill(0xf5deb3);
    graphics.drawPolygon(peoria.points);
    graphics.endFill();

    sunCity = new Phaser.Polygon();
    // Sun City
    //  And then populate it via setTo, using any combination of values as above
    sunCity.setTo([new Phaser.Point(125, 100), new Phaser.Point(25, 100), new Phaser.Point(25, 175), new Phaser.Point(125, 175) ]);


    graphics.beginFill(0xFFC0CB);
    graphics.drawPolygon(sunCity.points);
    graphics.endFill();

    youngtown = new Phaser.Polygon();

    // Youngtown
    //  And then populate it via setTo, using any combination of values as above
    youngtown.setTo([new Phaser.Point(125, 175), new Phaser.Point(100, 175), new Phaser.Point(100, 225), new Phaser.Point(125, 225) ]);


    graphics.beginFill(0x88bbff);
    graphics.drawPolygon(youngtown.points);
    graphics.endFill();

    glendale = new Phaser.Polygon();
    // Glendale
    //  And then populate it via setTo, using any combination of values as above
    glendale.setTo([new Phaser.Point(125, 200), new Phaser.Point(175, 200), new Phaser.Point(175, 100), new Phaser.Point(225, 100), new Phaser.Point(225, 250), new Phaser.Point(125, 250)]);


    graphics.beginFill(0x88ee99);
    graphics.drawPolygon(glendale.points);
    graphics.endFill();

    northPhoenix = new Phaser.Polygon();
    // North phoenix
    //  And then populate it via setTo, using any combination of values as above
    northPhoenix.setTo([new Phaser.Point(225, 250), new Phaser.Point(225, 100), new Phaser.Point(175, 100), new Phaser.Point(175, 60), new Phaser.Point(350, 60), new Phaser.Point(350, 200), new Phaser.Point(300, 200), new Phaser.Point(300, 250)]);


    graphics.beginFill(0x88ee33);
    graphics.drawPolygon(northPhoenix.points);
    graphics.endFill();

    paradiseValley = new Phaser.Polygon();
    // paradise valley
    //  And then populate it via setTo, using any combination of values as above
    paradiseValley.setTo([new Phaser.Point(300, 200), new Phaser.Point(350,200), new Phaser.Point(350, 250), new Phaser.Point(300, 250) ]);


    graphics.beginFill(0xffaa33);
    graphics.drawPolygon(paradiseValley.points);
    graphics.endFill();

    caveCreek = new Phaser.Polygon();
    // cave creek
    //  And then populate it via setTo, using any combination of values as above
    caveCreek.setTo([new Phaser.Point(300, 60), new Phaser.Point(300,10), new Phaser.Point(375, 10), new Phaser.Point(375, 60) ]);


    graphics.beginFill(0xffaa33);
    graphics.drawPolygon(caveCreek.points);
    graphics.endFill();

    northScottsdale = new Phaser.Polygon();
    // north scottsdale
    //  And then populate it via setTo, using any combination of values as above
    northScottsdale.setTo([new Phaser.Point(375, 60), new Phaser.Point(375, 10), new Phaser.Point(450, 10), new Phaser.Point(450, 190), new Phaser.Point(350, 190), new Phaser.Point(350, 60)]);


    graphics.beginFill(0xffcc88);
    graphics.drawPolygon(northScottsdale.points);
    graphics.endFill();

    scottsdale = new Phaser.Polygon();
    // scottsdale
    //  And then populate it via setTo, using any combination of values as above
    scottsdale.setTo([new Phaser.Point(350, 190), new Phaser.Point(350, 300), new Phaser.Point(375, 300), new Phaser.Point(375, 220), new Phaser.Point(450, 220), new Phaser.Point(450, 190)]);


    graphics.beginFill(0xff5588);
    graphics.drawPolygon(scottsdale.points);
    graphics.endFill();

    fountainHills = new Phaser.Polygon();
    // fountain hills
    //  And then populate it via setTo, using any combination of values as above
    fountainHills.setTo([new Phaser.Point(450, 220), new Phaser.Point(500, 220), new Phaser.Point(500, 170), new Phaser.Point(450, 170)]);


    graphics.beginFill(0xabc123);
    graphics.drawPolygon(fountainHills.points);
    graphics.endFill();

    phoenix = new Phaser.Polygon();
    // phoenix
    //  And then populate it via setTo, using any combination of values as above
    phoenix.setTo([new Phaser.Point(350, 250), new Phaser.Point(350, 300), new Phaser.Point(325, 300), new Phaser.Point(325, 350), new Phaser.Point(190, 350), new Phaser.Point(190, 325), new Phaser.Point(150, 325), new Phaser.Point(150, 250)]);


    graphics.beginFill(0xabc123);
    graphics.drawPolygon(phoenix.points);
    graphics.endFill();

    tolleson = new Phaser.Polygon();
    // tolleson
    //  And then populate it via setTo, using any combination of values as above
    tolleson.setTo([new Phaser.Point(190, 325), new Phaser.Point(190, 350), new Phaser.Point(130, 350), new Phaser.Point(130, 325)]);


    graphics.beginFill(0xffeeaa);
    graphics.drawPolygon(tolleson.points);
    graphics.endFill();

    avondale = new Phaser.Polygon();
    // avondale
    //  And then populate it via setTo, using any combination of values as above
    avondale.setTo([new Phaser.Point(130, 350), new Phaser.Point(150, 350), new Phaser.Point(150, 400), new Phaser.Point(100, 400), new Phaser.Point(100, 275), new Phaser.Point(125, 275), new Phaser.Point(125, 260), new Phaser.Point(150, 260), new Phaser.Point(150, 325), new Phaser.Point(130, 325)]);


    graphics.beginFill(0xffcc88);
    graphics.drawPolygon(avondale.points);
    graphics.endFill();

    park = new Phaser.Polygon();
    // park
    //  And then populate it via setTo, using any combination of values as above
    park.setTo([new Phaser.Point(125, 275), new Phaser.Point(90, 275), new Phaser.Point(90, 255), new Phaser.Point(125, 255)]);


    graphics.beginFill(0xbb9944);
    graphics.drawPolygon(park.points);
    graphics.endFill();

    goodyears = new Phaser.Polygon();
    // goodyears
    //  And then populate it via setTo, using any combination of values as above
    goodyears.setTo([ new Phaser.Point(90, 255), new Phaser.Point(90, 275), new Phaser.Point(100, 275), new Phaser.Point(100, 450), new Phaser.Point(40, 450), new Phaser.Point(40, 255)]);


    graphics.beginFill(0xeeee77);
    graphics.drawPolygon(goodyears.points);
    graphics.endFill();

    southPhoenix = new Phaser.Polygon();
    // southPhoenix
    //  And then populate it via setTo, using any combination of values as above
    southPhoenix.setTo([ new Phaser.Point(150, 350), new Phaser.Point(150, 375), new Phaser.Point(210, 375), new Phaser.Point(210, 425), new Phaser.Point(325, 425), new Phaser.Point(325, 350)]);


    graphics.beginFill(0x0000ff);
    graphics.drawPolygon(southPhoenix.points);
    graphics.endFill();

    tempe = new Phaser.Polygon();
    // tempe
    //  And then populate it via setTo, using any combination of values as above
    tempe.setTo([new Phaser.Point(325, 300), new Phaser.Point(375, 300), new Phaser.Point(375, 400), new Phaser.Point(325, 400)]);


    graphics.beginFill(0x00ffff);
    graphics.drawPolygon(tempe.points);
    graphics.endFill();

    chandler = new Phaser.Polygon();
    // chandler
    //  And then populate it via setTo, using any combination of values as above
    chandler.setTo([new Phaser.Point(325, 400), new Phaser.Point(375, 400), new Phaser.Point(375, 375), new Phaser.Point(400, 375), new Phaser.Point(400, 425), new Phaser.Point(425, 425), new Phaser.Point(425, 475), new Phaser.Point(350, 475), new Phaser.Point(350, 425), new Phaser.Point(325, 425)]);


    graphics.beginFill(0xff00ff);
    graphics.drawPolygon(chandler.points);
    graphics.endFill();

    gilbert = new Phaser.Polygon();
    // gilbert
    //  And then populate it via setTo, using any combination of values as above
    gilbert.setTo([ new Phaser.Point(400, 425), new Phaser.Point(500, 425), new Phaser.Point(500, 350), new Phaser.Point(400,350)]);


    graphics.beginFill(0x123abc);
    graphics.drawPolygon(gilbert.points);
    graphics.endFill();

    southMesa = new Phaser.Polygon();
    // southMesa
    //  And then populate it via setTo, using any combination of values as above
    southMesa.setTo([new Phaser.Point(400,350), new Phaser.Point(400,375), new Phaser.Point(375,375), new Phaser.Point(375,310), new Phaser.Point(575,310), new Phaser.Point(575,375), new Phaser.Point(500,375), new Phaser.Point(500,350)]);


    graphics.beginFill(0xbbaa22);
    graphics.drawPolygon(southMesa.points);
    graphics.endFill();

    mesa = new Phaser.Polygon();
    // mesa
    //  And then populate it via setTo, using any combination of values as above
    mesa.setTo([new Phaser.Point(375,310), new Phaser.Point(375, 260), new Phaser.Point(575, 260), new Phaser.Point(575, 310)]);


    graphics.beginFill(0xffbbcc);
    graphics.drawPolygon(mesa.points);
    graphics.endFill();

    game.stage.scale.pageAlignHorizontally = true;
    game.stage.scale.pageAlignVertically = true;
    game.scale.refresh();
  }

  function render() {
    // game.debug.rectangle(rect);  ``
  }

  function update() {
    // if (poly.contains(game.input.x, game.input.y) && game.input.activePointer.isDown && this.state==='movementPartOne') {
    //   console.log('hi');
    //   this.state = 'movementPartTwo';
    // }
    // if (game.input.activePointer.isDown && (game.input.activePointer.x >= rect.x && game.input.activePointer.x <= rect.x + rect.width && game.input.activePointer.y >= rect.y && game.input.activePointer.y <= rect.y + rect.height)) {
    //   console.log('clicked me!');
    // }
    // console.log(rect);
  }

}
