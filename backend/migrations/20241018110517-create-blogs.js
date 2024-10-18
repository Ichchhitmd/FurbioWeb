'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Blogs', {
     blog_id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       primaryKey: true,
       allowNull: false
     },

     image: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: true
     },

     title: {
      type: Sequelize.STRING,
      allowNull: false
     },

     content: {
      type: Sequelize.TEXT,
      allowNull: false
     },

     createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
     },

     updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
     },

     author_id: {
      type: Sequelize.INTEGER,
      allowNull: false,

      references: {
        model: 'Authors',
        key: 'author_id'
      },

      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'

     },

     category_id: {
      type: Sequelize.INTEGER,
      allowNull: false,

      references: {
        model: 'Categories',
        key: 'category_id'
      },

      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
     }

    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Blogs');
  }
};
