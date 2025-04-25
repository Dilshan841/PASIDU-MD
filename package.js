{
  "name": "dilshan-md-web-pair",
  "version": "1.0.0",
  "description": "A multi-functional WhatsApp bot with Web Pair Code by Dilshan Ashinsa.",
  "main": "index.js",
  "scripts": {
    "start": "pm2 start index.js --deep-monitoring --attach --name Dilshan-MD",
    "stop": "pm2 stop Dilshan-MD",
    "restart": "pm2 restart Dilshan-MD"
  },
  "author": "Dilshan Ashinsa",
  "license": "MIT",
  "dependencies": {
    "@whiskeysockets/baileys": "^6.7.9",
    "qrcode": "^1.5.4",
    "awesome-phonenumber": "^7.4.0",
    "pino": "^9.6.0",
    "phone": "^3.1.58",
    "body-parser": "^2.2.0",
    "express": "^5.1.0",
    "path": "^0.12.7",
    "megajs": "^1.3.7",
    "pm2": "^6.0.5",
    "rimraf": "^6.0.1",
    "@eslint/config-array": "^0.20.0",
    "@eslint/object-schema": "^2.1.6",
    "eslint": "^9.24.0"
  }
}
```

---

⚙️ `scripts` usage:

- `npm run start` – බොට් එක *PM2* හරහා Start කරන්න
- `npm run stop` – PM2 process එක *අතරමඟින් නවතන්න*
- `npm run restart` – PM2 bot එක *reset/reload* කරන්න

---
