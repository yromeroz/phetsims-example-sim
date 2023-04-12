// Copyright 2013-2021, University of Colorado Boulder

/**
 * MagnetsModel is the top-level model for the 'Magnets' screen. You can think of the top-level model as a container
 * for all of the pieces that make up the model for a screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import Dimension2 from '../../../../dot/js/Dimension2.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import exampleSim from '../../exampleSim.js';
import BarMagnet from './BarMagnet.js';
import Ball from './Ball.js';
import merge from '../../../../phet-core/js/merge.js';

class MagnetsModel {

  constructor() {

    // @public {BarMagnet} initial bar magnet model element
    this.barMagnet = new BarMagnet( new Dimension2( 250, 50 ), new Vector2( 0, 0 ), 0 );
    // @public {BarMagnet2} 2nd bar magnet model element
    this.barMagnet2 = new BarMagnet( new Dimension2( 250, 50 ), new Vector2( 100, 100 ), 0 );

    // @public {Ball} ball model element
    let options = null;
    options = merge( {
      diameter: 100, // {number} nm
      position: new Vector2( -200, 0 ), // {Vector2} nm
      color: 'rgb( 250, 128, 114 )', // {Color|string} salmon
      visible: 'true'
    }, options );
    this.ball = new Ball( options );

  }

  /**
   * Restores the initial state of all model elements.
   * This method is called when the simulation's "Reset All" button is pressed.
   * @public
   */
  reset() {
    this.barMagnet.reset();
    this.barMagnet2.reset();
    this.ball.reset();
  }
}

exampleSim.register( 'MagnetsModel', MagnetsModel );
export default MagnetsModel;