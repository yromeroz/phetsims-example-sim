// Copyright 2021, University of Colorado Boulder

/**
 * MagnetsScreenView is the top-level view component for the 'Magnets' screen. All of the components that make up
 * the screen's view are added here.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import Vector2 from '../../../../dot/js/Vector2.js';
import ScreenView from '../../../../joist/js/ScreenView.js';
import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import ExampleSimConstants from '../../common/ExampleSimConstants.js';
import exampleSim from '../../exampleSim.js';
import { Image } from '../../../../scenery/js/imports.js';
import screenBackground_png from '../../../images/screenBackground_png.js';
//import BallScaleSlider from './BallScaleSlider.js';
import BarMagnetNode from './BarMagnetNode.js';
import MagnetsControlPanel from './MagnetsControlPanel.js';
import BallNode from './BallNode.js';

// The model is in nanometers, and this is the number of nanometers per 1 unit in the view.
// const NANOMETERS_PER_PIXEL = 100;
class MagnetsScreenView extends ScreenView {

  /**
   * @param {MagnetsModel} model - the top-level model for this screen
   */
  constructor( model ) {

    super();

    // transform between model coordinates and view coordinates
    const center = new Vector2( this.layoutBounds.width / 2, this.layoutBounds.height / 2 );
    const modelViewTransform = ModelViewTransform2.createOffsetScaleMapping( center, 1 );

    // Transform from model coordinates to view coordinates. The model's origin is at the position where the
    // particles originate. Move that position to the top center of the screen.  Since the model is in nm,
    // scale up from model to view. And since +y is up in the model, the y scale is negative because +y is
    // down in the view (scenery).
    // const viewOffset = new Vector2( this.layoutBounds.centerX, 20 );
    // const modelViewTransform2 = ModelViewTransform2.createOffsetXYScaleMapping( viewOffset,
    //     1 / NANOMETERS_PER_PIXEL, -1 / NANOMETERS_PER_PIXEL );

    // Create and add the background image for the area where the user will be able to place things and change their
    // elevation.  This is scaled to match the bounds defined in the model, so the resolution and aspect ratio of the
    // image needs to be close to what is shown or this won't look good.
    const screenBackgroundImage = new Image( screenBackground_png );
    // screenBackgroundImage.scale(
    //   // model.elevationAreaBounds.width / elevationAreaImage.width,
    //   // model.elevationAreaBounds.height / elevationAreaImage.height
    //   this.width / screenBackgroundImage.width,
    //   this.height / screenBackgroundImage.height
    // );
    screenBackgroundImage.center = this.center;
    this.addChild( screenBackgroundImage );

    // Add a magnet. The model determines its position.
    this.addChild( new BarMagnetNode( model.barMagnet, modelViewTransform ) );
    this.addChild( new BarMagnetNode( model.barMagnet2, modelViewTransform ) );
    this.addChild( new BallNode( model.ball,
                    modelViewTransform ) );
                    // merge( { color: ExampleSimConstants.PARTICLE_COLOR } ) ) );

    // Add the control panel for magnets, positioned at the top-right of the screen.
    this.addChild( new MagnetsControlPanel( model, {
      right: this.layoutBounds.right - ExampleSimConstants.SCREEN_VIEW_X_MARGIN,
      top: this.layoutBounds.top + ExampleSimConstants.SCREEN_VIEW_Y_MARGIN
    } ) );

    // Add the scale slider for ball, positioned at the top-left of the screen.
    // this.addChild( new BallScaleSlider( model, {
    //   right: this.layoutBounds.right + ExampleSimConstants.SCREEN_VIEW_X_MARGIN,
    //   top: this.layoutBounds.top + ExampleSimConstants.SCREEN_VIEW_Y_MARGIN
    // } ) );

    // Add the 'Reset All' button. This resets the simulation to its initial state. By PhET convention, this
    // button is positioned at the lower-right of the screen.
    this.addChild( new ResetAllButton( {
      listener: () => {

        // Interrupt any other user interactions that may be in progress, needed for multi-touch.
        // To demonstrate, press the Reset All button while dragging the magent.
        this.interruptSubtreeInput();

        // Reset the model
        model.reset();
      },
      right: this.layoutBounds.right - ExampleSimConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.bottom - ExampleSimConstants.SCREEN_VIEW_Y_MARGIN
    } ) );
  }
}

exampleSim.register( 'MagnetsScreenView', MagnetsScreenView );
export default MagnetsScreenView;