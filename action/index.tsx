import {
markIncompleteActionCreator,
markCompleteActionCreator,
deleteTodoActionCreator
}
    from "../types/actionCreatorTypes"


export const markComplete: markCompleteActionCreator = (todo) => {
    return {
        type: 'MARK_COMPLETE',
        todo: todo
    }
}

export const markIncomplete: markIncompleteActionCreator = (todo) => {
    return {
        type: 'MARK_INCOMPLETE',
        todo: todo
    }
}

export const deleteTodo: deleteTodoActionCreator = (todo) => {
    return {
        type: 'DELETE_TODO',
        todo: todo
    }
}