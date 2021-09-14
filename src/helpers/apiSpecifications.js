import path from 'path';
import os from 'os';

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'One to One chat app',
      version: '1.0.0',
      description: 'A one to one chat application built using Node.js/Express/Socket.io and PostgreSQL/Sequelize ORM',
      license: {},
      contact: {}
    },
    components: {},
    security: {},
    servers: [
      {
        url: 'http://localhost:5000',
        name: `${os.hostname()}`
      },
      {
        url: `${process.env.STAGING_APP_URL}`,
        name: `${os.hostname()}`
      }
    ]
  },
  apis: [
    path.resolve(__dirname, '../routes/api/*.js')
  ],
};

export default swaggerOptions;
