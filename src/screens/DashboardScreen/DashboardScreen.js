import { FlatList, StyleSheet, View } from "react-native"
import { CustomInput } from "../../components/CustomInput"
import SearchIcon from "../../../assets/icons/search.svg"
import { ProductCard } from "../../components/ProductCard"
import Dress from "../../../assets/images/dress.svg"
import { useMemo, useRef, useState } from "react"
import {products} from '../../context/products'
export const DashboardScreen = ({ navigation }) => {


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

    }, [search, products]); // Note: If 'products' is still defined inside the component body,
    // remember to move it outside to avoid a hidden performance hit!

    const renderItem = ({ item }) => {
        return <ProductCard item={item} navigation={navigation} />
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