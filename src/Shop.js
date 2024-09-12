import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LOader from './Pages/LOader'; // Assuming LOader is the loader component

function Shop() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedAvailability, setSelectedAvailability] = useState(''); // Manage single availability selection
    const [sortOrder, setSortOrder] = useState('asc');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [priceRange, setPriceRange] = useState([0, 1000]); // Dynamic price range
    const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000]);
    const [visibleProducts, setVisibleProducts] = useState(6); // State to manage visible products
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {
        setLoading(true); // Show loader while fetching
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                const prices = data.products.map(product => product.price);
                const minPrice = Math.min(...prices);
                const maxPrice = Math.max(...prices);
                setPriceRange([minPrice, maxPrice]);
                setSelectedPriceRange([minPrice, maxPrice]);
                setLoading(false); // Hide loader when data is fetched
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setLoading(false); // Hide loader even if there's an error
            });
    }, []);

    useEffect(() => {
        setLoading(true); // Show loader while fetching categories
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
                setLoading(false); // Hide loader when categories are fetched
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
                setLoading(false); // Hide loader even if there's an error
            });
    }, []);

    const handleAvailabilityChange = (e) => {
        setSelectedAvailability(e.target.value); // Store selected radio button value
    };

    const handleSortOrderChange = (e) => {
        setSortOrder(e.target.value);
    };

    const handleCategoryChange = (categorySlug) => {
        setSelectedCategory(categorySlug);
        setLoading(true); // Show loader while fetching category products
        if (categorySlug) {
            fetch(`https://dummyjson.com/products/category/${categorySlug}`)
                .then(res => res.json())
                .then(data => {
                    setProducts(data.products);
                    setLoading(false); // Hide loader after fetching category products
                })
                .catch(error => {
                    console.error('Error fetching products by category:', error);
                    setLoading(false); // Hide loader even if there's an error
                });
        } else {
            fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(data => {
                    setProducts(data.products);
                    setLoading(false); // Hide loader after fetching all products
                })
                .catch(error => {
                    console.error('Error fetching all products:', error);
                    setLoading(false); // Hide loader even if there's an error
                });
        }
    };

    const handlePriceChange = (e) => {
        const value = parseInt(e.target.value, 10);
        const type = e.target.name;
        setSelectedPriceRange(prev =>
            type === 'min'
                ? [value, prev[1]]
                : [prev[0], value]
        );
    };

    const filteredProducts = products
        .filter(product => {
            // Availability filter
            if (selectedAvailability) {
                if (selectedAvailability === 'inStock' && product.availabilityStatus === 'In Stock') {
                    return true;
                }
                if (selectedAvailability === 'outOfStock' && product.availabilityStatus === 'Out of Stock') {
                    return true;
                }
                return false;
            }
            return true;
        })
        .filter(product => {
            // Price filter
            return product.price >= selectedPriceRange[0] && product.price <= selectedPriceRange[1];
        })
        .sort((a, b) => {
            if (sortOrder === 'asc') return a.title.localeCompare(b.title);
            if (sortOrder === 'desc') return b.title.localeCompare(a.title);
            return 0;
        });

    // Function to handle "Load More" button
    const handleLoadMore = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 6);
    };

    // Show loader if loading
    if (loading) return <LOader />;

    return (
        <div className="shop-container container-with">
            <div className="sidebar">
                <div className="sidebar_sub_row">
                    <h2>Categories</h2>
                    <div className="cat-list-main">
                        <div className="cat-col">
                            <ul className="category-list">
                                <li
                                    key="all"
                                    onClick={() => handleCategoryChange('')}
                                    className={selectedCategory === '' ? 'active' : ''}
                                >
                                    <span className="all-cat">All Categories</span>
                                </li>
                                {categories.map((category, index) => (
                                    <div className="cat-list" key={index}>
                                        <li
                                            onClick={() => handleCategoryChange(category.slug)}
                                            className={selectedCategory === category.slug ? 'active' : ''}
                                        >
                                            {category.name}
                                        </li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <hr className='hr-line' />

                    {/* Availability Filter with Radio Buttons */}
                    <div className="filter-section">
                        <h3>Filter by Availability</h3>
                        <div className='availability'>
                        <div className="avai-radio">
                            <label>
                                <input
                                    type="radio"
                                    value=""
                                    name="availability"
                                    onChange={handleAvailabilityChange}
                                    checked={selectedAvailability === ''}
                                />
                                All
                            </label>
                        </div>
                        <div className="avai-radio">
                            <label>
                                <input
                                    type="radio"
                                    value="inStock"
                                    name="availability"
                                    onChange={handleAvailabilityChange}
                                    checked={selectedAvailability === 'inStock'}
                                />
                                In Stock
                            </label>
                            </div>
                            <div className="avai-radio">
                            <label>
                                <input
                                    type="radio"
                                    value="outOfStock"
                                    name="availability"
                                    onChange={handleAvailabilityChange}
                                    checked={selectedAvailability === 'outOfStock'}
                                />
                                Out of Stock
                            </label>
                        </div>
                        </div>
                    </div>
                    <hr className='hr-line' />

                    <div className="filter-section">
                        <h3 className='filter-title-ava'>Filter by Price</h3>
                        <div className="price-filter">
                            <label>Min Price: ${selectedPriceRange[0]}</label><br />
                            <input
                                type="range"
                                name="min"
                                min={priceRange[0]}
                                max={priceRange[1]}
                                value={selectedPriceRange[0]}
                                onChange={handlePriceChange}
                            />
                        </div>
                        <div className="price-filter">
                            <label>Max Price: ₹{selectedPriceRange[1]}</label><br />
                            <input
                                type="range"
                                name="max"
                                min={priceRange[0]}
                                max={priceRange[1]}
                                value={selectedPriceRange[1]}
                                onChange={handlePriceChange}
                            />
                        </div>
                    </div>
                    <hr className='hr-line' />

                </div>
            </div>

            <div className="products">
                <div className="product-filters">
                    <div className="filter-title flex">
                        <h3>Sort by Name</h3>
                        <select className='product_filter' onChange={handleSortOrderChange}>
                        <option value="asc">Select Alphabetically</option>
                            <option value="asc">A to Z</option>
                            <option value="desc">Z to A</option>
                        </select>
                    </div>
                    <div className="total-product">
                        <div className="short">Showing 1 - {Math.min(visibleProducts, filteredProducts.length)} of {filteredProducts.length} result</div>
                    </div>
                </div>

                <div className="product-grid" id='shop_page'>
                    {filteredProducts.slice(0, visibleProducts).map(product => (
                        <Link to={`/product/${product.id}`} key={product.id} className="product-card-link cat-col coll-col">
                            <div className="product-card">
                                <div className="product-thumbnail">
                                    <img src={product.thumbnail} alt={product.title} className="product-image" />
                                    {product.discount && <div className="product-discount">-{product.discount}%</div>}
                                </div>
                                <div className="product-details">
                                    <h4 className="product-title">{product.title}</h4>
                                    <p className="product-price">$ {product.price}</p>
                                    <p className="cat-discount cat-stock">{product.discountPercentage}%</p>

                                    <p className="product-availability cat-stock">{product.availabilityStatus}</p>
                                    {/* <p>product id{product.id}</p>
                                    <p>{product.warrantyInformation}</p> */}
                                </div>
                                <div className="featured-icon-div">
                                    <ul className="collection-icons">
                                        <li><i className="far fa-eye"></i></li>
                                        <li><i className="fas fa-shopping-cart"></i></li>
                                        <li><i className="fas fa-heart"></i></li>
                                        <li><i className="fas fa-exchange-alt"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Load More Button */}
                {visibleProducts < filteredProducts.length && (
                    <div className="load-more">
                        <button onClick={handleLoadMore} className="load_more_btn banner_button">Load More</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Shop;
