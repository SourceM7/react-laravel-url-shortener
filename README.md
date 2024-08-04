# React Laravel URL Shortener

This simple project aims to create a URL shortener application using React for the frontend and Laravel for the backend.

## Table of Contents

- [React Laravel URL Shortener](#react-laravel-url-shortener)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)



## Features

- Shorten long URLs
- Redirect to original URLs using short links

## Installation

To get the project up and running locally, follow these steps:

### Prerequisites

- Node.js and npm installed
- PHP and Composer installed

### Backend (Laravel)

1. Clone the repository:

    ```bash
    git clone https://github.com/SourceM7/react-laravel-url-shortener.git
    ```

2. Navigate to the backend directory:

    ```bash
    cd react-laravel-url-shortener/backend
    ```

3. Install backend dependencies:

    ```bash
    composer install
    ```

4. Set up the environment file:

    ```bash
    cp .env.example .env
    ```

5. Install the `predis/predis` package:

    ```bash
    composer require predis/predis:^2.0
    ```

6. Generate an application key:

    ```bash
    php artisan key:generate
    ```

7. Run the migrations:

    ```bash
    php artisan migrate
    ```

8. Start the Laravel development server:

    ```bash
    php artisan serve
    ```

### Frontend (React)

1. Navigate to the frontend directory:

    ```bash
    cd ../frontend
    ```

2. Install frontend dependencies:

    ```bash
    npm install
    ```

3. Start the React development server:

    ```bash
    npm run dev
    ```

## Usage

Once both the backend and frontend servers are running, you can access the application in your web browser. Use the interface to input long URLs and receive short links in return.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the project's coding standards and include relevant tests.
