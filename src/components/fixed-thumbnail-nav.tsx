import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const ThumbnailNavigator = () => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 4;
    
    // Sample articles for demonstration
    const articles = [
        { id: 1, title: "Evolution of the Crazy" },
        { id: 2, title: "Method to the Madness" },
        { id: 3, title: "Logic and Paradoxes" },
        { id: 4, title: "Subversion & Transgression" },
        { id: 5, title: "Imagination & Intuition" },
        { id: 6, title: "Empathy & Humanity" }
    ];
    
    const visibleArticles = articles.slice(startIndex, startIndex + visibleCount);
    const hasMore = startIndex + visibleCount < articles.length;
    const hasPrevious = startIndex > 0;

    const thumbnailStyle = {
        width: '100px',
        height: '100px',
        border: '1px solid #444',
        margin: '0 auto 8px auto',
        transition: 'all 0.2s ease',
        backgroundColor: '#333'
    };

    const containerStyle = {
        width: '120px',  // 100px + padding
        padding: '10px',
        backgroundColor: '#1a1a1a'
    };

    const itemStyle = {
        marginBottom: '15px',
        cursor: 'pointer',
        padding: '5px',
        border: '1px solid #333',
        transition: 'all 0.2s ease'
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
                        <div 
                            className="thumbnail"
                            style={thumbnailStyle}
                        />
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