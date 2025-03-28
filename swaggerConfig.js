// filepath: c:\Users\DELL\Documents\CSE341_E-Commerce\swaggerConfig.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'E-Commerce API',
            version: '1.0.0',
            description: 'API documentation for the E-Commerce application',
        },
        servers: [
            {
                url: 'https://cse341-e-commerce.onrender.com',
            },
        ],
        components: {
            schemas: {
                Product: {
                    type: 'object',
                    required: ['name', 'description', 'price', 'stock', 'category', 'imageUrl'],
                    properties: {
                        name: {
                            type: 'string',
                            description: 'The name of the product',
                        },
                        description: {
                            type: 'string',
                            description: 'The description of the product',
                        },
                        price: {
                            type: 'string',
                            description: 'The price of the product',
                        },
                        stock: {
                            type: 'integer',
                            description: 'The stock quantity of the product',
                        },
                        category: {
                            type: 'string',
                            description: 'The category of the product',
                        },
                        imageUrl: {
                            type: 'string',
                            description: 'The image URL of the product',
                        },
                        createdAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'The creation date of the product',
                        },
                    },
                },
            },
        },
    },
    apis: ['./controllers/*.js'], // Path to the API docs
};

const specs = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    specs,
};