import React, { useState } from 'react';

const AddCategory = () => {
    const [categoryName, setCategoryName] = useState("");
    const handleInputChange = (event) => {
        setCategoryName(event.target.value);
    };
    const handleAddCategory = async () => {
        try {
            const category = { name: categoryName };
            const addedCategory = await AddCategory(category);

            // backenddan qaytgan ma'lumotlar bilan kerakli ishlarni bajaring
            console.log('Qoshilgan kategoriya:', addedCategory);

            // Kerakli bo'lsa, state'ni tozalaymiz
            setCategoryName('');
        } catch (error) {
            console.error('Xatolik:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={categoryName}
                onChange={handleInputChange}
                placeholder="Category nomi"
            />
            <button onClick={handleAddCategory}>Qo'shish</button>
        </div>
    );
}