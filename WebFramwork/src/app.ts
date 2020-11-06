import moment from 'moment';
import { AddUserView } from './views/addUser.view';
import { ListUsersView } from './views/listUsers.view';




window.onload = function () {

    let currentUrl = window.location.href;
    const [viewName,] = currentUrl.split('/').reverse()
    switch (viewName) {
        case 'addUser.html':
            new AddUserView()
        case 'listUsers.html':
            new ListUsersView()
    }

}

//console.log("Hello Typescript!:", moment('05-11-2020').calendar())

