// Copyright 2021, University of Colorado Boulder

/**
 * Ball s the view for the ball. It is responsible for the visual representation of ball.
 *
 * @author Yidier Romero
 */

import ShadedSphereNode from '../../../../scenery-phet/js/ShadedSphereNode.js';
import { DragListener } from '../../../../scenery/js/imports.js';
import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import exampleSim from '../../exampleSim.js';
import merge from '../../../../phet-core/js/merge.js';
import Ball from '../model/Ball.js';

class BallNode extends ShadedSphereNode {

    /**
     * @param {Ball} ball - the model of the ball
     * @param {ModelViewTransform2} modelViewTransform - the transform between model coordinates and view coordinates
     * @param {Object} [options]
     */
    constructor( ball, modelViewTransform, options ) {

        options = merge( {
            // ShadedSphereNode options
            mainColor: ball.color
        }, options );

        super( modelViewTransform.modelToViewDeltaX( ball.diameter ), options );

        // @public (read-only)
        this.ball = ball;

        // Update the view position to match the model position.
        // Note that we're applying the transform from model to view coordinates.
        ball.positionProperty.link( position => {
            this.translation = modelViewTransform.modelToViewPosition( position );
        } );

        // Update visibility to match the model.
        ball.visibleProperty.link( visible => {
            this.visible = visible;
        } );

        // This is an example of using assertions to check for potential programming errors. In this case, we are verifying
        // that the arguments have the expected type.  Run the simulation with query parameter ?ea to enable assertions.
        assert && assert( ball instanceof Ball, 'invalid ball' );
        assert && assert( modelViewTransform instanceof ModelViewTransform2, 'invalid modelViewTransform' );

        // Move the ball by dragging it.
        this.addInputListener( new DragListener( {
            allowTouchSnag: true, // When dragging across it on a touch device, pick it up
            positionProperty: ball.positionProperty,
            visibleProperty: ball.visibleProperty,
            transform: modelViewTransform
        } ) );

    }
}

exampleSim.register( 'BallNode', BallNode );
export default BallNode;
