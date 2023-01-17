import ServiceItem from './ServiceItem';
import Img from '../../../assets/FamilySection.png';

import './Services.scss';

const DUMMY_PRODUCTS = [
  {
    id: 'test',
    title: '',
    description:
      'Users can select their preferred time, location, photographer,style and our API will craft a plan that matches best with your selected preferences.',
  },
];

const Services = () => {
  return (
    <section className='section-services'>
      <div className='container'>
        <span className='subheading'>Services</span>
        <h2 className='heading-secondary'>What we do</h2>
      </div>

      <div className='container grid grid--2-cols'>
        {/* Grid One */}
        <div className='step-text-box'>
          <p className='step-number'></p>
          <h3 className='heading-tertiary'>a tech-centric approach</h3>
          <p className='description'>
            Users can select their preferred time, location, photographer, style
            and our API will craft a plan that matches best with your selected
            preferences.
          </p>
        </div>
        <div className='service-img-box'>
          <img className='service-img' src={Img} alt='' />
        </div>

        {/* Grid Two */}
        <div className='service-img-box'>
          <img className='service-img' src={Img} alt='' />
        </div>
        <div className='step-text-box'>
          {/* <p className='step-number'>01</p> */}
          <h3 className='heading-tertiary'>
            Tell us what you would like to capture
          </h3>
          <p className='description'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
            reprehenderit laborum alias aliquam molestiae est, cum asperiores
            quae, similique eum nam? Eveniet, numquam ad voluptate ipsum sequi
            perferendis natus. Molestiae.
          </p>
        </div>
        {/* Grid Three */}
        <div className='step-text-box'>
          {/* <p className='step-number'>01</p> */}
          <h3 className='heading-tertiary'>
            Tell us what you would like to capture
          </h3>
          <p className='description'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
            reprehenderit laborum alias aliquam molestiae est, cum asperiores
            quae, similique eum nam? Eveniet, numquam ad voluptate ipsum sequi
            perferendis natus. Molestiae.
          </p>
        </div>
        <div className='service-img-box'>
          <img className='service-img' src={Img} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Services;
