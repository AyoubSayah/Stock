import React from 'react';
import Card from '@material-ui/core/Card';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: '200px',
    maxWidth: '400px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2rem',
    margin: '2rem',
    alignItems: 'center',
    borderRadius: '16px',
    flexGrow: '1',
  },
  icon: {
    color: '#626ed4',
    width: '5rem',
    height: '5rem',
  },
}));
export default function Dashbord() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: "Chiffre d'affaire",
        backgroundColor: '#626ed4',
        borderColor: '#626ed4',
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  const data2 = {
    labels: ['Jus', 'Mojito', 'Cafe', 'Chicha', 'Food', 'Makloub'],
    datasets: [
      {
        label: 'Le plus vente article',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const calases = useStyles();

  return (
    <div>
      {' '}
      <div style={{ display: 'flex' }}>
        <Card className={calases.card}>
          <div>
            <p>Total Produits</p>
            <h2>18.354</h2>
          </div>
          <EqualizerIcon className={calases.icon} />
        </Card>
        <Card
          className={calases.card}
          style={{ background: 'rgb(98 110 212 / 35%)' }}
        >
          <div>
            <p> Commandes</p>
            <h2>10.000</h2>
          </div>
          <TrackChangesIcon className={calases.icon} />
        </Card>
        <Card className={calases.card}>
          <div>
            <p> Fournisseurs</p>
            <h2>554</h2>
          </div>
          <AssessmentIcon
            className={calases.icon}
            style={{ color: '#00bcd4' }}
          />
        </Card>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card className={calases.card}>
          <Line
            data={data}
            height={300}
            width={100}
            options={{ maintainAspectRatio: false }}
          />
        </Card>
        <Card className={calases.card}>
          <Bar
            data={data2}
            height={300}
            width={100}
            options={{ maintainAspectRatio: false }}
          />
        </Card>
      </div>
    </div>
  );
}
