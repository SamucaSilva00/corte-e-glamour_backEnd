'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('employees', [
      { first_name: 'Ana', last_name: 'Souza', phone: '987654321', birth: '1990-04-15', profile_url: 'defaultImageProfile.png', created_at: new Date(), updated_at: new Date() },
      { first_name: 'Carlos', last_name: 'Pereira', phone: '958123456', birth: '1985-09-22', profile_url: 'defaultImageProfile.png', created_at: new Date(), updated_at: new Date() },
      { first_name: 'Julia ', last_name: 'Oliveira', phone: '965643210', birth: '1992-12-30', profile_url: 'defaultImageProfile.png', created_at: new Date(), updated_at: new Date() },
      { first_name: 'Laura', last_name: 'Santos', phone: '923219876', birth: '1988-06-11', profile_url: 'defaultImageProfile.png', created_at: new Date(), updated_at: new Date() },
      { first_name: 'Fernanda', last_name: 'Costa', phone: '966543219', birth: '1995-03-08', profile_url: 'defaultImageProfile.png', created_at: new Date(), updated_at: new Date() },
      { first_name: 'Bruna', last_name: 'Almeida', phone: '994321987', birth: '1991-01-27', profile_url: 'defaultImageProfile.png', created_at: new Date(), updated_at: new Date() },
      { first_name: 'Rafaela', last_name: 'Carvalho', phone: '972345678', birth: '1993-07-05', profile_url: 'defaultImageProfile.png', created_at: new Date(), updated_at: new Date() },
      { first_name: 'Sofia', last_name: 'Lima', phone: '911234567', birth: '1986-11-20', profile_url: 'defaultImageProfile.png', created_at: new Date(), updated_at: new Date() },
      { first_name: 'Gabriela', last_name: 'Martins', phone: '9072947509', birth: '1994-05-16', profile_url: 'defaultImageProfile.png', created_at: new Date(), updated_at: new Date() },
      { first_name: 'Lucas', last_name: 'Ferreira', phone: '935678123', birth: '1989-08-12', profile_url: 'defaultImageProfile.png', created_at: new Date(), updated_at: new Date() },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('employees', null, {})
  }
};
