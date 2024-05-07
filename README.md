# chat-room

## Description
This application is a chat room built with React, Vite and Django REST Framework.

## Features
- Create a new chat room
- List chat rooms
- Talk in a specific chat room

## Screenshots
No screenshot available.

## Installation
This application uses a `frontend` application and a `backend` server.

### 1. Configuration of the `backend`
#### A. The virtual environment

For that project, you need to install an virtual environement with Python with these commands :

```bash
python3 -m venv env
source env/bin/activate
```

Please ensures that you installed the `venv` package with that command :

```bash
sudo apt get install python3.11-venv
```

#### B. Django and required dependencies

To install `django` and `required dependencies`, you need to activate the `env`. When your `env` is activated, follow that command :

> All dependencies you need to install are listed in the `requirements.txt` file

```bash
cd app
python -m pip install -r requirements.txt
```

#### C. Run the django server

You have already a folder app installed. To run the django server, do that command :

Please make sure you are in the `env`

```bash
cd app
python manage.py runserver
```

### 2. Configuration of the `frontend`
#### A. Node configuration

To run the frontend, you need to install `node` in your computer.
How to install: https://nodejs.org/en/download

#### B. Installing dependencies

When you have node installed, you need to install dependencies in the `frontend` directory.

```bash
cd frontend
npm install # this will install required dependencies
```

#### B. Run the `frontend` application

Nothing hard there, just follow these commands:

```bash
cd frontend
npm run dev
```