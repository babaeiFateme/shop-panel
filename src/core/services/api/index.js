import loginHttp from './login/login.api'
import createProductHttp from './products/create/create.api'
import { deleteHttp } from './products/delete/delete.api'
import editProductHttp from './products/edit/edit.api'
import productsHttp from './products/products.api'
import profileHttp from './profile/profile.api'
import createUserHttp from './users/create/create.api'
import { deleteUserHttp } from './users/delete/delete.api'
import editUserHttp from './users/edit/edit.api'
import usersHttp from './users/list/users.api'
export {
    loginHttp,
    profileHttp,
    productsHttp,
    createProductHttp,
    deleteHttp,
    editProductHttp,
    usersHttp,
    deleteUserHttp,
    editUserHttp,
    createUserHttp,
}
