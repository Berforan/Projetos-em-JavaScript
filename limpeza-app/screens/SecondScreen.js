import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Import icons
import { useNavigation } from "@react-navigation/native"; // Hook para navegação

export default function SecondScreen() {
  const navigation = useNavigation(); // Inicializando a navegação

  return (
    <View style={styles.container}>
      {/* Header with background image */}
      <ImageBackground
        source={{
          uri: "https://drive.google.com/uc?export=view&id=11FkubDvaax-RTBz5xRF_pHERvCP7Jjf0",
        }}
        style={styles.headerBackground}
        imageStyle={styles.headerImageStyle} // Additional styling for the background image
      >
        <View style={styles.header}>
          <Text style={styles.greeting}>Hi, Paulo 👋</Text>
          <Text style={styles.subGreeting}>Explore os serviços de Limpeza</Text>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <FontAwesome
              name="search"
              size={18}
              color="#888"
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Pesquisar servidores proximos"
              placeholderTextColor="#888"
              style={styles.searchInput}
            />
          </View>
        </View>
      </ImageBackground>

      {/* Main Content */}
      <ScrollView style={styles.mainContent}>
        {/* Popular Services */}
        <View style={styles.popularPlacesWrapper}>
          <Text style={styles.sectionTitle}>Popular Services</Text>
          <View style={styles.filterTabs}>
            <TouchableOpacity style={styles.filterTabActive}>
              <Text style={styles.filterTabTextActive}>Recommendations</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterTab}>
              <Text style={styles.filterTabText}>Recents</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.placesScroll}
          >
            {/* Card 1 */}
            <TouchableOpacity style={styles.placeCard}>
              <Image
                style={styles.placeCardImage}
                source={{
                  uri: "https://drive.google.com/file/d/13GFKVlABo6lDS16UyGN_PaB8lYVk9G0X/view?usp=sharing",
                }}
              />
              <View style={styles.placeInfo}>
                <Text style={styles.placeName}>Monique Ramos</Text>
                <Text style={styles.placeLocation}>
                  Região de Rio de janeiro, Rj
                </Text>
                <Text style={styles.placeRating}>4.9 ⭐ (18k)</Text>
              </View>
            </TouchableOpacity>

            {/* Card 2 */}
            <TouchableOpacity style={styles.placeCard}>
              <Image
                style={styles.placeCardImage}
                source={{
                  uri: "https://drive.google.com/uc?export=view&id=1xU0RoxNsCB6U7cA0cIEUnMu50BvdL9m2",
                }}
              />
              <View style={styles.placeInfo}>
                <Text style={styles.placeName}>Diego Salles</Text>
                <Text style={styles.placeLocation}>
                  Região de Rio de janeiro, Rj
                </Text>
                <Text style={styles.placeRating}>4.8 ⭐ (12k)</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.placeCard}>
              <Image
                style={styles.placeCardImage}
                source={{
                  uri: "https://drive.google.com/file/d/1o04r4XXIougH3ezn14W9g88P6R8payUW/view",
                }}
              />
              <View style={styles.placeInfo}>
                <Text style={styles.placeName}>Tereza Cristina Silveira</Text>
                <Text style={styles.placeLocation}>
                  Região de Campinas, São Paulo
                </Text>
                <Text style={styles.placeRating}>4.8 ⭐ (12k)</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.placeCard}>
              <Image
                style={styles.placeCardImage}
                source={{ uri: "https://drive.google.com/drive/u/0/home" }}
              />
              <View style={styles.placeInfo}>
                <Text style={styles.placeName}>Tereza Cristina Silveira</Text>
                <Text style={styles.placeLocation}>
                  Região de Campinas, São Paulo
                </Text>
                <Text style={styles.placeRating}>4.8 ⭐ (12k)</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>

          {/* Nearby Providers */}
          <Text style={styles.sectionTitle}>Servidores próximos</Text>
          <TouchableOpacity
            style={styles.nearbyProvider}
            onPress={() =>
              navigation.navigate("Profile", {
                name: "Monique Ramos",
                location: "Rio de janeiro, rj",
                distance: "1km",
                image:
                  "https://drive.google.com/file/d/13GFKVlABo6lDS16UyGN_PaB8lYVk9G0X/view?usp=sharing",
              })
            }
          >
            <Image
              style={styles.providerImage}
              source={{
                uri: "https://drive.google.com/file/d/13GFKVlABo6lDS16UyGN_PaB8lYVk9G0X/view?usp=sharing",
              }}
            />
            <View style={styles.providerInfo}>
              <Text style={styles.providerName}>Monique Ramos</Text>
              <Text style={styles.providerLocation}>
                📍 1km de distância - Rio de Janeiro, rj
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nearbyProvider}
            onPress={() =>
              navigation.navigate("Profile", {
                name: "Monique Souza",
                location: "Rio de Janeiro, Rj",
                distance: "1km",
                image:
                  "https://drive.google.com/file/d/13GFKVlABo6lDS16UyGN_PaB8lYVk9G0X/view?usp=sharing",
              })
            }
          >
            <Image
              style={styles.providerImage}
              source={{
                uri: "https://drive.google.com/file/d/13GFKVlABo6lDS16UyGN_PaB8lYVk9G0X/view?usp=sharing",
              }}
            />
            <View style={styles.providerInfo}>
              <Text style={styles.providerName}>Monique Ramos</Text>
              <Text style={styles.providerLocation}>
                📍 1km de distância - Rio de Janeiro, rj
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.nearbyProvider}
            onPress={() =>
              navigation.navigate("Profile", {
                name: "Monique Ramos",
                location: "Rio de Janeiro, rj",
                distance: "1km",
                image:
                  "https://drive.google.com/file/d/13GFKVlABo6lDS16UyGN_PaB8lYVk9G0X/view?usp=sharing",
              })
            }
          >
            <Image
              style={styles.providerImage}
              source={{
                uri: "https://drive.google.com/file/d/13GFKVlABo6lDS16UyGN_PaB8lYVk9G0X/view?usp=sharing",
              }}
            />
            <View style={styles.providerInfo}>
              <Text style={styles.providerName}>Monique Ramos</Text>
              <Text style={styles.providerLocation}>
                📍 1km de distância - Rio de Janeiro, rj
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <FontAwesome name="home" size={24} color="#4285F4" />
        <FontAwesome name="search" size={24} color="#888" />
        <FontAwesome name="map-marker" size={24} color="#888" />
        <FontAwesome name="user" size={24} color="#888" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  headerBackground: {
    width: "100%",
    height: 250, // Adjust based on how much background you want to show
  },
  headerImageStyle: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  header: {
    padding: 40,
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Slightly transparent to see the background image
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    top: 30,
  },
  subGreeting: {
    fontSize: 16,
    color: "#777",
    marginVertical: 5,
    top: 27,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 15,
    top: 22,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: "#333",
  },
  mainContent: {
    paddingHorizontal: 20,
  },
  popularPlacesWrapper: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  filterTabs: {
    flexDirection: "row",
    marginBottom: 20,
  },
  filterTab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#f1f1f1",
    borderRadius: 20,
    marginRight: 10,
  },
  filterTabActive: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#4285F4",
    borderRadius: 20,
    marginRight: 10,
  },
  filterTabText: {
    color: "#333",
  },
  filterTabTextActive: {
    color: "#fff",
    fontWeight: "bold",
  },
  placesScroll: {
    paddingVertical: 10,
  },
  placeCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginRight: 20,
    width: 160,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 12,
  },
  placeCardImage: {
    width: "100%",
    height: 140,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  placeInfo: {
    padding: 10,
  },
  placeName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  placeLocation: {
    fontSize: 12,
    color: "#777",
    marginVertical: 5,
  },
  placeRating: {
    fontSize: 12,
    color: "#555",
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  nearbyProvider: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    padding: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
  },
  providerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  providerInfo: {
    marginLeft: 15,
  },
  providerName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  providerLocation: {
    fontSize: 12,
    color: "#777",
  },
});
