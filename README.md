# Volatile vs Non Volatile socket.io requests

This is meant to help demonstrate the confusion as to why volatile messages are not received on the client during rapid emits from the server.

## Setup
- Node: v10.9.0
- express: 4.16.3
- socket.io: 2.1.1

## How to use

- Run the following commands

```bash
npm install
npm run start
```

- Use Chrome (or some other browser/tool that allows for watching websocket packet data) to open a new page to `localhost:3000`
- Ensure you are able to inspect websocket data
- Type a message that does __NOT__ contain the word `volatile`
- Type a message that __DOES__ contain `volatile`

## Observations

- Type a message that does __NOT__ contain the word `volatile`
    - Server: All `100` iterations are logged in console and emitted + the original message is emitted
    - Client: All `100` iterations + the original message are received
- Type a message that __DOES__ contain `volatile`
    - Server: All `100` iterations are logged in console and emitted + the original message is emitted
    - Client: Only iteration `0` + the original message are received