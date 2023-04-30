import axios from "axios";
import { useEffect, useState } from "react";
import Autosuggest from 'react-autosuggest';
import { Link } from "react-router-dom";


const SearchBar = () => {
    const [value, setValue] = useState('');
    const [products, setProducts] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const response = await axios.get('http://localhost:5000/api/product/all-products')
            setProducts(response.data)
        }
        getProducts()
    }, [])

    const getSuggestions = value => {
      const inputValue = value.trim().toLowerCase();
      const inputLength = inputValue.length;
      return inputLength === 0 ? [] : products.filter(item => item.name.toLowerCase().includes(inputValue))
    };

    const onSuggestionsFetchRequested = ({ value }) => {
      setSuggestions(getSuggestions(value));
    };

    const onSuggestionsClearRequested = () => {
      setSuggestions([]);
    };

    const onChange = (event, { newValue }) => {
      setValue(newValue);
    };

    const getSuggestionValue = suggestion => suggestion.name;

    const renderSuggestion = suggestion => (
      <Link to={`/details/${suggestion._id}`}>
            <div className="suggest-box text-dark">
                <img style={{"width": "30px"}} src={suggestion.photo} alt="" /> - {suggestion.name} - {suggestion.price} AZN
            </div>
      </Link>
    );

    const inputProps = {
      placeholder: 'Axtar...',
      value,
      onChange: onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    )
}

export default SearchBar;