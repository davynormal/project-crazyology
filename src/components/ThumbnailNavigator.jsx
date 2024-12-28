import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const ThumbnailNavigator = () => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 4;

    const articles = [
        { id: 1, title: "Evolution of the Crazy", imagePath: "/images/thumbnails/th-evol.jpg", link: "/index.html" },
        { id: 2, title: "Slipping through the Cracks", imagePath: "/images/thumbnails/th-cracks.jpg", link: "/cracks.html" },
        { id: 3, title: "Logic and Paradoxes", imagePath: "/images/thumbnails/logic.jpg", link: "/logic-and-paradoxes" },
        { id: 4, title: "Subversion & Transgression", imagePath: "/images/thumbnails/subversion.jpg", link: "/subversion-and-transgression" },
        { id: 5, title: "Imagination & Intuition", imagePath: "/images/thumbnails/imagination.jpg", link: "/imagination-and-intuition" },
        { id: 6, title: "Empathy & Humanity", imagePath: "/images/thumbnails/empathy.jpg", link: "/empathy-and-humanity" }
    ];

    const visibleArticles = articles.slice(startIndex, startIndex + visibleCount);
    const hasMore = startIndex + visibleCount < articles.length;
    const hasPrevious = startIndex > 0;

    const containerStyle = {
        width: '140px',
        padding: '10px',
        backgroundColor: '#1a1a1a'
    };

    const itemStyle = {
        marginBottom: '15px',
        cursor: 'pointer',
        padding: '5px',
        border: '1px solid #000',
        transition: 'all 0.2s ease',
        width: '120px'
    };

    const thumbnailStyle = {
        width: '100px',
        height: '100px',
        border: '1px solid #444',
        margin: '0 auto 8px auto',
        transition: 'all 0.2s ease',
        backgroundColor: '#333',
        overflow: 'hidden'
    };

    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
    };

    return (
        <div style={containerStyle}>
            {hasPrevious && (
                <button 
                    onClick={() => setStartIndex(i => Math.max(0, i - 1))}
                    style={{ width: '100%', padding: '5px', color: '#666' }}
                >
                    <ChevronUp />
                </button>
            )}
            
            <div>
                {visibleArticles.map(article => (
                    <a href={article.link} key={article.id} style={{ textDecoration: 'none' }}>
                        <div 
                            style={itemStyle}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = '#666';
                                e.currentTarget.querySelector('.thumbnail').style.borderColor = '#666';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = '#333';
                                e.currentTarget.querySelector('.thumbnail').style.borderColor = '#444';
                            }}
                        >
                            <div className="thumbnail" style={thumbnailStyle}>
                                <img 
                                    src={article.imagePath}
                                    alt={article.title}
                                    style={imageStyle}
                                />
                            </div>
                            <p style={{
                                fontSize: '12px',
                                textAlign: 'center',
                                color: '#ccc',
                                margin: '0'
                            }}>
                                {article.title}
                            </p>
                        </div>
                    </a>
                ))}
            </div>

            {hasMore && (
                <button 
                    onClick={() => setStartIndex(i => i + 1)}
                    style={{ width: '100%', padding: '5px', color: '#666' }}
                >
                    <ChevronDown />
                </button>
            )}
        </div>
    );
};

export default ThumbnailNavigator;
