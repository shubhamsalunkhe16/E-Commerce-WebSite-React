import React, { useEffect, useState } from 'react';
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
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['0.1', '0.2', '0.3', '0.4', '0.5', '1.0'];

export default function GetLiveScore() {
  const [runsCSK, setRunsCSK] = useState([]);
  const [runsMI, setRunsMI] = useState([]);
  const [wicketsCSK, setWicketsCSK] = useState(0);
  const [wicketsMI, setwicketsMI] = useState(0);

  const [totalRunsCSK, setTotalRunsCSK] = useState([]);
  const [totalRunsMI, setTotalRunsMI] = useState([]);
  const [result, setResult] = useState([]);
  const [isMatchEnd, setIsMatchEnd] = useState(false);

  var balls = 0;
  var interval;

  useEffect(() => {
    var interval = setInterval(() => {
      balls += 1;
      var run = Math.floor(Math.random() * (6 - 0 + 1)) + 0;

      if (balls > 6) {
        setRunsCSK((prevRuns) => {
          return [...prevRuns, run];
        });
        if (run === 0) {
          var isOut = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
          if (isOut == 0) {
            console.log('out');
            setWicketsCSK((prevWicket) => {
              return prevWicket + 1;
            });
          }
        }
      } else {
        setRunsMI((prevRuns) => {
          return [...prevRuns, run];
        });
        if (run === 0) {
          var isOut = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
          if (isOut == 0) {
            console.log('out');
            setwicketsMI((prevWicket) => {
              return prevWicket + 1;
            });
          }
        }
      }
      console.log('reus', totalRunsMI, totalRunsCSK);

      if (balls == 12) {
        clearInterval(interval);
        setIsMatchEnd(true);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (isMatchEnd) {
      clearInterval(interval);
    }
  }, [isMatchEnd]);

  useEffect(() => {
    setTotalRunsCSK(runsCSK.reduce((partialSum, a) => partialSum + a, 0));
    setTotalRunsMI(runsMI.reduce((partialSum, a) => partialSum + a, 0));
    var matchResult =
      runsCSK.reduce((partialSum, a) => partialSum + a, 0) >
      runsMI.reduce((partialSum, a) => partialSum + a, 0)
        ? `CSK won by ${
            runsCSK.reduce((partialSum, a) => partialSum + a, 0) -
            runsMI.reduce((partialSum, a) => partialSum + a, 0)
          } runs`
        : `MI won by ${
            runsMI.reduce((partialSum, a) => partialSum + a, 0) -
            runsCSK.reduce((partialSum, a) => partialSum + a, 0)
          } runs`;
    setResult(matchResult);
  }, [runsCSK, runsMI]);

  const data = {
    labels,
    datasets: [
      {
        label: 'CSK',
        data: runsCSK,
        borderColor: '#f3c706',
        backgroundColor: '#007de3',
      },
      {
        label: 'MI',
        data: runsMI,
        borderColor: '#01499d',
        backgroundColor: '#c9a63d',
      },
    ],
  };
  return (
    <div
      style={{
        width: window.innerWidth < 768 ? '100%' : '70%',
        margin: '10px auto',
      }}
    >
      <span>
        <h1>SUPER OVER</h1>
        <h2>MI vs CSK</h2>
      </span>
      <Line options={options} data={data} />
      <div>
        <span>
          MI - {totalRunsMI}/{wicketsMI}
        </span>
        <br />
        <span>
          CSK - {totalRunsCSK}/{wicketsCSK}
        </span>
        <br />
        <span>{isMatchEnd && result}</span>
      </div>
    </div>
  );
}
