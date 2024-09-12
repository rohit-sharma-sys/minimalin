import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LOader from './Pages/LOader'; 

function CategoriesPage() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true); 
        fetch('https://dummyjson.com/products/categories') 
            .then(res => res.json())
            .then(data => {
                setCategories(data); 
                setLoading(false); 
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
                setLoading(false); 
            });
    }, []);

    if (loading) return <LOader />; 

    return (
        <div className="categories-container container-with">
            <h1 class="bft-collection">Categories<span class="dots">.</span></h1>
            <div className="category-grid">
                {categories.map((category, index) => (
                    <Link to={`/SingleCategory/${category.slug}`} key={index} className="category-card-link">
                        <div className="category-card">
                            {/* <img 
                                src={category.url}  
                                alt={category.name} 
                                className="category-image" 
                            /> */}
                            <div className="category-details">
                                <h4 className="category-title">{category.name}</h4> 
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default CategoriesPage;
