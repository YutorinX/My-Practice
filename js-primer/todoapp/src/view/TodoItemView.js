import { element } from "./html-util.js";

export class TodoItemView {
    /**
     * `todoItem`に対応するTodoアイテムのHTML要素を作成して返す
     * @param {TodoItemModel} todoItem
     * @param {function({id:string, completed: boolean})} onUpdateTodo チェックボックスの更新イベントリスナー
     * @param {function({id:string})} onDeleteTodo 削除ボタンのクリックイベントリスナー
     * @returns {Element}
     */
    createElement(todoItem, { onUpdateTodo, onDeleteTodo }) {
        const todoItemElement = todoItem.completed ?
            element `<li><input type="checkbox" class="checkbox" checked>
                                    <s>${todoItem.title}</s>
                                    <button class="delete">x</button>
                                </input></li>` :
            element `<li><input type="checkbox" class="checkbox">
                                    ${todoItem.title}
                                    <button class="delete">x</button>
                                </input></li>`
        const inputCheckboxElement = todoItemElement.querySelector(".checkbox")
        inputCheckboxElement.addEventListener("change", () => {
            // コールバック関数に変更
            onUpdateTodo({
                id: todoItem.id,
                completed: !todoItem.completed
            })
        })
        const deleteButtonElement = todoItemElement.querySelector(".delete")
        deleteButtonElement.addEventListener("click", () => {
            // コールバック関数に変更
            onDeleteTodo({
                id: todoItem.id
            })
        })
        // 作成したTodoアイテムのHTML要素を返す
        return todoItemElement;
    }
}

// example return HTML element of todo item
// import { TodoItemModel } from "../model/TodoItemModel.js";
// import { TodoItemView } from "./TodoItemView.js";

// // TodoItemViewをインスタンス化
// const todoItemView = new TodoItemView();
// // 対応するTodoItemModelを作成する
// const todoItemModel = new TodoItemModel({
//     title: "あたらしいTodo",
//     completed: false
// });
// // TodoItemModelからHTML要素を作成する
// const todoItemElement = todoItemView.createElement(todoItemModel, {
//     onUpdateTodo: () => {
//         // チェックボックスが更新されたときに呼ばれるリスナー関数
//     },
//     onDeleteTodo: () => {
//         // 削除ボタンがクリックされたときによばれるリスナー関数
//     }
// });
// console.log(todoItemElement); // <li>要素が入る
