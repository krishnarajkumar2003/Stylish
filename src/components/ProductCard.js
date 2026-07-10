import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
// 16 padding on both sides of the screen = 32. 18 representing the gap between items.
const CARD_WIDTH = (width - 50) / 2;

export const ProductCard = ({ item }) => {
    return (
        <TouchableOpacity style={styles.card}>
            {/* 
               We pass width and height directly to the SVG component (or wrapper) 
               to ensure it fills out the top half of the card smoothly.
            */}
            <View style={styles.imageContainer}>
                {item.image_url}
            </View>
            <View style={styles.info}>
                <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
                <Text style={styles.price}>₹{item.price.toLocaleString('en-IN')}</Text>

                <View style={styles.ratingRow}>
                    <Text style={styles.stars}>{"★".repeat(Math.floor(item.rating))}</Text>
                    <Text style={styles.reviews}>({item.review_count.toLocaleString('en-IN')})</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

// Merged into a single, clean style definition
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        width: CARD_WIDTH,
        borderRadius: 12,
        marginBottom: 16,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#d6d6d6',
        shadowColor: 'black',
        shadowOffset: 0.5
    },
    imageContainer: {
        width: '100%',
        height: 170,
        backgroundColor: '#f9f9f9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        padding: 8,
    },
    title: {
        fontSize: 14,
        fontWeight: '700',
        color: '#000',
    },
    description: {
        fontSize: 11,
        color: '#666',
        marginVertical: 4,
    },
    price: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#000',
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    stars: {
        color: '#FFB300',
        fontSize: 12,
    },
    reviews: {
        fontSize: 10,
        color: '#999',
        marginLeft: 4,
    }
});