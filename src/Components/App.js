// import React, { useMemo, useState } from 'react';
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'
import s from './App.module.css';

// import useLocalStorage from './../hooks/useLocalStorage';


export default function App(){
    return (
        <>
            <div className={s.myPhonebook}>
                 <h1 className={s.bigHeader}>Моя телефонная книга</h1>
            <h2 className={s.smallHeader}>Добавить контакт</h2>
            <ContactForm />

            <h2 className={s.smallHeader}>Мои контакты</h2>
            <Filter/>
            <ContactList />
        </div> 

        </>
    );
}