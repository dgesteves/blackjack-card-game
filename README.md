# Blackjack Card Game

## Description
This project consists of a server and a client. The server is built with Express and the client uses TypeScript.

### Task
Create a Blackjack card game that adheres to the following rules:
Blackjack hands are scored by their point total.
The hand with the highest total wins if it doesn't exceed 21. A hand with a higher total than 21 is considered a bust.
Cards numbered 2 through 10 are worth their face value.
Face cards (jack, queen, king) are each worth 10 points.
An ace can be worth 11 points if it doesn't cause the player to bust. If it would cause a bust, it is worth 1 point.

### Requirements
Create a simple user interface (UI) for the game. The UI should allow the player to:
Start a new game.
See their current hand and point total.
Draw additional cards (Hit) or end their turn (Stand).
Display the dealer's hand, keeping one card hidden (the hole card).
Announce the winner (player or dealer) at the end of the game.
Implement a service or backend logic to support the game. This includes the game rules, scoring, and the reason for determining the winner.
Write tests to ensure the functionality of your code. Test coverage is essential.
Create clean and maintainable code focusing on object-oriented programming (OOP) principles.
Use proper code organisation and comments to make your code easy to understand.

### Demo
<img width="1405" alt="Screenshot 2023-11-24 at 19 37 20" src="https://github.com/dgesteves/blackjack-card-game/assets/34245953/141c59f7-2e2b-4de6-ac42-14f5b9c8a633">


https://github.com/dgesteves/blackjack-card-game/assets/34245953/730fbef7-9ff3-4a40-8c67-edb747fb553d



### Test Coverage

#### Client
<img width="785" alt="Screenshot 2023-11-24 at 19 43 25" src="https://github.com/dgesteves/blackjack-card-game/assets/34245953/1899fc23-2449-40c7-b866-46a6951e4d06">
<img width="1295" alt="Screenshot 2023-11-24 at 19 47 10" src="https://github.com/dgesteves/blackjack-card-game/assets/34245953/9ccc715f-0c64-4a3d-8d45-941ce0f8e627">

#### Server
<img width="1290" alt="Screenshot 2023-11-24 at 19 52 52" src="https://github.com/dgesteves/blackjack-card-game/assets/34245953/314549c2-60ad-4a17-bd52-c0f8a68fb90b">

## Getting Started

### Prerequisites
- Node.js
- npm
- git

### Installation
1. Clone the repo
```sh
git clone https://github.com/dgesteves/blackjack-card-game.git
```
2. Install NPM packages
```sh
cd server
npm install
cd ../client
npm install
```

## Usage
1. Start the server
```sh
cd server
npm start
```
2. Start the client
```sh
cd client
npm dev
```
3. Open the browser and go to http://localhost:5173/

## Testing
1. Run the tests
```sh
cd server
npm test
npm run coverage
cd ../client
npm test
npm run coverage
```

## Documentation
- generate documentation
```sh
cd server
npm run docs
cd ../client
npm run docs
```
- see documentation by opening index.html in the docs folder of each project
```sh
cd server/docs
open index.html
cd ../client/docs
open index.html
```

- [Server](server/README.md)
- [Client](client/README.md)
