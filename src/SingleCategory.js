import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import LOader from './Pages/LOader';

function SingleCategory(){
    const { slug } = useParams(); // Get category slug from URL
    const [products, setProducts] = useState([]); // Initialize products as empty array
    const [loading, setLoading] = useState(true);
    const [sortOptions, setSortOptions] = useState([]); // Initialize sort options

    // Fetch products dynamically
    useEffect(() => {
        setLoading(true);

        // Fetch category products
        fetch(`https://dummyjson.com/products/category/${slug}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setProducts([]); // Set products to empty array if there's an error
                setLoading(false);
            });
    }, [slug]);

    // Fetch sort options dynamically or define them manually
    useEffect(() => {
        // Example of hardcoded sort options, replace with an API call if needed
        const availableSortOptions = [
            { value: 'best-selling', label: 'Best Selling' },
            { value: 'price-low-high', label: 'Price: Low to High' },
            { value: 'price-high-low', label: 'Price: High to Low' },
        ];

       
        setSortOptions(availableSortOptions);
    }, []);

    if (loading) return <LOader />;

    return (
        <div className="unique-category-page  container-with">
            <header className="unique-category-header">
                <h1 className="unique-category-title">
                    {slug.charAt(0).toUpperCase() + slug.slice(1)} Collection
                </h1>
                <p className="unique-category-description">
                    Explore the best of {slug} products with filters for precise choices.
                </p>
            </header>

            <section className="unique-products-section">
                <div className="unique-product-controls">
                    <span>{products.length} Results Found</span>

                   
                </div>

                <div className="unique-product-grid">
                    {products.length > 0 ? (

                        products.map((product) => (
                            <Link to={`/product/${product.id}`} key={product.id} className="product-card-link">
                            <div key={product.id} className="unique-product-card">
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="unique-product-image"
                                />
                                <div className="unique-product-info">
                                    <h3 className="unique-product-title">{product.title}</h3>
                                    <p className="unique-product-price">Rs. {product.price}</p>
                                </div>
                            </div>
                            </Link>
                        ))
                    ) : (
                        <p>No products available for this category</p>
                    )}
                </div>
            </section>
        </div>
    );
}

export default SingleCategory