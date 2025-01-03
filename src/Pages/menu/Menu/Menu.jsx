import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";



const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item  => item.category === "dessert")
    const soup = menu.filter(item  => item.category === "soup")
    const salad = menu.filter(item  => item.category === "salad")
    const pizza = menu.filter(item  => item.category === "pizza")
    const offered = menu.filter(item  => item.category === "offered")
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="today's offer"></SectionTitle>
            {/* offerd menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* salad menu item */}
            <MenuCategory
            items={salad}
            title="salads"
            img={saladImg}
            ></MenuCategory>
            {/* pizza menu item */}
            <MenuCategory
            items={pizza}
            title="pizza"
            img={pizzaImg}
            ></MenuCategory>
            {/* soup menu item */}
            <MenuCategory
            items={soup}
            title="soups"
            img={soupImg}
            ></MenuCategory>
            
            {/* dessert menu item */}
            <MenuCategory
            items={desserts}
            title="Desserts"
            img={dessertImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;