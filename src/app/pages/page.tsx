import React from 'react';

interface Feature {
    title: string;
    description: string;
    icon: string;
}

interface ThreeColumnProps {
    features: Feature[];
}


const ThreeColumn: React.FC<ThreeColumnProps> = ({ features = [] }) => {
    return (
        <div className="three-column-container">
            {features.map((feature, index) => (
                <div key={index} className="feature">
                    <div className="icon">{feature.icon}</div>
                    <h3 className="title">{feature.title}</h3>
                    <p className="description">{feature.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ThreeColumn;
