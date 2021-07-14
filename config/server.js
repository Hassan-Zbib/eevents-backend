module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8082),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '4169052cf77e7b2032db40d9504b526b'),
    },
  },
});
