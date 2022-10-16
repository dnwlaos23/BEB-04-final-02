'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.addConstraint("Arts", {
      fields: ["art_user_id"],
      type: "foreign key",
      name: "art_user_id",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Arts", "art_user_id");
  }
};
