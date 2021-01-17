import React from 'react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import './Filter.css';


const Filter = ({filter, onFilter}) => {

    const handleSubmit = evt => {
        evt.preventDefault();
    }

    return(
        <form className="phoneList"
            onSubmit={handleSubmit}>
            <label htmlFor="filter_1">Поиск покнтакта по имени</label><br/>
            <input type="text" name="filter" id="filter_1" value={filter}  onChange={onFilter} />
        </form>
    );
}

Filter.defaultProps = {
    filter:'',
    onFilter:()=>{}
}
Filter.propTypes = {
    filter:PropTypes.string.isRequired,
    onFilter:PropTypes.func
}

const mapStateToProps = state => ({
    filter:state.phonebook.filter
});

const  mapDispatchToprops = dispatch =>({
    onFilter: e => dispatch(phonebookActions.changeFilter(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToprops)(Filter)