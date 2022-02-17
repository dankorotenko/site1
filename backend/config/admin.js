module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '43e3b898b853badf4c334c886db452c3'),
  },
});
