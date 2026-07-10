import { FlatList, StyleSheet, View } from "react-native"
import { CustomInput } from "../../components/CustomInput"
import SearchIcon from "../../../assets/icons/search.svg"
import { ProductCard } from "../../components/ProductCard"
import Dress from "../../../assets/images/dress.svg"
import { useMemo, useRef, useState } from "react"

export const DashboardScreen = () => {
    const products = {
        "products": [
            {
                "id": 1,
                "title": "Black Winter...",
                "description": "Autumn And Winter Casual cotton-padded jacket...",
                "price": 499,
                "currency": "INR",
                "rating": 4.2,
                "review_count": 6890,
                "image_url": <Dress />
            },
            {
                "id": 2,
                "title": "Mens Starry",
                "description": "Mens Starry Sky Printed Shirt 100% Cotton Fabric",
                "price": 399,
                "currency": "INR",
                "rating": 4.0,
                "review_count": 152344,
                "image_url": <Dress />
            },
            {
                "id": 3,
                "title": "Black Dress",
                "description": "Solid Black Dress for Women, Sexy Chain Shorts Ladi...",
                "price": 2000,
                "currency": "INR",
                "rating": 4.5,
                "review_count": 523456,
                "image_url": <Dress />
            },
            {
                "id": 4,
                "title": "Pink Embroide...",
                "description": "EARTHEN Rose Pink Embroidered Tiered Max...",
                "price": 1900,
                "currency": "INR",
                "rating": 4.1,
                "review_count": 45678,
                "image_url": <Dress />
            },
            {
                "id": 5,
                "title": "Flare Dress",
                "description": "Antheaa Black & Rust Orange Floral Print Tiered Midi F...",
                "price": 1990,
                "currency": "INR",
                "rating": 4.3,
                "review_count": 335566,
                "image_url": <Dress />
            },
            {
                "id": 6,
                "title": "denim dress",
                "description": "Blue cotton denim dress Look 2 Printed cotton dr...",
                "price": 999,
                "currency": "INR",
                "rating": 3.9,
                "review_count": 27344,
                "image_url": <Dress />
            },
            {
                "id": 7,
                "title": "Jordan Stay",
                "description": "The classic Air Jordan 12 to create a shoe that's fres...",
                "price": 4999,
                "currency": "INR",
                "rating": 3.4,
                "review_count": 1023456,
                "image_url": <Dress />
            },
            {
                "id": 8,
                "title": "Realme 7",
                "description": "6 GB RAM | 64 GB ROM | Expandable Upto 256...",
                "price": 3499,
                "currency": "INR",
                "rating": 4.1,
                "review_count": 344567,
                "image_url": <Dress />
            },
        ]
    }

    const [search, setSearch] = useState('')
    const searchRef = useRef(null);

    const filteredProducts = useMemo(() => {
        // 1. Grab the lowercase search string safely (handling empty space)
        const formattedSearch = search.trim().toLowerCase();

        // 2. If search is empty, return the flat array immediately
        if (!formattedSearch) {
            return products.products;
        }

        // 3. Filter using executed method calls () and .includes()
        return products.products.filter((item) => {
            const itemTitle = item.title.toLowerCase();
            const itemDesc = item.description.toLowerCase();

            return itemTitle.includes(formattedSearch) || itemDesc.includes(formattedSearch);
        });

    }, [search]); // Note: If 'products' is still defined inside the component body,
                // remember to move it outside to avoid a hidden performance hit!
 
    const renderItem = ({ item }) => {
        return <ProductCard item={item} />
    }

    const onChangeSearch = (value) => {
        setSearch(value)
    }

    return (
        <View style={styles.screen}>
            < CustomInput
                ref={searchRef}
                value={search}
                showLeftIcon
                leftIcon={<SearchIcon />}
                placeholder="Search any Product"
                onChangeText={onChangeSearch}
            />
            <FlatList
                data={filteredProducts}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                columnWrapperStyle={{
                    justifyContent: 'space-between'
                }}
                contentContainerStyle={{
                    marginTop: 20,
                    paddingBottom: 150
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: '#ffffff'
    }
})