export const receiveTemperatureData = async () => {
  const response = [
    await fetch('https://dt.miet.ru/ppo_it/api/temp_hum/1'),
    await fetch('https://dt.miet.ru/ppo_it/api/temp_hum/2'),
    await fetch('https://dt.miet.ru/ppo_it/api/temp_hum/3'),
    await fetch('https://dt.miet.ru/ppo_it/api/temp_hum/4'),
  ];
  const data = [
    await response[0].json(),
    await response[1].json(),
    await response[2].json(),
    await response[3].json(),
  ];
  return data;
};
