const CategoryPage = ({params}) => {
    return (
        <div>
            <h1>Category Name : {params.slug}</h1>
        </div>
    )
}

export default CategoryPage;