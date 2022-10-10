'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Arts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      art_user_id: {
        type: Sequelize.INTEGER
      },
      art_name: {
        type: Sequelize.STRING
      },
      art_size: {
        type: Sequelize.STRING
      },
      art_genre: {
        type: Sequelize.STRING
      },
      art_image: {
        type: Sequelize.STRING
      },
      art_desc: {
        type: Sequelize.TEXT
      },
      art_price: {
        type: Sequelize.INTEGER
      },
      art_owner: {
        type: Sequelize.STRING
      },
      art_artist: {
        type: Sequelize.STRING
      },
      art_state: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Arts');
  }
};