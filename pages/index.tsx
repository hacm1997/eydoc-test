import { useEffect, useState } from 'react';
import styles from '../styles/styles.module.css'

const SwitchInput: React.FC = () => {
  const [isOn, setIsOn] = useState(false);
  const [style, setStyle] = useState(styles.bg_switch);

  useEffect(() => {
    setIsOn(false);
  }, []);

  const handleToggle = () => {
    setIsOn(!isOn);
    console.log(`The switch is ${isOn ? 'on' : 'off'}.`);
    if(!isOn){
      setStyle(styles.bg_switch_on);
    }else{
      setStyle(styles.bg_switch);
    }
    // Perform any additional logic you need here
  };

  return (
    <div className='flex justify-center items-center pt-[15%]'>

      <div className={isOn ? styles.container_on : styles.container}>
        
        <p  className='text-center'>Develop by: <br/> <strong>Heiner Acosta Silgado</strong></p><br/>
        <h1 className='text-center'>DAME CLICK</h1>
        <div className='flex justify-center'>

          <div className="flex justify-center w-10 select-none transition duration-200 ease-in">
            <div className={"absolute w-[100px] h-6 rounded-full transition-colors duration-200 ease-in "+ style} onClick={handleToggle}>
              <div
                className={`${
                  isOn ? 'translate-x-[60px]' : 'translate-x-0'
                } w-10 h-[24px] mt-[0] bg-white rounded-full transition-transform duration-200 ease-in`}
              />
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default SwitchInput;
