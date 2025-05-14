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

## Возможности

- Добавление, редактирование, удаление и отметка выполнения задач.
  <br/><br/><img src="https://github.com/user-attachments/assets/3c22bb67-a631-44a9-aaa1-0f0bedd7021c" width="300px"/>
- Фильтрация задач поисковой строкой и/или категорией.
  <br/><br/><img src="https://github.com/user-attachments/assets/219c96c3-542d-47e0-a28d-563adac6667a" width="300px"/>
- Перетаскивание задач с помощью помощью касания, мыши или клавиатуры (`Пробел` + стрелки `↑`/`↓`).
  <br/><br/><img src="https://github.com/user-attachments/assets/a86690d8-026b-477f-abd2-ba47c1080f7a" width="300px"/>
- Отмена и повтор любых действий со списком.
  <br/><br/><img src="https://github.com/user-attachments/assets/27753b1a-b295-4bfe-8a45-816501aea91c" width="300px"/>
- Выбор темы оформления.
  <br/><br/><img src="https://github.com/user-attachments/assets/8c3bad21-65f2-4c96-b1c2-cbe15f4e0160" width="300px"/>

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
1. Клонируйте репозиторий: `git clone https://github.com/cptblackmore/reacttodolist`.
2. Перейдите в него: `cd reacttodolist`.
3. Установите зависимости: `npm install`.
4. Запустите проект: `npm run dev -- --host`.
5. После запуска Vite в терминале появятся адреса для доступа к проекту:
    - `http://localhost:5173` — для текущего устройства
    - `http://<Network-IP>:5173` — для других устройств в вашей локальной сети (например, для проверки с телефона)

## Особенности проекта

- **Drag-and-drop**: реализован для тапа, курсора и клавиатуры (`Пробел` для выбора, `↑`/`↓` — для перемещения).
- **Поддержка горячих клавиш**: `Delete` — удаление, `Ctrl+E` — редактирование, `Enter` — отметить выполнение. Фокус можно перемещать по задачам стрелками `↑`/`↓`.
- **Хранилище**: список задач и выбранная тема сохраняются в хранилище браузера (`localStorage`). История действий хранится только в текущей сессии.
- **Выбор темы**: смена тем реализована через React Context, с доступом на любом уровне вложенности.
- **Render Props**: логика селекта обёрнута в умный компонент с Render Props, позволяя использовать разные UI-обёртки (темы, категории) без дублирования поведения.

### Планы по улучшению

- **Выбор темы оформления**: разделить выбор светлой/тёмной темы и цветовой схемы, добавить поясняющие надписи для каждого параметра.
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
