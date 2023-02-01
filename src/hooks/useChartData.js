import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

export default function useChartData(dataset, defaltQuantity, type = 'normal') {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
  const colors = [
    {
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      borderColor: 'rgb(253, 216, 22)',
      backgroundColor: 'rgba(253, 216, 22, 0.5)',
    },
    {
      borderColor: 'rgb(59, 170, 54)',
      backgroundColor: 'rgba(59, 170, 54, 0.5)',
    },
  ];
  const options = {};
  const labels =
    dataset.length > 0
      ? [...new Set(dataset.map((data) => data.order))]
      : new Array(defaltQuantity).fill(0).map((_, index) => index + 1);
  const orderNames = [
    'Первый датчик',
    'Второй датчик',
    'Третий датчик',
    'Четвертый датчик',
    'Пятый датчик',
    'Шестой датчик',
  ];
  let data;
  switch (type) {
    case 'normal':
      data = {
        labels,
        datasets:
          dataset.length > 0
            ? [...new Set(dataset.map((item) => item.id))].map((id) => {
                return {
                  label: orderNames[id - 1],
                  data: dataset
                    .filter((dataItem) => dataItem.id === id)
                    .map((value) => value.value),
                  borderColor: colors[id - 1].borderColor,
                  backgroundColor: colors[id - 1].backgroundColor,
                };
              })
            : labels.map((label) => {
                return {
                  label: orderNames[label - 1],
                  data: [],
                  borderColor: colors[label - 1].borderColor,
                  backgroundColor: colors[label - 1].backgroundColor,
                };
              }),
      };
      break;
    case 'averageTemperature':
      data = {
        labels,
        datasets: [
          {
            label: 'Среднее значние температуры',
            data: dataset.length > 0 ? dataset.map((item) => item.value) : [],
            borderColor: colors[0].borderColor,
            backgroundColor: colors[0].backgroundColor,
          },
        ],
      };
      break;
    case 'averageHumidity':
      data = {
        labels,
        datasets: [
          {
            label: 'Среднее значние влажности',
            data: dataset.length > 0 ? dataset.map((item) => item.value) : [],
            borderColor: colors[1].borderColor,
            backgroundColor: colors[1].backgroundColor,
          },
        ],
      };
      break;
    default:
      break;
  }
  return [options, data];
}
