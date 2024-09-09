'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('services', [
      { name: 'Corte de cabelo:', description: 'Personalização do estilo com técnicas modernas e tradicionais', icon_url: 'defaultIcon.png', value: 50, created_at: new Date(), updated_at: new Date() },
      { name: 'Coloração', description: 'Mudança da cor do cabelo com tintura profissional.', icon_url: 'defaultIcon.png', value: 120, created_at: new Date(), updated_at: new Date() },
      { name: 'Escova', description: 'Alisamento temporário para um visual liso e polido.', icon_url: 'defaultIcon.png', value: 40, created_at: new Date(), updated_at: new Date() },
      { name: 'Progressiva', description: 'Tratamento para alisar e reduzir o volume dos fios', icon_url: 'defaultIcon.png', value: 250, created_at: new Date(), updated_at: new Date() },
      { name: 'Manicure', description: 'Cuidado e embelezamento das unhas com esmalte', icon_url: 'defaultIcon.png', value: 30, created_at: new Date(), updated_at: new Date() },
      { name: 'Pedicure', description: 'Tratamento dos pés, unhas e hidratação', icon_url: 'defaultIcon.png', value: 35, created_at: new Date(), updated_at: new Date() },
      { name: 'Design de sobrancelhas', description: 'Moldagem e definição das sobrancelhas com pinça ou cera', value: 25, icon_url: 'defaultIcon.png', created_at: new Date(), updated_at: new Date() },
      { name: 'Maquiagem', description: 'Realce da beleza facial para eventos e ocasiões especiais', icon_url: 'defaultIcon.png', value: 80, created_at: new Date(), updated_at: new Date() },
      { name: 'Depilação', description: 'Remoção dos pelos corporais com cera ou laser', icon_url: 'defaultIcon.png', value: 60, created_at: new Date(), updated_at: new Date() },
      { name: 'Hidratação capilar', description: 'Tratamento intensivo para restaurar a saúde e o brilho dos fios.', icon_url: 'defaultIcon.png', value: 70, created_at: new Date(), updated_at: new Date() },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('services', null, {})
  }
};
