export async function Data() {
    const allCategory = await fetch("https://dummyjson.com/products/categories");
    return allCategory.json();
}