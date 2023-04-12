// Copyright 2013-2022, University of Colorado Boulder

/**
 * MagnetsScreen is the top-level component for the 'Magnets' screen.  It creates the model and view.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Property from '../../../axon/js/Property.js';
import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import merge from '../../../phet-core/js/merge.js';
import { Image } from '../../../scenery/js/imports.js';
import barMagnet_png from '../../images/barMagnet_png.js';
import ExampleSimConstants from '../common/ExampleSimConstants.js';
import exampleSim from '../exampleSim.js';
import ExampleSimStrings from '../ExampleSimStrings.js';
import MagnetsModel from './model/MagnetsModel.js';
import MagnetsScreenView from './view/MagnetsScreenView.js';

// constants
const BACKGROUND_COLOR_PROPERTY = new Property( 'white' );

class MagnetsScreen extends Screen {

  constructor() {

    const options = merge( {
      name: ExampleSimStrings.screen.magnetsStringProperty,
      homeScreenIcon: createScreenIcon()
    }, ExampleSimConstants.SCREEN_OPTIONS );

    super(
      () => new MagnetsModel(),
      model => new MagnetsScreenView( model ),
      options
    );
  }
}

/**
 * Creates the icon for this screen. This will be used for the home screen and navigation bar.
 * Always use ScreenIcon for screen icons.
 * @returns {ScreenIcon}
 */
function createScreenIcon() {
  const iconNode = new Image( barMagnet_png );
  return new ScreenIcon( iconNode, {
    fill: BACKGROUND_COLOR_PROPERTY
  } );
}

exampleSim.register( 'MagnetsScreen', MagnetsScreen );
export default MagnetsScreen;