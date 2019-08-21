# BACKEND USING EXPRESS + MYSQL

![](https://img.shields.io/badge/Code%20Style-Standard-informational.svg)
![](https://img.shields.io/badge/Dependencies-Express-success.svg)
![](https://img.shields.io/badge/License-ISC-orange.svg)

<p align="center">
  <a href="https://nodejs.org/">
    <img alt="restfulapi" title="Restful API" src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>

---

## Table of contents

- [Prerequiste](#prerequiste)
- [Installation](#installation)
- [Documentation](#documentation)
- [Optional](#optional)
- [License](#license)

## Prerequiste

- Node.js - Download and Install [Node.js](https://nodejs.org/en/)
- MySQL - Download and Install [MySQL](https://www.mysql.com/downloads/)
- Postman - Download and Install [Postman](https://www.getpostman.com/downloads)

## Installation

### Clone

```
$ git clone git@github.com:fikribasa/rentaldvd.git
$ cd rentaldvd
$ npm install
```

### Create Environment Variable

```
$ cp .env.example .env
$ nano .env
```

```
SERVER_PORT = YOUR-PORT

DB_HOST = "YOU-DB-HOST"
DB_USER = "YOUR-DB-USER"
DB_PASSWORD = "YOUR-DB-PASSWORD"
DB_NAME = "YOUR-DB-NAME"
```

### Start Development Server

```
$ npm start
```

## Documentation

### Books Routes

#### GET Request

- "/movies" => display all movies Data
- "/movies/id/{moviesID}" => display one movies data with the id specified by ID parameter.
- "/movies/title/{moviesTitle}" => display one movies data with the title specified by title parameter.
- "/movies/genre/" => display movies data specified by type parameter genre.
- "/movies/country" => display movies data specified by type parameter country.

- "/movies/page/{page}" => display all movies data with contain 4 movies data for each page.

#### POST Request

- "/movies" => Inserting a new movies data to database. Data required = title,genre,and country.

#### PATCH Request

- "/movies/{moviesID}" => Updating a existing movies data in database. Data required = moviesID and parameter that needs to update.

#### DELETE Request

- "/movies/{moviesID}" => Deleting a existing movies data in database. Data required = moviesID.

### License

---

[ISC](https://en.wikipedia.org/wiki/ISC_license "ISC")
