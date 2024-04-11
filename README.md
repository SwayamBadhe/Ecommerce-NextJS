# E-Commerce Website

This is a full-stack e-commerce website built using Next.js, Prisma, MongoDB, Tailwind CSS, and DaisyUI.

## Features

- **Next.js:** Utilizes the Next.js framework for building React applications, providing server-side rendering, and efficient routing.
- **Prisma:** Uses Prisma as the database ORM (Object-Relational Mapping) for seamless interaction with MongoDB.
- **MongoDB:** Stores and manages data in a MongoDB database.
- **Tailwind CSS:** Implements a utility-first CSS framework for styling the user interface.
- **DaisyUI:** Enhances Tailwind CSS with additional components and utilities.

### Website - [https://ecomerce-nextjswebsite.vercel.app/](https://ecommerce-next-js-swayam-badhes-projects.vercel.app/)

## Functionality

- **User Authentication:** Integrates Google API services for user authentication, allowing users to sign in securely.
- **Anonymous Carts:** Supports anonymous shopping carts, enabling users to add items to their carts without signing in.

## Getting Started

1. **Installation:**

   ```bash
   # Clone the repository
   git clone https://github.com/your-username/e-commerce-website.git

   # Navigate to the project folder
   cd e-commerce-website

   # Install dependencies
   npm install

   prisma generate

   ```

2. **Configuration**

   - Create a `.env` file in the project root and add the following values:

   ```bash
   DATABASE_URL="your-mongodb-database-url"
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-nextauth-secret"

   ```

3. **Run the Application**

   ```bash
   # Start the development server
    npm run dev

   ```

4. **Open in Browser**
   ```bash
   Open your web browser and visit http://localhost:3000 to view the website.
   ```

**Contribution**
Contributions are welcome! Feel free to open issues or pull requests.
