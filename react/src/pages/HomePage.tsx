import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/HomePage.css'; // 用於設計簡單的樣式

interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
}

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const products: Product[] = [
        { id: '1', name: '薄長袖', price: 399, imageUrl: '/images/tshirt.jpg' },
        { id: '2', name: '大學T', price: 599, imageUrl: '/images/jeans.jpg' },
        { id: '3', name: '帽T', price: 899, imageUrl: '/images/jacket.jpg' },
        { id: '4', name: '運動長褲', price: 499, imageUrl: '/images/sweater.jpg' },
        { id: '5', name: '工裝褲', price: 699, imageUrl: '/images/skirt.jpg' },
        { id: '6', name: '喇叭褲', price: 599, imageUrl: '/images/dress.jpg' },
        { id: '7', name: '牛仔外套', price: 799, imageUrl: '/images/shoes.jpg' },
        { id: '8', name: '羽絨外套', price: 2999, imageUrl: '/images/hat.jpg' },
        { id: '9', name: '毛帽', price: 549, imageUrl: '/images/scarf.jpg' },
    ];

    const goToOrdersPage = () => {
        navigate('/orders'); // 導航至 /orders
    };

    return (
        <div className="home-page">
            <h1>服飾展示</h1>
            <button className="go-to-orders-btn" onClick={goToOrdersPage}>
                查看訂單管理
            </button>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.imageUrl} alt={product.name} className="product-image" />
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-price">NT${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
