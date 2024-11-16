# React ToDo List

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
<br/>
[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
![W3C](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fcptblackmore-reacttodolist.netlify.app%2F
)
![status](https://img.shields.io/website?url=https%3A%2F%2Fcptblackmore-reacttodolist.netlify.app%2F
)

- [English version of README](./README.en.md)

A finished pet project of a multifunctional to-do list. Created by me from scratch using React, along with most of the components.

> [Live Demo](https://cptblackmore-reacttodolist.netlify.app/)

## Features

- Add/edit/delete/mark tasks as complete
  <br/><br/><img src="https://github.com/user-attachments/assets/3c22bb67-a631-44a9-aaa1-0f0bedd7021c" width="300px"/>
- Filter tasks via a search bar and/or category toggles
  <br/><br/><img src="https://github.com/user-attachments/assets/219c96c3-542d-47e0-a28d-563adac6667a" width="300px"/>
- Rearrange tasks by dragging with the cursor or using the "Space" key with "Up"/"Down" arrows
  <br/><br/><img src="https://github.com/user-attachments/assets/a86690d8-026b-477f-abd2-ba47c1080f7a" width="300px"/>
- Undo and redo any actions that modify the list
  <br/><br/><img src="https://github.com/user-attachments/assets/27753b1a-b295-4bfe-8a45-816501aea91c" width="300px"/>
- Switch between light and dark themes
  <br/><br/><img src="https://github.com/user-attachments/assets/8c3bad21-65f2-4c96-b1c2-cbe15f4e0160" width="300px"/>

## Tools and Approaches

- HTML/CSS/JS
- React 18.3.1
- Vite
- styled-jsx (CSS-in-JS)
- SCSS (mainly for nesting)
- [nanoid](https://github.com/ai/nanoid) - a generator for unique short IDs
- [@hello-pangea/dnd](https://github.com/hello-pangea/dnd) - drag-n-drop library (fork of [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd))
- [use-undo](https://github.com/homerchen19/use-undo) - library for managing undo/redo state changes
- [react-focus-lock](https://github.com/theKashey/react-focus-lock) - library for focus isolation inside modal dialogs with return focus support
- Responsive design

## Getting Started

- Clone the repository: `git clone https://github.com/cptblackmore/reacttodolist`
- Navigate to the repository directory: `cd reacttodolist`
- Install dependencies: `npm install`
- Start the project: `npm run dev -- --host`
- Open [localhost:5173](http://localhost:5173/) on the same device, or use the addresses shown in the terminal from another device on your network.

## Project Highlights

- Drag-n-drop is implemented for tasks. It works with the cursor, long taps on mobile devices, and keyboard keys: "Space" for selection and "Up"/"Down" arrows for moving tasks.
- Tasks can also be navigated with "Up"/"Down" arrow keys for convenience when using the keyboard.
- Additional hotkeys are supported when a task is focused: delete - Del; edit - Ctrl+E; mark as complete - Enter.
- The task list and selected theme are saved in the browser's localStorage. The undo/redo history is not stored in the browser.
- Theme switching is implemented using React Context, enabling easy theme propagation to any component, regardless of its nesting level.
- The same logic component is used for both category and theme selectors, extracted using the Render Props pattern.

### Improvement Ideas

- Revamp the theme selection menu to allow separate selection of light/dark modes and color schemes, with corresponding labels.
- Add a notification when trying to save an empty task in add/edit forms.
- Include a delete confirmation requiring a second click on the trash icon to avoid accidental deletions due to misclicks.
- Make input fields in forms "expandable" based on the entered text or replace them with textareas.
- Enhance hotkey functionality for managing tasks and the list, and provide a user-friendly hotkey guide.

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
