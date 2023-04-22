import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditorsInsights from '../../News/EditorsInsights/EditorsInsights';
import EditorsInsightsLeftSide from '../../News/EditorsInsightsLeftSide/EditorsInsightsLeftSide';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className='mt-4'>
            <h4>All Category</h4>
            <h4 className='bg-secondary ps-4 p-2 rounded'>National News</h4>
            <div className='ps-4'>
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className='text-black text-decoration-none'>{category.name}</Link>
                    </p>)
                }
            </div>
            <EditorsInsightsLeftSide></EditorsInsightsLeftSide>
        </div>
    );
};

export default LeftNav;