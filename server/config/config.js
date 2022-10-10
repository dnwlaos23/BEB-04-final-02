const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: "+09:00", // for writing to database
    dialectOptions: {
      // for reading from database
      // : 날짜를 문자열로 받아온다 -> timezone을 -9시간 할 수 없도록
      charset: "utf8mb4",
      dateStrings: true,
      typeCast: true,
    },
  },
  // development: {
  //   username: "bb1da25c35e590",
  //   password: 'fe367164',
  //   database: 'heroku_2c1f28ec0627d76',
  //   host: "us-cdbr-east-06.cleardb.net",
  //   dialect: "mysql",
  //   timezone: "+09:00", // for writing to database
  //   dialectOptions: {
  //     // for reading from database
  //     // : 날짜를 문자열로 받아온다 -> timezone을 -9시간 할 수 없도록
  //     charset: "utf8mb4",
  //     dateStrings: true,
  //     typeCast: true,
  //   },
  // },
  test: {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: "+09:00",
    dialectOptions: {
      charset: "utf8mb4",
      dateStrings: true,
      typeCast: true,
    },
  },
  production: {
    username: "bb1da25c35e590",
    password: 'fe367164',
    database: 'heroku_2c1f28ec0627d76',
    host: "us-cdbr-east-06.cleardb.net",
    dialect: "mysql",
    timezone: "+09:00", // for writing to database
    dialectOptions: {
      // for reading from database
      // : 날짜를 문자열로 받아온다 -> timezone을 -9시간 할 수 없도록
      charset: "utf8mb4",
      dateStrings: true,
      typeCast: true,
    },
  },
};
