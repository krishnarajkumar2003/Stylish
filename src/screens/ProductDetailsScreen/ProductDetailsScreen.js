import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CustomButton } from "../../components/CustomButton"; // Update the path if needed
import { products } from "../../context/products"
export const ProductDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const ImageComponent = item.image_url;

  const [selectedSize, setSelectedSize] = useState(0);
  const [quantity, setQuantity] = useState(1); // Added quantity state

  const handleIncrement = () => {
    if (quantity < item.maxQuantity)
      setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const onClickOrderNow = () => {
    // 1. Map through and create your updated list
    const updatedData = products?.products?.map((prod) => {
      if (prod.id === item.id) {
        return {
          ...prod,
          quantity: quantity,
          selectedSize: item.sizes[selectedSize] || null,
        };
      }
      return prod;
    });

    // 2. Clear the old array and push the new data inside safely
    products.products = updatedData;

    // 3. Forward the customized item to the next screen
    navigation.navigate("ShoppingBag", {
      item: {
        ...item,
        quantity,
        selectedSize: item.sizes[selectedSize] || null
      }
    });
  };

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Product Image */}
        <View style={styles.image}>
          <ImageComponent width="100%" height="100%" />
        </View>

        {/* Sizes */}
        {item.sizes.length > 0 && (
          <>
            <Text style={styles.sectionLabel}>
              Size: {item.sizes[selectedSize]}
            </Text>

            <View style={{ height: 70 }}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.sizeContainer}
              >
                {item.sizes.map((size, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setSelectedSize(index)}
                    style={[
                      styles.sizeBox,
                      index === selectedSize && styles.selectedSize,
                    ]}
                  >
                    <Text
                      style={[
                        styles.sizeText,
                        index === selectedSize && styles.selectedSizeText,
                      ]}
                    >
                      {size}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </>
        )}

        {/* Quantity Selector */}
        <Text style={styles.sectionLabel}>Quantity</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={handleDecrement}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.quantityText}>{quantity}</Text>

          <TouchableOpacity
            style={styles.quantityButton}
            onPress={handleIncrement}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Title */}
        <Text style={styles.title}>{item.title}</Text>

        {/* Short Description */}
        <Text style={styles.description}>{item.description}</Text>

        {/* Rating */}
        <View style={styles.ratingContainer}>
          <View style={styles.ratingBadge}>
            <Text style={styles.ratingText}>★ {item.rating}</Text>
          </View>

          <Text style={styles.reviewText}>
            ({item.review_count.toLocaleString()} Reviews)
          </Text>
        </View>

        {/* Price */}
        <View style={styles.priceContainer}>
          <Text style={styles.price}>₹{item.price}</Text>

          <Text style={styles.offer}>
            {item.offer_percentage}% OFF
          </Text>
        </View>

        {/* Details */}
        <Text style={styles.detailsTitle}>Product Details</Text>

        <Text style={styles.details}>{item.details}</Text>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.buttonContainer}>
        <CustomButton
          style={[styles.button, styles.cartButton]}
          onPress={() => console.log("Add to Cart", { item, quantity })}
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </CustomButton>

        <CustomButton
          style={styles.button}
          onPress={onClickOrderNow}
        >
          <Text style={styles.buttonText}>Order Now</Text>
        </CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  image: {
    width: "100%",
    height: 235,
  },

  sectionLabel: {
    fontSize: 17,
    fontWeight: "600",
    marginTop: 18,
  },

  sizeContainer: {
    marginTop: 12,
    paddingRight: 16,
  },

  sizeBox: {
    width: 80,
    height: 50,
    borderWidth: 1,
    borderColor: "#F83758",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  selectedSize: {
    backgroundColor: "#F83758",
  },

  sizeText: {
    fontSize: 15,
    color: "#000",
  },

  selectedSizeText: {
    color: "#fff",
    fontWeight: "600",
  },

  /* Added Quantity Styles */
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },

  quantityButton: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },

  quantityButtonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
  },

  quantityText: {
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 20,
    minWidth: 20,
    textAlign: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 20,
  },

  description: {
    fontSize: 15,
    color: "#666",
    marginTop: 6,
    lineHeight: 22,
  },

  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
  },

  ratingBadge: {
    backgroundColor: "#0F9D58",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  ratingText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },

  reviewText: {
    marginLeft: 10,
    color: "#666",
    fontSize: 14,
  },

  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },

  price: {
    fontSize: 28,
    fontWeight: "700",
  },

  offer: {
    marginLeft: 12,
    fontSize: 16,
    color: "#F83758",
    fontWeight: "700",
  },

  detailsTitle: {
    marginTop: 24,
    fontSize: 20,
    fontWeight: "700",
  },

  details: {
    marginTop: 10,
    fontSize: 15,
    color: "#555",
    lineHeight: 24,
  },

  buttonContainer: {
    flexDirection: "row",
    paddingVertical: 16,
    backgroundColor: "#fff",
    gap: 12,
  },

  button: {
    flex: 1,
  },

  cartButton: {
    backgroundColor: "#333",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});