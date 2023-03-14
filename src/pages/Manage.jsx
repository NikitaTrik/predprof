import React from 'react';
import { useSelector } from 'react-redux';
import MainTitle from '../components/MainTitle';
import ManageItem from '../components/ManageItem';
import ManageItemArrow from '../components/ManageItemArrow';

function Manage() {
  const sashState = useSelector((state) => state.devices.sash);
  const hydrationState = useSelector((state) => state.devices.hydration);
  const wateringState = useSelector((state) => state.devices.watering);

  return (
    <>
      <MainTitle text="Управление компонентами системы" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '0px 27px',
          marginTop: '39px',
        }}>
        <ManageItem
          title="Форточки"
          status={['Форточки закрыты', 'Форточки открыты']}
          btnText={['Открыть форточки', 'Закрыть форточки']}
          deviceState={sashState}
        />
        <ManageItem
          title="Система увлажнения"
          status={['Система выключена', 'Система включена']}
          btnText={['Включить систему', 'Выключить систему']}
          deviceState={hydrationState}
        />
        <ManageItemArrow
          status={['Полив выключен', 'Полив включен']}
          btnText={['Включить полив', 'Выключить полив']}
          deviceState={wateringState}
        />
        {/* <ManageItem title="Устройство 2" />
        <ManageItem title="Устройство 3" /> */}
      </div>
    </>
  );
}
export default Manage;
