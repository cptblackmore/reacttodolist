# React ToDo List

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
<br/>
[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
![W3C](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fcptblackmore-reacttodolist.netlify.app%2F
)
![status](https://img.shields.io/website?url=https%3A%2F%2Fcptblackmore-reacttodolist.netlify.app%2F
)

Готовый пет-проект в виде многофункционального списка задач. Создан мною с нуля на React, как и большая часть компонентов.

> [Ссылка на демо](https://cptblackmore-reacttodolist.netlify.app/)

## Возможности

- Добавление/редактирование/удаление/обозначение статуса выполнения
  <br/><br/><img src="https://github.com/user-attachments/assets/3c22bb67-a631-44a9-aaa1-0f0bedd7021c" width="300px"/>
- Фильтрация задач с помощью поисковой строки и/или переключения категории
  <br/><br/><img src="https://github.com/user-attachments/assets/219c96c3-542d-47e0-a28d-563adac6667a" width="300px"/>
- Изменение порядка задач перетаскиванием с помощью курсора или клавиш "Пробел" и стрелок "Вверх"/"Вниз"
  <br/><br/><img src="https://github.com/user-attachments/assets/a86690d8-026b-477f-abd2-ba47c1080f7a" width="300px"/>
- Отмена и повтор любых действий, изменяющих список
  <br/><br/><img src="https://github.com/user-attachments/assets/27753b1a-b295-4bfe-8a45-816501aea91c" width="300px"/>
- Выбор цветовой темы
  <br/><br/><img src="https://github.com/user-attachments/assets/8c3bad21-65f2-4c96-b1c2-cbe15f4e0160" width="300px"/>

## Инструменты и подходы

- HTML/CSS/JS
- React 18.3.1
- Vite
- styled-jsx (CSS-in-JS)
- SCSS (в основном для нестинга)
- [nanoid](https://github.com/ai/nanoid) - генератор уникальных коротких идентификаторов
- [@hello-pangea/dnd](https://github.com/hello-pangea/dnd) - drag-n-drop библиотека (форк от [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd))
- [use-undo](https://github.com/homerchen19/use-undo) - библиотека для сохранения шагов в истории изменений и их отмены/повтора
- [react-focus-lock](https://github.com/theKashey/react-focus-lock) - библиотека для изоляции фокуса внутри модальных окон и его возвращения при их закрытии
- Адаптивная вёрстка

## Установка и запуск

- Клонируйте репозиторий: `git clone https://github.com/cptblackmore/reacttodolist`
- Перейдите в директорию репозитория: `cd reacttodolist`
- Установите зависимости: `npm install`
- Запустите проект: `npm run dev -- --host`
- Перейдите по [localhost:5173](http://localhost:5173/) на том же устройстве, либо с другого устройства в вашей сети, по появившимся в терминале адресам.

## Особенности проекта

- В проекте реализован drag-n-drop задач. Работает с курсором, задерживанием тапа на мобильных устройствах, клавишами: "Пробел" для выбора и стрелки "Вверх"/"Вниз" для перемещения.
- Для удобства того же перетаскивания клавишами предусмотрено перемещение фокуса по задачам с помощью стрелок "Вверх"/"Вниз".
- Присутствуют и другие хоткеи, работающие когда задача выделена фокусом: удаление - Del; редактирование - Ctrl+E; обозначение статуса - Enter.
- Список и выбранная тема сохраняются в хранилище браузера (localStorage). История изменений для их отмены/повтора в хранилище браузера не сохраняется.
- Смена тем реализована через React Context, что позволяет легко передать цветовую схему в любой компонент, на любом уровне вложенности.
- В селектах выбора категории и тем действует один и тот же логический компонент, выделенный благодаря Render Props паттерну.

### Идеи по улучшению

- Изменение меню выбора тем для отдельного выбора светлой/тёмной и цветовых схем, добавление сооветствующих надписей.
- Создание уведомления о пустой строке ввода в формах добавления/редактирования задачи при попытке сохранить такую задачу.
- Добавить подтверждение об удалении задачи, требующее повторного клика по иконке корзины, чтобы избежать случайных удалений по миссклику.
- Сделать input в формах "растягиваемым" в зависимости от количества введённого текста, либо просто заменить их на textarea.
- Доработка хоткеев для управления задачами и списком, а также создание справки по хоткеям для пользователя.

## Author

**Victor** *aka* **captain_blackmore**
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
