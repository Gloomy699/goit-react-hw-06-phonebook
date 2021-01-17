import { createAction } from '@reduxjs/toolkit';
import types from './phonebook-types';
import { v4 as uuidv4 } from 'uuid';



const addContact = createAction('phonebook/add', (name, phone)=>{
    return {
        payload:{
            id:uuidv4(),
            name:name,
            phone:phone
        }
    }
});
const deleteContact = createAction('phonebook/delete')
const changeFilter = createAction('phonebook/changeFilter')

export default{
    addContact,
    deleteContact,
    changeFilter
}