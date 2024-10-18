'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      product_id: {
        type: Sequelize.INTEGER,

        autoIncrement: true,

        primaryKey: true,

        allowNull: false,
      },

      image: {
        type: Sequelize.ARRAY(Sequelize.STRING),

        allowNull: true,
      },

      name: {
        type: Sequelize.STRING,

        allowNull: false,
      },

      description: {
        type: Sequelize.TEXT,

        allowNull: true,
      },

      price: {
        type: Sequelize.FLOAT,

        allowNull: false,
      },

      size_id: {
        type: Sequelize.INTEGER,

        allowNull: true,

        references: {
          model: 'Sizes',

          key: 'size_id',
        },

        onUpdate: 'CASCADE',

        onDelete: 'SET NULL',
      },

      color_id: {
        type: Sequelize.INTEGER,

        allowNull: true,

        references: {
          model: 'Colors',

          key: 'color_id',
        },

        onUpdate: 'CASCADE',

        onDelete: 'SET NULL',
      },

      tags_id: {
        type: Sequelize.INTEGER,

        allowNull: true,

        references: {
          model: 'Tags',

          key: 'tag_id',
        },

        onUpdate: 'CASCADE',

        onDelete: 'SET NULL',
      },

      origin_id: {
        type: Sequelize.INTEGER,

        allowNull: true,

        references: {
          model: 'Origins',

          key: 'origin_id',
        },

        onUpdate: 'CASCADE',

        onDelete: 'SET NULL',
      },

      model_number: {
        type: Sequelize.STRING,

        allowNull: true,
      },

      material: {
        type: Sequelize.STRING,

        allowNull: true,
      },

      shape: {
        type: Sequelize.STRING,

        allowNull: true,
      },

      load_capacity: {
        type: Sequelize.FLOAT,

        allowNull: true,
      },

      width: {
        type: Sequelize.FLOAT,

        allowNull: true,
      },

      height: {
        type: Sequelize.FLOAT,

        allowNull: true,
      },

      weight: {
        type: Sequelize.FLOAT,

        allowNull: true,
      },

      createdAt: {
        type: Sequelize.DATE,

        allowNull: false,

        defaultValue: Sequelize.NOW,
      },

      updatedAt: {
        type: Sequelize.DATE,

        allowNull: false,

        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  },
};
