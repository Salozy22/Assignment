// 1. initialize i as 0;
var i = 1;
while (i <= 50) {
  console.log(`${i++} soldier`);
}

const chealsea = [
  ["Marcus Bettinelli", 13],
  ["Kepa", 1],
  ["Edouard Mendy", 16],
  ["Azpilicueta", 28],
  ["Trevoh Chalobah", 14],
  ['Ben Chilwell', 21],
  ['Cucurella', 32],
  ['Wesley Fofana', 33],
  ['Reece James', 24],
  ['Kalidou Koulibaly', 26],
  ['Thiago Silva', 6],
  ['Conor Gallagher', 23],
  ['Omari Hutchinson', 56],
  ['Jorginho', 5],
  ['Mateo Kovačić', 8],
  ['Mason Mount', 19],
  ["N'Golo Kanté", 7],
  ['Denis Zakaria', 20],
  ['Ruben Loftus-Cheek', 12],
  ['Armando Broja', 18],
  ['Kai Havertz', 29],
  ['Christian Pulišić', 10],
  ['Raheem Sterling', 17],
  ['Hakim Ziyech', 22]
];

chealsea.forEach(player => console.log(player.join(", ")));
