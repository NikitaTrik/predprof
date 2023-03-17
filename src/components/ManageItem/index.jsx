import axios from 'axios';
import classNames from 'classnames';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeHydrationState, changeSashState } from '../../store/devicesSlice';

import styles from './ManageItem.module.scss';

function ManageItem({ title, status, btnText, deviceState, avrData, settingData }) {
  const dispatch = useDispatch();
  
  let dispatchFunc;
  let url;
  switch (title) {
    case 'Форточки':
      dispatchFunc = changeSashState;
      url = 'https://dt.miet.ru/ppo_it/api/fork_drive';
      break;
    case 'Система увлажнения':
      dispatchFunc = changeHydrationState;
      url = 'https://dt.miet.ru/ppo_it/api/total_hum';
      break;
    default:
      break;
  }
  return (
    <div className={styles.block}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.state}>
        <div className={classNames(styles.iconBlock, deviceState && styles.active)}>
          {deviceState ? (
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

        <p className={styles.status}>{deviceState ? status[1] : status[0]}</p>
      </div>

      <button
        onClick={() => {
          dispatch(dispatchFunc(!deviceState));
          axios
            .patch(url, {}, { params: { state: +!deviceState } })
            .catch((error) => console.log(error.response));
        }}
        disabled={settingData ? +avrData > +settingData && true : false}
        className={classNames(
          styles.toggleBtn,
          settingData ? +avrData > +settingData && styles.disabled : '',
          deviceState && styles.active,
        )}>
        {deviceState ? btnText[1] : btnText[0]}
      </button>
    </div>
  );
}

export default ManageItem;
