const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const { Boom } = require('@hapi/boom');
const readline = require('readline');
const fs = require('fs');
const path = require('path');

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys');

  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true,
    browser: ['DILSHAN-MD', 'Safari', '1.0.0'],
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === 'close') {
      const shouldReconnect = (lastDisconnect.error = Boom)?.output?.statusCode !== DisconnectReason.loggedOut;
      console.log('connection closed due to ', lastDisconnect.error, ', reconnecting ', shouldReconnect);
      // reconnect if not logged out
      if (shouldReconnect) {
        startBot();
      }
    } else if (connection === 'open') {
      console.log('opened connection');
    }
  });
}

startBot();
