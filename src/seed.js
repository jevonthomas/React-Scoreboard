  const generateScore = () => {
    return Math.floor((Math.random() * 50) + 15);
  }

  export const players = [
    {
      id: 1,
      name: 'Leonardo',
      playerNumber: 1,
      points: generateScore(),
    },
    {
      id: 2,
      name: 'Donatello',
      playerNumber: 2,
      points: generateScore(),
    },
    {
      id: 3,
      name: 'Raphael',
      playerNumber: 3,
      points: generateScore(),
    },
    {
      id: 4,
      name: 'Michelangelo',
      playerNumber: 4,
      points: generateScore(),
    },
  ];

 export default players;

