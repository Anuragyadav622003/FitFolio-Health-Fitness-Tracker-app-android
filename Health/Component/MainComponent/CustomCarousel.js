import React, { useState, useRef, useEffect } from 'react';
import { View, ScrollView, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CustomCarousel = ({ items, autoScrollInterval = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = (activeIndex + 1) % items.length;
      goToSlide(newIndex);
    }, autoScrollInterval);

    return () => clearInterval(intervalId);
  }, [activeIndex]);

  const handleScroll = (event) => {
    const slideWidth = Dimensions.get('window').width;
    const currentIndex = Math.round(event.nativeEvent.contentOffset.x / slideWidth);
    setActiveIndex(currentIndex);
  };

  const goToSlide = (index) => {
    scrollViewRef.current.scrollTo({
      x: index * Dimensions.get('window').width,
      animated: true,
    });
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        {items.map((item, index) => (
          <View key={index} style={styles.slide}>
            <Image source={{ uri: item.uri }} style={styles.image} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {items.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.paginationDot, activeIndex === index && styles.paginationDotActive]}
            onPress={() => goToSlide(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#888',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#fff',
  },
});

export default CustomCarousel;
