// Copyright 2021, University of Colorado Boulder

/**
 * Ball is the model of a simple ball.
 *
 * @author Yidier Romero (yidier@gmail.com)
 */

import BooleanProperty from '../../../../axon/js/BooleanProperty.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import Vector2Property from '../../../../dot/js/Vector2Property.js';
import exampleSim from '../../exampleSim.js';
import merge from '../../../../phet-core/js/merge.js';

class Ball {

    /**
     * @param { Object } options - Ball's options
     */
    constructor( options ) {

        options = merge( {
            diameter: 20, // {number} nm
            position: new Vector2( 0, 0 ), // {Vector2} nm
            visible: 1 // {IsVisible|string}
        }, options );

        // @public (read-only) the ball's diameter, in nm
        this.diameter = options.diameter;

        // @public the ball's position, in nm
        this.positionProperty = new Vector2Property( options.position );

        // @public the ball's visibility
        this.visibleProperty = new BooleanProperty( options.visible );

        // @public (read-only)
        this.color = options.color;

    }

    /**
     * Restores the initial state of the Ball. This method is called
     * when the simulation's "Reset All" button is pressed.
     * @public
     */
    reset() {
        this.positionProperty.reset();
        this.visibleProperty.reset();
    }
}

exampleSim.register( 'Ball', Ball );
export default Ball;