function Category(){
    const category = ['men-fashion-category','women-fashion-category','tws-earbuds-category','smart-watch-category','furniture-category'];
    return(

        <div className="w-screen h-auto  flex flex-col justify-around items-center py-1 md:py-3 lg:py-10  px-1 gap-10">
            <div className="text-xl md:text-3xl font-bold">Category</div>
            <div className="w-90p h-90p  flex flex-row justify-around items-center ">
                {category.map((category, index) => (
                        <div key={index} className="w-18p h-90p relative"><img src={`../../public/category/${category}.png`} alt="" className="w-full h-full object-contain"/><div className="font-tcoctober tracking-wider md:whitespace-nowrap lg:whitespace-nowrap text-xs md:text-lg lg:text-2xl absolute top-1/4 -translate-y-1/4 left-1/2 -translate-x-1/2">{category.split('-').slice(0, -1).join(" ")}</div></div>

            ))}
            </div>
        </div>
    )
}
export default Category;