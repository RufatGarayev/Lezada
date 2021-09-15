import React from 'react';

interface ICategoriesData {
    id: number;
    title: string;
};

const Sidebar: React.FC = () => {
    const CategoriesData: ICategoriesData[] = [
        { id: 0, title: "All Categories" },
        { id: 1, title: "Decor" },
        { id: 2, title: "Fashion" },
        { id: 3, title: "Cosmetics" },
        { id: 4, title: "Furniture" },
        { id: 5, title: "Jewelry" },
        { id: 6, title: "Swimsuit" }
    ];

    return (
        <div className="sidebar">
            <div className="categories">
                <h4>Categories</h4>
                <ul>
                    {
                        CategoriesData.map(item => (
                            <li key={item.id}>
                                {item.title}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="tags-wrapper">
                <h4>Tags</h4>
                <div className="tags">
                    {
                        CategoriesData.map(item => (
                            item.id !== 0 && (
                                <button type="button" key={item.id}>
                                    {item.title.toLowerCase()}
                                </button>
                            )
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default Sidebar;