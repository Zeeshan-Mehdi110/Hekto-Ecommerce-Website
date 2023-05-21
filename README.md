# Hekto - E-commerce Website

Hekto is a responsive e-commerce website built using the MERN (MongoDB, Express.js, React.js, Node.js) technology stack. It includes an admin dashboard, JWT authentication, Redux for state management, Material-UI for styling, React Router for routing, React Final Form for form handling, and integrates with a MongoDB database.

![Screenshot](./screenshot.png)

## Features

- Responsive and user-friendly interface.
- Product listing with search and filtering functionality.
- Product details page with detailed information.
- User registration and authentication with JWT.
- User profile management and order history.
- Admin dashboard for managing products, categories, and orders.
- Shopping cart functionality with add/remove items.
- Checkout process with shipping and payment options.
- Integration with MongoDB database for data persistence.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Zeeshan-Mehdi110/MERN_Hekto-Ecommerce-Website
   ```

2. Navigate to the project directory:

   ```bash
   cd hekto-ecommerce
   ```

3. Install dependencies for both the server and client:

   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the server directory based on the provided `.env.example` file. Set the necessary environment variables, such as database connection details and JWT secret.
   - Modify the client's `.env` file in the client directory if needed, e.g., to update API endpoints.

5. Start the development server:

   ```bash
   # Start server (from server directory)
   npm run server

   # Start client (from client directory)
   npm start
   ```

6. Access the application in your browser:
   - Website: [http://localhost:3000](http://localhost:3000)
   - Admin dashboard: [http://localhost:3000/admin](http://localhost:3000/admin)

## Deployment

The project can be deployed to various cloud platforms or hosting services. Here are a few deployment options:

- Deploy the client to a static hosting service (e.g., Netlify, Vercel, GitHub Pages) and the server to a suitable platform (e.g., Heroku, AWS, DigitalOcean).
- Set up a containerization solution using Docker and deploy the application using a container orchestration platform like Kubernetes.
- Customize the deployment process according to your specific requirements and infrastructure.

Please refer to the respective documentation of your chosen deployment method for detailed instructions.

## Contributions

Contributions to the project are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---
