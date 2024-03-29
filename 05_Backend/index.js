// Import required modules
const express = require("express");
const bodyParser = require("body-parser");

// Create an Express application
const app = express();


// importing cors
const cors = require('cors')

// Connect to the database
require("./database/connection");

// Load environment variables from .env file
require("dotenv").config();

// swaggerjsDocs import for swagger defination
const swaggerJSDoc = require('swagger-jsdoc');

// swaggerUi
const swaggerUi = require('swagger-ui-express');

// Set the port to listen for incoming requests
const port = process.env.SERVER_PORT;

// Middleware for parsing JSON bodies
app.use(express.json());


// Middleware for parsing URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// cors middleware
app.use(cors())

// Import route handlers
const userRoutes = require("./router/userRouter");
const ratingRoutes = require("./router/ratingRouter");
const orderRoutes = require("./router/orderRouter");
const locationRoutes = require("./router/locationRouter");
const adminRoutes = require("./router/adminRouter");
const carRoutes = require("./router/carRouter");
const citiesRoutes = require("./router/citiesRouter");





// Mount route handlers
app.use("/users", userRoutes);
app.use("/ratings", ratingRoutes);
app.use("/orders", orderRoutes);
app.use("/locations", locationRoutes);
app.use("/admin", adminRoutes);
app.use("/cars", carRoutes);
app.use("/cities", citiesRoutes); 



// External dependencies




// Database connection
const { connectToDatabase } = require("./database/connection");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API for your project',
      version: '1.0.0',
      description: 'Description of your API',
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT',
      },
      contact: {
        name: 'Your Name',
        url: 'https://yourwebsite.com',
        email: 'your@email.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3001',
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT", // Optional, but good to specify if using JWTs
        },
      },
    },
    security: [
      {
        BearerAuth: [],
      },
    ],
  },
  apis: ['./router/*.js'], // Specify the path to your API routes
};
  
  const swaggerSpec = swaggerJSDoc(swaggerOptions);
  
  console.log('Swagger UI setup complete');
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));





// Start the server and listen for incoming requests
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Export the Express application
module.exports = app;
