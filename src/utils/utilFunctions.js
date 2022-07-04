export const selectByTag = (products, tag) => {
    const selectedItems = products.filter(product => product.product_tags.includes(tag))
    return selectedItems;
} 

export const addToCart = () =>{}

export const removeFromCart = () => {}