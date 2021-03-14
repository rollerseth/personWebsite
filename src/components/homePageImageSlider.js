import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import me from '../images/me.jpg'
import DSC00179 from '../images/DSC00179.JPG'
import DSC00181 from '../images/DSC00181.JPG'
import DSC00188 from '../images/DSC00188.JPG'
import IMG0633 from '../images/IMG0633.jpg'
import WestTripOct202059 from '../images/WestTripOct202059.JPEG'
import WestTripOct2020255 from '../images/WestTripOct2020255.JPEG'

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const slider = (
    <AutoplaySlider 
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}>
    <div data-src={me} />
    <div data-src={DSC00179} />
    <div data-src={DSC00181} />
    <div data-src={DSC00188} />
    <div data-src={IMG0633} />
    <div data-src={WestTripOct202059} />
    <div data-src={WestTripOct2020255} />
  </AutoplaySlider>
);
