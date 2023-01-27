import React from 'react';
import MainTitle from '../components/MainTitle';
import ManageItem from '../components/ManageItem';

function Manage() {
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
        <ManageItem title="Устройство 1" />
        <ManageItem title="Устройство 2" />
        <ManageItem title="Устройство 3" />
      </div>
    </>
  );
}
export default Manage;
