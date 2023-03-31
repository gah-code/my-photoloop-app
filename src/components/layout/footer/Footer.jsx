import { DiGithubBadge } from 'react-icons/di';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='footer__logo-box'>
          <div className='footer__logo'>
            <h4>MyPhotoloopApp</h4>
          </div>
        </div>
        <div className='container grid grid__2-cols'>
          <div class='footer__navigation'>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a href='/' className='footer__link' alt='link'>
                  Company{' '}
                </a>
              </li>
              <li className='footer__item'>
                <a href='/' className='footer__link' alt='link'>
                  Resources
                </a>
              </li>
              <li className='footer__item'>
                <a
                  href='https://github.com/gah-code'
                  className='footer__link'
                  alt='link'
                >
                  <h1>
                    {' '}
                    <DiGithubBadge />{' '}
                  </h1>
                </a>
              </li>
              <li className='footer__item'>
                <a
                  href='https://www.linkedin.com/in/gilbert-haro-2b108222b'
                  className='footer__link'
                  alt='link'
                >
                  <h1>
                    <AiFillLinkedin />
                  </h1>
                </a>
              </li>
              <li className='footer__item'>
                <a href='/' className='footer__link' alt='link'>
                  <h1>
                    <AiFillInstagram />
                  </h1>
                </a>
              </li>
            </ul>
          </div>

          <p class='footer__copyright'>
            Project created by Copyright &copy;{' '}
            <a href='/' className='footer__link'>
              Gilbert A. Haro
            </a>{' '}
            Including images and photoshop designs, credit to the original
            author.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
