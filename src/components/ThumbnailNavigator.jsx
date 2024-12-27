import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const ThumbnailNavigator = () => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 4;
    
    // Sample articles with image paths
    const articles = [
        { 
            id: 1, 
            title: "Evolution of the Crazy",
            imagePath: "/images/thumbnails/evolution.jpg" 
        },
        { 
            id: 2, 
            title: "Method to the Madness",
            imagePath: "/images/thumbnails/method.jpg"
        },
        { 
            id: 3, 
            title: "Logic and Paradoxes",
            imagePath: "/images/thumbnails/logic.jpg"
        },
        { 
            id: 4, 
            title: "Subversion & Transgression",
            imagePath: "/images/thumbnails/subversion.jpg"
        },
        { 
            id: 5, 
            title: "Imagination & Intuition",
            imagePath: "/images/thumbnails/imagination.jpg"
        },
        { 
            id: 6, 
            title: "Empathy & Humanity",
            imagePath: "/images/thumbnails/empathy.jpg"
        }
    ];
    
    const visibleArticles = articles.slice(startIndex, startIndex + visibleCount);
    const hasMore = startIndex + visibleCount < articles.length;
    const hasPrevious = startIndex > 0;

    const containerStyle = {
        width: '140px',  // Increased to contain thumbnails + padding + borders
        padding: '10px',
        backgroundColor: '#1a1a1a'
    };

    const itemStyle = {
        marginBottom: '15px',
        cursor: 'pointer',
        padding: '5px',
        border: '1px solid #333',
        transition: 'all 0.2s ease',
        width: '120px'  // Ensure item fits in container
    };

    const thumbnailStyle = {
        width: '100px',
        height: '100px',
        border: '1px solid #444',
        margin: '0 auto 8px auto',
        transition: 'all 0.2s ease',
        backgroundColor: '#333',
        overflow: 'hidden'  // Ensure image doesn't spill out
    };

    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover'  // Ensure image covers thumbnail area
    };

    return (
        <div style={containerStyle}>
            {hasPrevious && (
                <button 
                    onClick={() => setStartIndex(i => Math.max(0, i - 1))}
                    style={{width: '100%', padding: '5px', color: '#666'}}
                >
                    <ChevronUp />
                </button>
            )}
            
            <div>
                {visibleArticles.map(article => (
                    <div 
                        key={article.id}
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
                ))}
            </div>

            {hasMore && (
                <button 
                    onClick={() => setStartIndex(i => i + 1)}
                    style={{width: '100%', padding: '5px', color: '#666'}}
                >
                    <ChevronDown />
                </button>
            )}
        </div>
    );
};

export default ThumbnailNavigator;