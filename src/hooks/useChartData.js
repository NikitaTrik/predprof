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

export default function useChartData(dataset, defaltQuantity) {
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
  const data = {
    labels,
    datasets:
      dataset.length > 0
        ? [...new Set(dataset.map((item) => item.id))].map((id) => {
            return {
              label: orderNames[id - 1],
              data: dataset.filter((dataItem) => dataItem.id === id).map((value) => value.value),
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
    // {
    //   label: 'Первый датчик',
    //   data: dataset.filter((item) => item.id === 1).map((item) => item.temperature),
    //   borderColor: 'rgb(255, 99, 132)',
    //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
    // },
    // {
    //   label: 'Второй датчик',
    //   data: dataset.filter((item) => item.id === 2).map((item) => item.temperature),
    //   borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
    // {
    //   label: 'Третий датчик',
    //   data: dataset.filter((item) => item.id === 3).map((item) => item.temperature),
    //   borderColor: 'rgb(253, 216, 22)',
    //   backgroundColor: 'rgba(253, 216, 22, 0.5)',
    // },
    // {
    //   label: 'Четвертый датчик',
    //   data: dataset.filter((item) => item.id === 4).map((item) => item.temperature),
    //   borderColor: 'rgb(59, 170, 54)',
    //   backgroundColor: 'rgba(59, 170, 54, 0.5)',
    // },
  };
  return [options, data];
}
