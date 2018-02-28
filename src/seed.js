  const generateScore = () => {
    return Math.floor((Math.random() * 50) + 15);
  }

  export const players = [
    {
      id: 1,
      name: 'Leonardo',
      playerNumber: 'Player 1',
      points: generateScore(),
    },
    {
      id: 2,
      name: 'Donatello',
      playerNumber: 'Player 2',
      points: generateScore(),
    },
    {
      id: 3,
      name: 'Raphael',
      playerNumber: 'Player 3',
      points: generateScore(),
    },
    {
      id: 4,
      name: 'Michelangelo',
      playerNumber: 'Player 4',
      points: generateScore(),
    },
  ];

 export default players;

