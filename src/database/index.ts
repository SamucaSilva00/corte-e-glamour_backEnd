import { Sequelize } from "sequelize";

export const database = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "corte_glamour_development",
  username: "postgres",
  password: "SamucaSilva00",
  define: {
    underscored: true,
  },
});
