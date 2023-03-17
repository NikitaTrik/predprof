import axios from 'axios';
import classNames from 'classnames';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeWateringState } from '../../store/devicesSlice';

import styles from './ManageItemArrow.module.scss';

function ManageItemArrow({ status, btnText, deviceState }) {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const avrData = useSelector((state) => state.sensorsData.soilHumidity);
  const count =
    avrData.length &&
    avrData.reduce((a, b) => (+b?.id === currentIndex + 1 ? a + b?.humidity : a), 0) /
      avrData.reduce((a, b) => (+b?.id === currentIndex + 1 ? a + 1 : a), 0);
  const settingData = useSelector((state) => state.setting.settingValues)?.averageSoilHum;
  const titles = [
    'Первый автополив',
    'Второй автополив',
    'Третий автополив',
    'Четвертый автополив',
    'Пятый автополив',
    'Шестой автополив',
  ];
  return (
    <div className={styles.block}>
      <div className={styles.header}>
        <svg
          onClick={() => setCurrentIndex(currentIndex === 0 ? 5 : currentIndex - 1)}
          xmlns="http://www.w3.org/2000/svg"
          width="80px"
          height="80px"
          viewBox="0 0 24 24"
          fill="none">
          <path
            d="M13.75 16.25C13.6515 16.2505 13.5538 16.2313 13.4628 16.1935C13.3718 16.1557 13.2893 16.1001 13.22 16.03L9.72001 12.53C9.57956 12.3894 9.50067 12.1988 9.50067 12C9.50067 11.8013 9.57956 11.6107 9.72001 11.47L13.22 8.00003C13.361 7.90864 13.5285 7.86722 13.6958 7.88241C13.8631 7.89759 14.0205 7.96851 14.1427 8.08379C14.2649 8.19907 14.3448 8.35203 14.3697 8.51817C14.3946 8.68431 14.363 8.85399 14.28 9.00003L11.28 12L14.28 15C14.4205 15.1407 14.4994 15.3313 14.4994 15.53C14.4994 15.7288 14.4205 15.9194 14.28 16.06C14.1353 16.1907 13.9448 16.259 13.75 16.25Z"
            fill="#000000"
          />
        </svg>
        <h2 className={styles.title}>{titles[currentIndex]}</h2>
        <svg
          onClick={() => setCurrentIndex((currentIndex + 1) % 6)}
          xmlns="http://www.w3.org/2000/svg"
          width="80px"
          height="80px"
          viewBox="0 0 24 24"
          fill="none">
          <path
            d="M10.25 16.25C10.1493 16.2466 10.0503 16.2227 9.95921 16.1797C9.86807 16.1367 9.78668 16.0756 9.72001 16C9.57956 15.8594 9.50067 15.6688 9.50067 15.47C9.50067 15.2713 9.57956 15.0806 9.72001 14.94L12.72 11.94L9.72001 8.94002C9.66069 8.79601 9.64767 8.63711 9.68277 8.48536C9.71786 8.33361 9.79933 8.19656 9.91586 8.09322C10.0324 7.98988 10.1782 7.92538 10.3331 7.90868C10.4879 7.89198 10.6441 7.92391 10.78 8.00002L14.28 11.5C14.4205 11.6407 14.4994 11.8313 14.4994 12.03C14.4994 12.2288 14.4205 12.4194 14.28 12.56L10.78 16C10.7133 16.0756 10.6319 16.1367 10.5408 16.1797C10.4497 16.2227 10.3507 16.2466 10.25 16.25Z"
            fill="#000000"
          />
        </svg>
      </div>
      <div className={styles.state}>
        <div className={classNames(styles.iconBlock, deviceState[currentIndex] && styles.active)}>
          {deviceState[currentIndex] ? (
            <svg
              width="23"
              height="19"
              viewBox="0 0 23 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 10.6557L6.75283 16.1672C7.57287 17.1181 9.05612 17.087 9.83553 16.1025L21 2"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.612541 0.617252C0.189127 1.04367 0 1.51359 0 2.13939C0 2.9432 0.269219 3.32386 2.4075 5.54446L4.815 8.04464L2.53225 10.4224C0.434143 12.608 0.249508 12.8808 0.249508 13.799C0.249508 14.5785 0.393723 14.9121 0.90696 15.3187C2.18793 16.3342 2.82892 16.0727 5.47195 13.4558L7.8802 11.0718L9.86578 13.092C12.2383 15.5057 13.2426 16.1959 14.0311 15.9548C15.0441 15.6453 15.719 14.8135 15.719 13.8752C15.719 13.1114 15.4201 12.6973 13.3015 10.5245L10.8843 8.04489L13.4263 5.44187C16.212 2.58919 16.4735 1.97194 15.4513 0.662509C15.0468 0.144067 14.7172 0 13.9367 0C13.0106 0 12.7581 0.178262 10.3995 2.49792L7.85949 4.9961L5.33822 2.49792C3.20842 0.3877 2.69343 0 2.02101 0C1.50827 0 1.00676 0.219747 0.612541 0.617252Z"
                fill="white"
              />
            </svg>
          )}
        </div>

        <p className={styles.status}>{deviceState[currentIndex] ? status[1] : status[0]}</p>
      </div>

      <button
        onClick={() => {
          dispatch(changeWateringState({ index: currentIndex, state: !deviceState[currentIndex] }));
          axios
            .patch(
              'https://dt.miet.ru/ppo_it/api/watering',
              {},
              { params: { state: +!deviceState[currentIndex], id: currentIndex + 1 } },
            )
            .catch((error) => console.log(error.response));
        }}
        disabled={settingData ? count > settingData && true : false}
        className={classNames(
          styles.toggleBtn,
          settingData ? count > settingData && styles.disabled : '',
          deviceState[currentIndex] && styles.active,
        )}>
        {deviceState[currentIndex] ? btnText[1] : btnText[0]}
      </button>
    </div>
  );
}

export default ManageItemArrow;
