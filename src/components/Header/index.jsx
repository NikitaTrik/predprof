import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { addSettingValues } from '../../store/settingSlice';

import styles from './Header.module.scss';

function Header() {
  const dispatch = useDispatch();
  const [settingsMenuState, setSettingsMenuState] = useState(false);
  const [emergencyBtnState, setEmergencyBtnState] = useState(false);
  const [settingValues, setSettingValues] = useState({
    averageTemp: '',
    averageHum: '',
    averageSoilHum: '',
  });
  const ref = useRef(null);
  const btnRef = useRef(null);
  useOutsideClick(ref, btnRef, () => setSettingsMenuState(false));
  return (
    <>
      <header className={styles.block}>
        <div className={styles.wrapper}>
          <Link className={styles.title} to="/">
            Название
          </Link>
          <nav className={styles.links}>
            <Link to="/" className={styles.link}>
              Управление компонентами
            </Link>
            <Link to="/normalData" className={styles.link}>
              Температура и влажность
            </Link>
            <Link to="/averageData" className={styles.link}>
              Ср. температура и влажность
            </Link>
            <Link to="/soilHumidity" className={styles.link}>
              Влажность почвы
            </Link>
          </nav>
        </div>
        <svg
          ref={btnRef}
          onClick={() => setSettingsMenuState(!settingsMenuState)}
          className={classNames(styles.icon, styles.active)}
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.1801 4.80097V4.80099L21.2539 5.53891C21.4172 7.17244 21.4989 7.98921 22.0517 8.2182C22.6046 8.44718 23.2398 7.92739 24.5104 6.88781L25.0844 6.41823C25.7501 5.87352 26.083 5.60116 26.4678 5.62036C26.8527 5.63955 27.1568 5.94368 27.7651 6.55193L29.448 8.23488C30.0563 8.84313 30.3604 9.14726 30.3796 9.5321C30.3988 9.91693 30.1264 10.2498 29.5817 10.9156L29.1121 11.4895C28.0725 12.7601 27.5527 13.3954 27.7817 13.9483C28.0107 14.5011 28.8275 14.5827 30.461 14.7461L31.199 14.8199C32.0549 14.9055 32.4829 14.9483 32.7415 15.234C33 15.5197 33 15.9498 33 16.81V19.19C33 20.0502 33 20.4803 32.7415 20.766C32.4829 21.0517 32.0549 21.0945 31.199 21.1801H31.199L30.4616 21.2538C28.828 21.4172 28.0113 21.4989 27.7823 22.0517C27.5533 22.6045 28.0731 23.2398 29.1127 24.5104L29.5818 25.0838C30.1265 25.7495 30.3989 26.0824 30.3797 26.4672C30.3605 26.8521 30.0563 27.1562 29.4481 27.7645L27.7651 29.4474C27.1569 30.0557 26.8528 30.3598 26.4679 30.379C26.0831 30.3982 25.7502 30.1258 25.0844 29.5811L24.5105 29.1115C23.2399 28.0719 22.6046 27.5522 22.0518 27.7811C21.499 28.0101 21.4173 28.8269 21.254 30.4604L21.1801 31.199C21.0945 32.0549 21.0517 32.4829 20.766 32.7415C20.4803 33 20.0502 33 19.19 33H16.81C15.9498 33 15.5197 33 15.234 32.7415C14.9483 32.4829 14.9055 32.0549 14.8199 31.199L14.7461 30.461C14.5827 28.8275 14.5011 28.0107 13.9483 27.7817C13.3954 27.5527 12.7601 28.0725 11.4896 29.1121L10.9155 29.5818C10.2497 30.1265 9.91686 30.3989 9.53203 30.3797C9.14719 30.3605 8.84307 30.0563 8.23481 29.4481L6.55186 27.7651C5.94361 27.1569 5.63948 26.8528 5.62029 26.4679C5.6011 26.0831 5.87345 25.7502 6.41816 25.0844L6.8878 24.5104C7.92738 23.2398 8.44717 22.6045 8.21819 22.0517C7.9892 21.4989 7.17243 21.4172 5.5389 21.2539L4.80099 21.1801H4.80097C3.94505 21.0945 3.51709 21.0517 3.25855 20.766C3 20.4803 3 20.0502 3 19.19L3 16.81C3 15.9498 3 15.5197 3.25855 15.234C3.5171 14.9483 3.94506 14.9055 4.80099 14.8199L5.53946 14.7461C7.173 14.5827 7.98977 14.501 8.21875 13.9482C8.44773 13.3954 7.92795 12.7601 6.88837 11.4895L6.41823 10.9149C5.87352 10.2491 5.60116 9.91625 5.62036 9.53142C5.63955 9.14658 5.94368 8.84246 6.55193 8.2342L6.55193 8.2342L8.23488 6.55125C8.84314 5.943 9.14726 5.63887 9.5321 5.61968C9.91693 5.60048 10.2498 5.87284 10.9156 6.41755L11.4896 6.88723C12.7602 7.9268 13.3955 8.44659 13.9483 8.21761C14.5011 7.98862 14.5828 7.17186 14.7462 5.53832L14.8199 4.80099C14.9055 3.94506 14.9483 3.51709 15.234 3.25855C15.5197 3 15.9498 3 16.81 3H19.19C20.0502 3 20.4803 3 20.766 3.25855C21.0517 3.51709 21.0945 3.94505 21.1801 4.80097ZM18 24C21.3137 24 24 21.3137 24 18C24 14.6863 21.3137 12 18 12C14.6863 12 12 14.6863 12 18C12 21.3137 14.6863 24 18 24Z"
            fill={settingsMenuState ? '#4791FF' : '#242424'}
          />
        </svg>
      </header>
      <div ref={ref} className={classNames(styles.menu, settingsMenuState && styles.active)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="498"
          height="769"
          viewBox="0 0 498 769"
          fill="none">
          <path
            d="M443.161 24.8757L435.246 2.8072C434.345 0.292832 430.854 0.122012 429.711 2.53633L418.708 25.7786C417.055 29.2723 413.535 31.5 409.67 31.5H10.5C4.97715 31.5 0.5 35.9772 0.5 41.5V758.5C0.5 764.023 4.97716 768.5 10.5 768.5H487.5C493.023 768.5 497.5 764.023 497.5 758.5V41.5C497.5 35.9772 493.023 31.5 487.5 31.5H452.574C448.352 31.5 444.586 28.8493 443.161 24.8757Z"
            fill="white"
          />
        </svg>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="">
            Средняя температура
            <input
              value={settingValues.averageTemp}
              onChange={(e) => setSettingValues({ ...settingValues, averageTemp: e.target.value })}
              placeholder="Введите температуру"
              className={classNames(styles.input, settingValues.averageTemp && styles.active)}
              type="text"
            />
          </label>
          <label className={styles.label} htmlFor="">
            Средняя влажность воздуха
            <input
              value={settingValues.averageHum}
              onChange={(e) => setSettingValues({ ...settingValues, averageHum: e.target.value })}
              placeholder="Введите влажность воздуха"
              className={classNames(styles.input, settingValues.averageHum && styles.active)}
              type="text"
            />
          </label>
          <label className={styles.label} htmlFor="">
            Средняя влажность почвы в бороздке
            <input
              value={settingValues.averageSoilHum}
              onChange={(e) =>
                setSettingValues({ ...settingValues, averageSoilHum: e.target.value })
              }
              placeholder="Введите влажность почвы"
              className={classNames(styles.input, settingValues.averageSoilHum && styles.active)}
              type="text"
            />
          </label>
          <button
            onClick={() => {
              setSettingsMenuState(false);
              dispatch(addSettingValues(settingValues));
            }}
            className={styles.saveBtn}>
            Сохранить настройки
          </button>
          <button
            onClick={() => {
              if (emergencyBtnState) {
                setEmergencyBtnState(false);
                dispatch(addSettingValues(settingValues));
                setSettingsMenuState(false);
              } else {
                setEmergencyBtnState(true);
                dispatch(addSettingValues({ averageTemp: '', averageHum: '', averageSoilHum: '' }));
                setSettingsMenuState(false);
              }
            }}
            className={classNames(
              styles.saveBtn,
              styles.emergency,
              emergencyBtnState && styles.active,
            )}>
            {emergencyBtnState ? 'Выключить экстренный режим' : 'Включить экстренный режим'}
          </button>
        </div>
      </div>

      {settingsMenuState && <div className={classNames(styles.bgBlur, styles.blur)}></div>}
    </>
  );
}

export default Header;
