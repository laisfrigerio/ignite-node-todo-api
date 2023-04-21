# todo-api

A NodeJS API to management TODOs

## 🛠️ Stack

- nodejs: 18 + express
- jest
- supertest
- docker

### Docker version

We develop this project with the following docker version: `20.10.22`

## :pencil: Features

- :ballot_box_with_check: Create an user
- :ballot_box_with_check: Get all users
- :ballot_box_with_check: Get all todos by user
- :ballot_box_with_check: Add a new todo for an user
- :ballot_box_with_check: Edit todo from an user
- :ballot_box_with_check: Make a todo done
- :ballot_box_with_check: Delete a todo done
- :ballot_box_with_check: Activate a PRO plan for an user

## :gem: Run application

```
    npm run docker:build
    npm run docker:run
```

- Open a browser and type the following URL: `http://localhost:49127`

## :gem: Run tests

```
    npm run docker:build
    npm run docker:test
```

## :gem: Prettier

```
    npm run prettier:fix
```

## :woman: Author

[@laisfrigerio](https://instagram.com/laisfrigerio/)

## 📄 License

This project is licensed under the MIT License - see the LICENSE.md file for details
