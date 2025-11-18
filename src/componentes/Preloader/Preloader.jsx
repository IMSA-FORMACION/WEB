import style from './Preloader.module.css';
import logo from '../../assets/images/IMSA_Logo_Color.png';
import {Hourglass} from 'react-loader-spinner'

export default function Preloader() {
  return (
    <div className={style.preloader}>
      <img src={logo} alt="Logo IMSA" className={style.logo} />
     <Hourglass
  visible={true}
  height="50"
  width="50"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['  #935cfb ', '#b79afa ' ]}
  />
     
    </div>
  );
}

 