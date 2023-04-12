// Copyright 2013-2022, University of Colorado Boulder

/**
 * MagnetsControlPanel is a panel that contains controls for magnets.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import merge from '../../../../phet-core/js/merge.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import { Font, Text, VBox } from '../../../../scenery/js/imports.js';
import RectangularPushButton from '../../../../sun/js/buttons/RectangularPushButton.js';
import Checkbox from '../../../../sun/js/Checkbox.js';
import Panel from '../../../../sun/js/Panel.js';
import exampleSim from '../../exampleSim.js';
import ExampleSimStrings from '../../ExampleSimStrings.js';

const CHECKBOX_FONT = new Font( { size: 20 } );
class MagnetsControlPanel extends Panel {

  /**
   * @param {MagnetsModel} model - the model for the entire screen
   * @param {Object} [options] - options for the control panel, see Panel.js for options
   */
  constructor( model, options ) {

    // Demonstrate a common pattern for specifying options and providing default values
    options = merge( {

      // Panel options
      xMargin: 10,
      yMargin: 10,
      stroke: 'orange',
      lineWidth: 3
    }, options );

    // 'Magnet Controls' title
    const magnetControlsTitleNode = new Text( ExampleSimStrings.magnetControlsStringProperty, {
      font: new PhetFont( {
        size: 18,
        weight: 'bold'
      } )
    } );

    // 'Flip Polarity' button
    const flipPolarityButton = new RectangularPushButton( {
      content: new Text( ExampleSimStrings.flipPolarityStringProperty, {
        font: new PhetFont( 16 )
      } ),
      baseColor: 'yellow',
      xMargin: 10,
      listener: () => {
        const orientation = model.barMagnet.orientationProperty.get() + Math.PI;
        const orientation2 = model.barMagnet2.orientationProperty.get() + Math.PI;
        model.barMagnet.orientationProperty.set( orientation );
        model.barMagnet2.orientationProperty.set( orientation2 );
      }
    } );

    // 'Ball Visibility' checkbox
    // show/hide ball
    const ballVisibleProperty = model.ball.visibleProperty;
    const ballVisibleCheckbox = new Checkbox( ballVisibleProperty,
      new Text( 'Ball visible', { font: CHECKBOX_FONT } ),
      {

      } );

    // The contents of the control panel
    const content = new VBox( {
      align: 'center',
      spacing: 10,
      children: [
        magnetControlsTitleNode,
        flipPolarityButton,
        ballVisibleCheckbox
      ]
    } );

    super( content, options );
  }
}

exampleSim.register( 'MagnetsControlPanel', MagnetsControlPanel );
export default MagnetsControlPanel;