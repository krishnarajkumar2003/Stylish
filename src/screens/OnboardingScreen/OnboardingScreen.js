import { useCallback, useRef, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import On1 from "../../../assets/images/on_1.svg";
import On2 from "../../../assets/images/on_2.svg";
import On3 from "../../../assets/images/on_2.svg";

const { width } = Dimensions.get("window");

export const OnboardingScreen = ({navigation}) => {
    const [page, setPage] = useState(1);
    const flatRef = useRef(null);
    const slides = [
        {
            title: "Choose Products",
            description:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
            Img: <On1 width={300} height={300} />,
        },
        {
            title: "Make Payment",
            description:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
            Img: <On2 width={300} height={300} />,
        },
        {
            title: "Get Your Order",
            description:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
            Img: <On3 width={300} height={300} />,
        },
    ];

    const onClickNext = () => {
        if (page < slides.length) {
            flatRef.current?.scrollToIndex({
                index: page,
                animated:true
            });
        }else{
            navigation.replace("Login")
        }
    };

    const onClickPrev = () => {
        if (page > 1) {
            flatRef.current?.scrollToIndex({
                index: page - 2,
                animated:true
            });
        }
    };

    const onClickSkip = () => {
        navigation.replace("Login")
    }


    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{page}/3</Text>
                {page < slides.length && <Text onPress={onClickSkip} style={styles.headerText}>Skip</Text>}
            </View>

            <View style={styles.content}>
                <View style={styles.slides}>
                    <FlatList
                        ref={flatRef}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        data={slides}
                        keyExtractor={(_, index) => index.toString()}
                        onMomentumScrollEnd={(event) => {
                            const currentPage =
                                Math.round(event.nativeEvent.contentOffset.x / width) + 1;
                            setPage(currentPage);
                        }}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.slideItem}>
                                    {item.Img}
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.description}>{item.description}</Text>
                                </View>
                            );
                        }}
                    />
                </View>
                <View style={styles.bottomStyle}>
                    <Text onPress={onClickPrev} style={[styles.prev, page > 1 && { color: 'black' }]}>Prev</Text>
                    <View style={{ flexDirection: 'row', width: 80, justifyContent: 'space-between' }}>
                        {
                            slides.map((_, index) => (
                                <View
                                    key={index}
                                    style={[
                                        styles.inactiveInd,
                                        index + 1 === page && styles.activeInd,
                                    ]}
                                />
                            ))
                        }
                    </View>
                    <Text onPress={onClickNext} style={styles.next}>Next</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "#ffffff",
    },
    header: {
        width: "100%",
        height: 40,
        backgroundColor: "#ffffff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerText: {
        fontSize: 17,
        fontWeight: "500",
    },
    content: {
        flex: 1,
        justifyContent: 'space-between'
    },
    slides: {
        height: 430,
        width: '100%',
        marginTop: 110,
    },
    slideItem: {
        width: width - 40, // because screen has paddingHorizontal: 20
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 15,
        textAlign: "center",
    },
    description: {
        fontSize: 14,
        textAlign: "center",
        marginTop: 10,
        paddingHorizontal: 20,
        lineHeight: 24
    },
    bottomStyle: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    prev: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '500',
    },
    inactiveInd: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: 'black'
    },
    activeInd: {
        width: 40
    },
    next: {
        color: '#F83758',
        fontSize: 18,
        fontWeight: '500'
    }
});