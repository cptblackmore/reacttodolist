# React ToDo List

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
<br/>
[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
![W3C](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fcptblackmore-reacttodolist.netlify.app%2F)
[![Netlify Status](https://api.netlify.com/api/v1/badges/7285daaa-8f77-4875-8435-67345826f5c3/deploy-status)](https://app.netlify.com/projects/cptblackmore-reacttodolist/deploys)

- [English version of README](./README.en.md)

Функциональный список задач с минималистичным интерфейсом. Реализован на React с нуля, включая большую часть компонентов и логики.

> [Ссылка на демо](https://cptblackmore-reacttodolist.netlify.app/)

###### Другие проекты

[![JobTracker](https://img.shields.io/badge/JobTracker-96b9ff.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA3MiA3Mic+DQogIDxyZWN0IHdpZHRoPSc3MicgaGVpZ2h0PSc3Micgcng9JzgnIGZpbGw9JyMzNzVFOTcnIC8+DQogIDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDUsIDUpJyBmaWxsPScjRUFGMkZGJz4NCiAgICA8cGF0aCBkPSdNMTEuNDAgNDlRNy44NSA0OSA0Ljg4IDQ3LjY3UTEuOTAgNDYuMzUgMCA0My45MEw0LjUwIDM4LjUwUTUuOTUgNDAuNDAgNy41NSA0MS4zOFE5LjE1IDQyLjM1IDExLjAwIDQyLjM1UTE1Ljk1IDQyLjM1IDE1Ljk1IDM2LjU1TDE1Ljk1IDE5LjkwTDMuNjUgMTkuOTBMMy42NSAxMy40MEwyNC4wMCAxMy40MEwyNC4wMCAzNi4xMFEyNC4wMCA0Mi42MCAyMC44MCA0NS44MFExNy42MCA0OSAxMS40MCA0OVpNMzkuMjUgNDguNDBMMzkuMjUgMjAuMDBMMjguMDUgMjAuMDBMMjguMDUgMTMuNDBMNTguNTUgMTMuNDBMNTguNTUgMjAuMDBMNDcuMzUgMjAuMDBMNDcuMzUgNDguNDBMMzkuMjUgNDguNDBaJy8+DQogIDwvZz4NCjwvc3ZnPg==)](https://github.com/cptblackmore/jobtracker) [![JobTracker Server](https://img.shields.io/badge/JobTracker-Server-96b9ff.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA3MiA3Mic+DQogIDxyZWN0IHdpZHRoPSc3MicgaGVpZ2h0PSc3Micgcng9JzgnIGZpbGw9JyMzNzVFOTcnIC8+DQogIDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDUsIDUpJyBmaWxsPScjRUFGMkZGJz4NCiAgICA8cGF0aCBkPSdNMTEuNDAgNDlRNy44NSA0OSA0Ljg4IDQ3LjY3UTEuOTAgNDYuMzUgMCA0My45MEw0LjUwIDM4LjUwUTUuOTUgNDAuNDAgNy41NSA0MS4zOFE5LjE1IDQyLjM1IDExLjAwIDQyLjM1UTE1Ljk1IDQyLjM1IDE1Ljk1IDM2LjU1TDE1Ljk1IDE5LjkwTDMuNjUgMTkuOTBMMy42NSAxMy40MEwyNC4wMCAxMy40MEwyNC4wMCAzNi4xMFEyNC4wMCA0Mi42MCAyMC44MCA0NS44MFExNy42MCA0OSAxMS40MCA0OVpNMzkuMjUgNDguNDBMMzkuMjUgMjAuMDBMMjguMDUgMjAuMDBMMjguMDUgMTMuNDBMNTguNTUgMTMuNDBMNTguNTUgMjAuMDBMNDcuMzUgMjAuMDBMNDcuMzUgNDguNDBMMzkuMjUgNDguNDBaJy8+DQogIDwvZz4NCjwvc3ZnPg==)](https://github.com/cptblackmore/jobtracker-server) [![TypeWeather](https://img.shields.io/badge/TypeWeather-3b3b54.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAzMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGlkPSJMb2dvIj4NCjxnIGlkPSJWZWN0b3IiPg0KPHBhdGggaWQ9IlZlY3Rvcl8yIiBkPSJNMjIuNjY1IDE5Ljc4MDNDMjEuNTkzOSAxOS43ODAzIDIwLjkzNDEgMTkuMjg1OCAxOS44NTU5IDE4LjcwMzRDMTguNzc3NyAxOC4xMjEgMTUuNjU5MyAxNS43NzYxIDE1LjY1OTMgMTIuODU3MkMxNS42NTkzIDEwLjg3NzEgMTUuMTQ4OSA5LjI3NTU1IDE0LjI3OTYgNy45OTkyMkMxMy40MTY4IDYuNzMyNjkgMTIuMjQ4IDUuODU1MiAxMS4wMzIgNS4yMzU3OEMxMC40NDYgNC45MzczNiA5LjgzNjI4IDQuNjkzMzEgOS4yMjkwOSA0LjQ5MTYyQzguODc1MTIgNC4zNzQxMiA4LjY2OTcgMy45OTQwNCA4LjgyMzI5IDMuNjU0MjVDOS43OTY2OCAxLjQ5OTMxIDExLjk2NDUgMCAxNC40ODI4IDBDMTcuOTEwNyAwIDIwLjY4OTcgMi43Nzg4NyAyMC42ODk3IDYuMjA2OTNDMjAuNjg5NyA2Ljk0MDMyIDIwLjU2MjUgNy42NDQxIDIwLjMyODkgOC4yOTcxOEMyMS4zMTgzIDcuNjMwNDIgMjIuNTEwNCA3LjI0MTM0IDIzLjc5MzIgNy4yNDEzNEMyNy4yMjExIDcuMjQxMzQgMjkuOTk5OSAxMC4wMjAyIDI5Ljk5OTkgMTMuNDQ4M0MyOS45OTk5IDE3LjU3NTEgMjYuMzczNSAxOS43ODAzIDIyLjY2NSAxOS43ODAzWiIgZmlsbD0iIzhGQjJGNSIvPg0KPHBhdGggaWQ9IlZlY3Rvcl8zIiBkPSJNMCAxMi45MzEyQzAgMTYuMjAyOSAyLjE1NzA0IDE4LjkyOSA1LjAxNDYxIDE5LjUzMTRDNS40NTU2OCAxOS42OTI1IDUuOTMxODUgMTkuNzgwNCA2LjQyODYgMTkuNzgwNEgxNi4wNzIzQzE2LjM5NTcgMTkuNzgwNCAxNi41MzY1IDE5LjM0NzkgMTYuMjg5NiAxOS4xMzg5QzE0LjYwNDIgMTcuNzEyOSAxMy4zNTE3IDE1LjcwMzEgMTMuMzUxNyAxMi44NTczQzEzLjM1MTcgMTEuMjkzNiAxMi45NTU3IDEwLjE1NDcgMTIuMzcyNCA5LjI5ODUxQzExLjc4MjQgOC40MzI0NyAxMC45NTI2IDcuNzg1MTkgOS45ODQ2NCA3LjI5MkM5LjAwNzY5IDYuNzk0NDMgNy45NDcwNyA2LjQ3NzQ1IDYuOTM0MjIgNi4yNTI3NEM2LjY5NTY3IDYuMjIyNjQgNi40NTI5IDYuMjA3MDIgNi4yMDY5MyA2LjIwNzAyQzIuNzc4ODcgNi4yMDcwMiAwIDkuMjE3NTUgMCAxMi45MzEyWiIgZmlsbD0iIzhGQjJGNSIvPg0KPC9nPg0KPC9nPg0KPC9zdmc+DQo=)](https://github.com/cptblackmore/typeweather)

## Возможности

- Добавление, редактирование, удаление и отметка выполнения задач.

    <img src="https://github.com/user-attachments/assets/3c22bb67-a631-44a9-aaa1-0f0bedd7021c" width="370px" alt="Добавление, редактирование, удаление, отметка задач"/>

- Фильтрация задач поисковой строкой и/или категорией.

    <img src="https://github.com/user-attachments/assets/219c96c3-542d-47e0-a28d-563adac6667a" width="370px" alt="Фильтрация задач"/>

- Перетаскивание задач с помощью помощью касания, мыши или клавиатуры (`Пробел` + стрелки `↑`/`↓`).

    <img src="https://github.com/user-attachments/assets/a86690d8-026b-477f-abd2-ba47c1080f7a" width="370px" alt="Перетаскивание задач"/>

- Отмена и повтор любых действий со списком.

    <img src="https://github.com/user-attachments/assets/27753b1a-b295-4bfe-8a45-816501aea91c" width="370px" alt="Отмена и повтор действий в списке задач"/>

- Выбор темы оформления.

    <img src="https://github.com/user-attachments/assets/8c3bad21-65f2-4c96-b1c2-cbe15f4e0160" width="370px" alt="Выбор темы"/>

## Стек

#### Языки и архитектура

- **HTML / CSS / JS**
- **React 18.3.1**

#### Сборка и разработка

- **Vite** для сборки проекта и dev-сервера
- **ESLint** с конфигурацией под **Prettier** для контроля кодстайла

#### Стилизация

- **styled-jsx** (CSS-in-JS)
- **SCSS** (для вложенности и удобной структуры стилей)

#### Библиотеки

- [nanoid](https://github.com/ai/nanoid) — генерация уникальных коротких идентификаторов
- [@hello-pangea/dnd](https://github.com/hello-pangea/dnd) — drag-n-drop API (форк [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd))
- [use-undo](https://github.com/homerchen19/use-undo) — управление историей действий
- [react-focus-lock](https://github.com/theKashey/react-focus-lock) — управление фокусом в модальных окнах 

#### Дизайн и UX

- **Адаптивная вёрстка** с учётом разных экранов
- **Горячие клавиши** (перетаскивание, отмена/повтор, навигация и т.д.)
- **Drag-n-drop** (перетаскивание задач)

## Установка и запуск

0. Перед началом убедитесь, что у вас есть:
    - Node.js версии **18 и выше** — [скачать с nodejs.org](https://nodejs.org/)
    - Git — [скачать с git-scm.com](https://git-scm.com/)
1. Клонируйте репозиторий: `git clone https://github.com/cptblackmore/reacttodolist`
2. Перейдите в него: `cd reacttodolist`
3. Установите зависимости: `npm install`
4. Запустите проект: `npm run dev -- --host`
5. После запуска Vite в терминале появятся адреса для доступа к проекту:
    - `http://localhost:5173` — для текущего устройства
    - `http://<Network-IP>:5173` — для других устройств в вашей локальной сети (например, для проверки с телефона)

## Особенности проекта

- **Drag-and-drop**: реализован для тапа, курсора и клавиатуры (`Пробел` для выбора, `↑`/`↓` — для перемещения).
- **Поддержка горячих клавиш**: `Delete` — удаление, `Ctrl+E` — редактирование, `Enter` — отметить выполнение. Фокус можно перемещать по задачам стрелками `↑`/`↓`
- **Хранилище**: список задач и выбранная тема сохраняются в хранилище браузера (`localStorage`). История действий хранится только в текущей сессии.
- **Выбор темы**: смена тем реализована через React Context, с доступом на любом уровне вложенности.
- **Render Props паттерн**: логика селекта обёрнута в умный компонент с Render Props, позволяя использовать разные UI-обёртки (темы, категории) без дублирования поведения.

## Планы по улучшению

- **Разделение выбора темы**: разделить выбор светлой/тёмной темы и цветовой схемы, добавить поясняющие надписи для каждого параметра.
- **Предупреждение о пустом вводе**: показывать уведомление при попытке сохранить задачу с пустым заголовком.
- **Подтверждение удаления задач**: требовать повторного клика по иконке корзины для подтверждения удаления и предотвращения случайных действий.
- **Автоматическое расширение полей ввода**: сделать поля ввода задач адаптивными по высоте либо заменить на `textarea` с авторасширением.
- **Горячие клавиши и справка**: расширить список хоткеев для управления задачами и списками, добавить в UI справку с их описанием.

## Author

**Victor** _aka_ **captain_blackmore**

- [Telegram](https://t.me/captain_blackmore)
- [Github](https://github.com/cptblackmore)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

### Acknowledgements

This project makes use of the following open-source libraries:

- [nanoid](https://github.com/ai/nanoid) - Licensed under the [MIT](https://github.com/ai/nanoid?tab=MIT-1-ov-file#readme).
- [@hello-pangea/dnd](https://github.com/hello-pangea/dnd) - Licensed under the [Apache 2.0](https://github.com/hello-pangea/dnd?tab=License-1-ov-file#readme).
- [use-undo](https://github.com/homerchen19/use-undo) - Licensed under the [MIT](https://github.com/homerchen19/use-undo?tab=MIT-1-ov-file#readme).
- [react-focus-lock](https://github.com/theKashey/react-focus-lock) - Licensed under the [MIT](https://github.com/theKashey/react-focus-lock?tab=MIT-1-ov-file#readme).
