import React from 'react';
import { Link } from 'react-router-dom';

const CountryLink = ({children, id}) => 
    <Link to={`/${id}`} className="list-group-item list-group-item-action">{children}</Link>

export default CountryLink;



