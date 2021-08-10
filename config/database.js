// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'sqlite',
//         filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'localhost'), // mysql和服务端都在一个服务器就设置localhost
        port: env.int('DATABASE_PORT', 3306), // mysql 默认端口号
        database: env('DATABASE_NAME', 'strapidemo'), // 数据库名
        username: env('DATABASE_USERNAME', 'root'), // 数据库用户名
        password: env('DATABASE_PASSWORD', 'WANGyh01'), // 数据库密码
      },
      options: {},
    },
  },
});
