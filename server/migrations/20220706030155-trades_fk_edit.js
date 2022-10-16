'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.addConstraint("Trades", {
      fields: ["trade_art_id"],
      type: "foreign key",
      name: "trade_art_id",
      references: {
        table: "Arts",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Trades", "trade_art_id");
  }
};
