'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('employee_services', [
      { employee_id: 1, service_id: 1, created_at: new Date(), updated_at: new Date() },
      { employee_id: 1, service_id: 3, created_at: new Date(), updated_at: new Date() },
      { employee_id: 2, service_id: 1, created_at: new Date(), updated_at: new Date() },
      { employee_id: 3, service_id: 2, created_at: new Date(), updated_at: new Date() },
      { employee_id: 3, service_id: 4, created_at: new Date(), updated_at: new Date() },
      { employee_id: 3, service_id: 7, created_at: new Date(), updated_at: new Date() },
      { employee_id: 4, service_id: 5, created_at: new Date(), updated_at: new Date() },
      { employee_id: 4, service_id: 6, created_at: new Date(), updated_at: new Date() },
      { employee_id: 5, service_id: 8, created_at: new Date(), updated_at: new Date() },
      { employee_id: 5, service_id: 9, created_at: new Date(), updated_at: new Date() },
      { employee_id: 6, service_id: 7, created_at: new Date(), updated_at: new Date() },
      { employee_id: 7, service_id: 1, created_at: new Date(), updated_at: new Date() },
      { employee_id: 7, service_id: 10, created_at: new Date(), updated_at: new Date() },
      { employee_id: 8, service_id: 5, created_at: new Date(), updated_at: new Date() },
      { employee_id: 8, service_id: 6, created_at: new Date(), updated_at: new Date() },
      { employee_id: 9, service_id: 7, created_at: new Date(), updated_at: new Date() },
      { employee_id: 9, service_id: 4, created_at: new Date(), updated_at: new Date() },
      { employee_id: 9, service_id: 2, created_at: new Date(), updated_at: new Date() },
      { employee_id: 9, service_id: 3, created_at: new Date(), updated_at: new Date() },
      { employee_id: 10, service_id: 8, created_at: new Date(), updated_at: new Date() },
      { employee_id: 10, service_id: 3, created_at: new Date(), updated_at: new Date() },

    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('employee_services', null, {})
  }
};

