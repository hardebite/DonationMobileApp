import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useRef, useState} from 'react';
import {View, TextInput, Pressable} from 'react-native';
import {scaleFontSize} from '../../assets/styles/scaling';
import style from './style';
import PropTypes from 'prop-types';

const Search = props => {
  const handleFocus = () => {
    textInputRef.current.focus();
  };
  const textInputRef = useRef(null);
  const [search, setSearch] = useState('');
  const handleSearch = searchValue => {
    setSearch(searchValue);
    props.onSearch(searchValue);
  };
  return (
    <Pressable onPress={handleFocus} style={style.searchInputContainer}>
      <FontAwesomeIcon
        color={'#25C0FF'}
        size={scaleFontSize(22)}
        icon={faSearch}
      />
      <TextInput
        placeholder={props.placeholder}
        value={search}
        onChangeText={value => handleSearch(value)}
        ref={textInputRef}
        style={style.searchInput}
      />
    </Pressable>
  );
};
Search.defaultProps = {
  onSearch: () => {},
  placeholder: 'Search',
};
Search.propType = {
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
};
export default Search;
