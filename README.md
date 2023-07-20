# CRUD App with React, Material-UI, and Supabase

This is a simple CRUD (Create, Read, Update, Delete) application built using React, Material-UI, and Supabase. The app allows users to perform basic operations on a dataset stored in a Supabase database.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

CRUD operations are fundamental in most applications as they allow users to create, read, update, and delete data. This CRUD app provides a simple user interface that interacts with a Supabase database to perform these operations seamlessly.

## Features

The CRUD app comes with the following features:

1. **Create**: Users can add new data entries to the database through a insert button which opens as modal.
2. **Read**: The app displays the existing dataset in a tabular format, allowing users to view the stored information.
3. **Update**: Users can modify existing data entries by updating the relevant fields.
4. **Delete**: The app allows users to remove unwanted data entries from the database.

## Technologies Used

The following technologies were used to build this CRUD app:

- **React**: A popular JavaScript library for building user interfaces.
- **Material-UI**: A React UI framework that provides pre-built components with a modern design.
- **Supabase**: An open-source alternative to Firebase that provides a scalable backend infrastructure for applications.

## Installation

Follow the steps below to set up the CRUD app locally:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/your-username/crud-app.git
   ```

2. Change directory to the project folder:

   ```
   cd crud-app
   ```

3. Install the required dependencies using npm or yarn:

   ```
   npm install
   ```

   or

   ```
   yarn install
   ```

4. Create a `.env` file at the root of the project and add your Supabase credentials:

   ```
   REACT_APP_SUPABASE_URL=YOUR_SUPABASE_URL
   REACT_APP_SUPABASE_KEY=YOUR_SUPABASE_KEY
   ```

## Usage

Once you have set up the project, you can run the app locally using the following command:

```
npm start
```

This will start a development server, and you can access the app in your web browser by visiting `http://localhost:3000`.

## Contributing

If you'd like to contribute to this project, follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name: `git checkout -b feature/your-feature`.
3. Make your changes and commit them: `git commit -m "Add your feature"`.
4. Push the changes to your forked repository: `git push origin feature/your-feature`.
5. Submit a pull request to the original repository.

