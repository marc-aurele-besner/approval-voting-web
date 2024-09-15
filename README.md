# Approval Voting System

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-13.4.19-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.2-blue)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

The **Approval Voting System** is a web application that allows users to create and participate in approval voting pools. It provides a fair and transparent platform for community decision-making by enabling users to vote on various initiatives and candidates.

## Features

- **Create Pools:** Administrators can create new voting pools with a name, description, and list of candidates.
- **View Pools:** Users can browse available pools and view details, including candidates and descriptions.
- **Candidate Profiles:** Detailed profiles for each candidate, including affiliations and external links.
- **Dynamic Images:** Automatically generated images for pools and candidates using Next.js OG.
- **Responsive Design:** Built with Tailwind CSS for a responsive and modern user interface.
- **Error Handling:** Custom error and not-found pages for enhanced user experience.

## Demo

![Approval Voting System Screenshot](./screenshots/screenshot.png)

## Technologies Used

- **[Next.js](https://nextjs.org/):** React framework for building server-side rendered applications.
- **[TypeScript](https://www.typescriptlang.org/):** Strongly typed programming language that builds on JavaScript.
- **[Tailwind CSS](https://tailwindcss.com/):** Utility-first CSS framework for rapid UI development.
- **[Next.js OG](https://github.com/vercel/og-image):** Open Graph image generation for dynamic image creation.
- **[Husky](https://github.com/typicode/husky):** Git hooks management.
- **[Prettier](https://prettier.io/):** Code formatter.
- **[ESLint](https://eslint.org/):** Linting utility for JavaScript and TypeScript.

## Getting Started

### Prerequisites

- **Node.js** (v14 or later)
- **npm** or **Yarn**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/marc-aurele-besner/approval-voting-web.git
   cd approval-voting-web
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Environment Variables:**

   Create a `.env` file in the root directory and add the following:

   ```env
   NEXT_PUBLIC_URL=http://localhost:3000
   ```

### Running the Application

- **Development Mode:**

  ```bash
  npm run dev
  # or
  yarn dev
  ```

  Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

- **Production Build:**

  ```bash
  npm run build
  npm start
  # or
  yarn build
  yarn start
  ```

## Project Structure

## API Endpoints

### Pools

- **GET `/api/pools`**
  - **Description:** Fetch all available pools.
  - **Response:** 
    ```json
    {
      "pools": [/* Array of Pool Objects */]
    }
    ```

- **POST `/api/pools`**
  - **Description:** Create a new pool.
  - **Request Body:**
    ```json
    {
      "poolName": "String",
      "description": "String",
      "candidates": [/* Array of Candidate Objects */]
    }
    ```
  - **Response:**
    ```json
    {
      "success": true,
      "pool": {/* New Pool Object */}
    }
    ```

- **GET `/api/pools/[poolId]`**
  - **Description:** Fetch a specific pool by ID.
  - **Response:**
    ```json
    {
      "pool": {/* Pool Object */}
    }
    ```

- **DELETE `/api/pools/[poolId]`**
  - **Description:** Delete a specific pool by ID.
  - **Response:**
    ```json
    {
      "message": "Pool deleted successfully"
    }
    ```

### Candidates

- **GET `/api/candidates`**
  - **Description:** Fetch all unique candidates across pools.
  - **Response:**
    ```json
    {
      "candidates": [/* Array of Candidate Objects */]
    }
    ```

- **GET `/api/candidates/[candidateId]`**
  - **Description:** Fetch a specific candidate by ID, including associated pools.
  - **Response:**
    ```json
    {
      "candidate": {/* Candidate Object */},
      "pools": [/* Array of Pool Objects */]
    }
    ```

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository.**

2. **Create a new branch:**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit your changes:**

   ```bash
   git commit -m "Add your message"
   ```

4. **Push to the branch:**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request.**

## License

This project is licensed under the [MIT License](./LICENSE).

## Contact

For any questions or feedback, please contact [Marc-Aurele Besner](https://twitter.com/yourprofile) or open an issue on the [GitHub repository](https://github.com/marc-aurele-besner/approval-voting-web).
