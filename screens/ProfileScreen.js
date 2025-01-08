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
  Animated,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Import icons
import { useNavigation } from "@react-navigation/native"; // Hook para navegação
import { BlurView } from "expo-blur"; // Para o efeito de vidro no card

export default function ProfileScreen() {
  const navigation = useNavigation(); // Inicializando a navegação
  const scaleValue = new Animated.Value(1); // Animação de escala para os cards

  // Função para efeito ao pressionar o card (efeito de escala)
  const onPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95, // Reduz ligeiramente o tamanho do card ao pressionar
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1, // Volta ao tamanho original ao soltar
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* Header com imagem de fundo */}
      <ImageBackground
        source={{
          uri: "https://drive.google.com/uc?export=view&id=11FkubDvaax-RTBz5xRF_pHERvCP7Jjf0",
        }}
        style={styles.headerBackground} // Estilização do fundo do header
        imageStyle={styles.headerImageStyle} // Estilização da imagem de fundo
      >
        <View style={styles.header}>
          <Text style={styles.greeting}>Hi, Paulo 👋</Text>
          <Text style={styles.subGreeting}>Explore os serviços de Limpeza</Text>

          {/* Barra de Pesquisa */}
          <View style={styles.searchContainer}>
            <FontAwesome
              name="search"
              size={18}
              color="#888"
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Pesquisar servidores próximos"
              placeholderTextColor="#888"
              style={styles.searchInput}
            />
          </View>
        </View>
      </ImageBackground>

      {/* Conteúdo Principal */}
      <ScrollView style={styles.mainContent}>
        {/* Seção de Serviços Populares */}
        <View style={styles.popularPlacesWrapper}>
          <Text style={styles.sectionTitle}>Perfil do Serviço</Text>

          {/* Card Único com Animação e Efeito */}
          <TouchableOpacity
            style={styles.placeCard}
            activeOpacity={0.9} // Transparência ao clicar
            onPressIn={onPressIn} // Função de escala ao pressionar
            onPressOut={onPressOut} // Função de voltar ao normal ao soltar
          >
            <Animated.View
              style={[styles.card, { transform: [{ scale: scaleValue }] }]}
            >
              <Image
                style={styles.placeCardImage} // Estilo da imagem dentro do card
                source={{
                  uri: "https://drive.google.com/file/d/13GFKVlABo6lDS16UyGN_PaB8lYVk9G0X/view?usp=sharing",
                }}
              />
              <View style={styles.placeInfo}>
                <Text style={styles.placeName}>Nome: Monique Ramos</Text>
                <Text style={styles.placeDetail}>Idade: 35</Text>
                <Text style={styles.placeDetail}>
                  Experiências: Atuante há 5 anos com serviços de limpeza
                </Text>
                <Text style={styles.placeLocation}>
                  Região de Rio de janeiro, Rj
                </Text>
                <Text style={styles.placeRating}>
                  4.9 <FontAwesome name="star" size={14} color="#FFD700" />{" "}
                  (18k)
                </Text>
              </View>
            </Animated.View>
          </TouchableOpacity>
        </View>

        {/* Serviços Disponíveis */}
        <View style={styles.serviceDetails}>
          <Text style={styles.sectionTitleServ}>Serviços Disponíveis</Text>

          {/* Navegação para a página de pagamento Standard */}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("CheckStand", {
                servant: {
                  name: "Monique Ramos",
                  age: 32,
                  experience: "Atuante a  5 anos com serviços de limpeza",
                  region: "Região de Rio de janeiro, Rj",
                  rating: 4.9,
                  reviews: "18k",
                  image:
                    "https://drive.google.com/file/d/13GFKVlABo6lDS16UyGN_PaB8lYVk9G0X/view?usp=sharing",
                },
              })
            }
          >
            <View style={styles.serviceCardWrapper}>
              <ImageBackground
                source={{
                  uri: "https://drive.google.com/uc?export=view&id=1wpHf0wiJsFksN8t7cE5UP9oV5Oy89Cxg",
                }}
                style={styles.serviceCardBackground} // Estilização da imagem de fundo do card Standard
                imageStyle={styles.cardImageStyle} // Estilização da imagem (borda arredondada)
              >
                <View style={styles.serviceCardContent}>
                  <Text style={styles.serviceType}>Standard Service</Text>
                  <Text style={styles.serviceDescription}>
                    Inclui: Limpeza básica residencial e organização de espaços.
                    Ideal para limpezas regulares.
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          {/* Navegação para a página de pagamento Premium */}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("CheckPrem", {
                servant: {
                  name: "Diego Salles",
                  age: 32,
                  experience: "Atuante a 10 anos com serviços de limpeza",
                  region: "Região de Rio de janeiro, Rj",
                  rating: 4.9,
                  reviews: "18k",
                  image:
                    "https://drive.google.com/file/d/1o04r4XXIougH3ezn14W9g88P6R8payUW/view?usp=sharing",
                },
              })
            }
          >
            <View style={styles.serviceCardWrapper}>
              <ImageBackground
                source={{
                  uri: "https://drive.google.com/uc?export=view&id=1pCNd_eLmcrzB5lKQotrHBU1_UAYw8c8u",
                }}
                style={styles.serviceCardBackground} // Estilização da imagem de fundo do card Premium
                imageStyle={styles.cardImageStyle} // Estilização da imagem (borda arredondada)
              >
                <View style={styles.serviceCardContent}>
                  <Text style={styles.serviceType}>Premium Service</Text>
                  <Text style={styles.serviceDescription}>
                    Inclui: Limpeza completa, higienização e organização. Ideal
                    para grandes espaços ou limpeza pós-obra.
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>

        {/* Card para Mensagem de Segurança */}
        <View style={styles.securityCardWrapper}>
          <BlurView intensity={50} tint="light" style={styles.securityCard}>
            <FontAwesome name="shield" size={24} color="#fff" />
            <View style={styles.securityTextWrapper}>
              <Text style={styles.securityTitle}>
                Cuide da sua casa com Segurança
              </Text>
              <Text style={styles.securityText}>
                A Clean preza pela responsabilidade com cada cliente. Garantimos
                total segurança e qualidade nos nossos serviços. Nossas
                profissionais são altamente qualificadas e garantem um serviço
                100% completo.
              </Text>
            </View>
          </BlurView>
        </View>

        {/* Espaço em branco de 30px */}
        <View style={styles.bottomSpace} />
      </ScrollView>

      {/* Navegação Inferior */}
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
    flex: 1, // Ocupa a tela inteira
    backgroundColor: "#f7f7f7", // Cor de fundo cinza claro
  },
  headerBackground: {
    width: "100%", // Largura completa da tela
    height: 250, // Altura do header
  },
  headerImageStyle: {
    borderBottomLeftRadius: 30, // Arredonda a borda inferior esquerda
    borderBottomRightRadius: 30, // Arredonda a borda inferior direita
    opacity: 0.9, // Torna a imagem ligeiramente transparente
  },
  header: {
    paddingTop: 50, // Espaço no topo
    paddingHorizontal: 20, // Espaçamento horizontal
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Sobreposição escura sobre a imagem de fundo
    flex: 1,
    justifyContent: "center", // Centraliza o conteúdo verticalmente
  },
  greeting: {
    fontSize: 24, // Tamanho da fonte
    fontWeight: "bold", // Negrito
    color: "#fff", // Cor branca
  },
  subGreeting: {
    fontSize: 16, // Tamanho menor para o subtítulo
    color: "#ddd", // Cinza claro
    marginVertical: 10, // Margem vertical
  },
  searchContainer: {
    flexDirection: "row", // Alinha os elementos na horizontal
    alignItems: "center", // Alinha verticalmente
    backgroundColor: "#fff", // Fundo branco
    borderRadius: 10, // Borda arredondada
    paddingHorizontal: 10, // Espaçamento interno
    marginTop: 15, // Margem superior
  },
  searchIcon: {
    marginRight: 10, // Margem entre o ícone e o campo de pesquisa
  },
  searchInput: {
    flex: 1, // Ocupar todo o espaço restante
    height: 40, // Altura do campo de texto
    color: "#333", // Cor do texto
  },
  mainContent: {
    paddingHorizontal: 20, // Espaçamento horizontal
    paddingTop: 20, // Espaçamento no topo
  },
  popularPlacesWrapper: {
    marginTop: 20, // Espaço acima da seção
  },
  sectionTitle: {
    fontSize: 20, // Tamanho da fonte
    fontWeight: "bold", // Negrito
    color: "#333", // Cor do texto
    marginBottom: 20, // Espaço abaixo do título
  },
  placeCard: {
    backgroundColor: "#fff", // Fundo branco
    borderRadius: 20, // Bordas arredondadas
    shadowColor: "#000", // Cor da sombra
    shadowOpacity: 0.2, // Opacidade da sombra
    shadowOffset: { width: 0, height: 3 }, // Posição da sombra
    shadowRadius: 8, // Raio da sombra
    elevation: 12, // Elevação para dar profundidade (no Android)
  },
  card: {
    overflow: "hidden", // Esconde o conteúdo que ultrapassa as bordas arredondadas
    borderRadius: 20, // Bordas arredondadas
  },
  placeCardImage: {
    width: "100%", // Largura total do card
    height: 250, // Altura da imagem
    borderTopLeftRadius: 20, // Borda superior esquerda arredondada
    borderTopRightRadius: 20, // Borda superior direita arredondada
    resizeMode: "cover", // Cobre o espaço mantendo a proporção
  },
  placeInfo: {
    padding: 15, // Espaçamento interno
  },
  placeName: {
    fontSize: 18, // Tamanho da fonte
    fontWeight: "bold", // Negrito
    color: "#333", // Cor do texto
  },
  placeDetail: {
    fontSize: 14, // Tamanho do texto
    color: "#555", // Cor do texto (cinza mais claro)
  },
  placeLocation: {
    fontSize: 14, // Tamanho do texto
    color: "#777", // Cinza mais claro
    marginVertical: 5, // Margem vertical
  },
  placeRating: {
    fontSize: 14, // Tamanho do texto
    color: "#555", // Cor do texto
  },
  serviceDetails: {
    marginTop: 30, // Espaçamento superior
    paddingHorizontal: 10, // Espaçamento interno horizontal
  },
  sectionTitleServ: {
    fontSize: 18, // Tamanho da fonte
    fontWeight: "bold", // Negrito
    color: "#333", // Cor do texto
    marginVertical: 15, // Espaço acima e abaixo
  },
  serviceCardWrapper: {
    position: "relative", // Define a posição relativa para o card
    marginBottom: 20, // Espaço abaixo do card
    borderRadius: 20, // Bordas arredondadas
    overflow: "hidden", // Para garantir que o conteúdo não ultrapasse o card
  },
  serviceCardBackground: {
    width: "100%", // Largura total do card
    height: 130, // Altura reduzida dos cards
  },
  cardImageStyle: {
    borderRadius: 20, // Borda arredondada
    opacity: 0.5, // Opacidade da imagem de fundo
  },
  serviceCardContent: {
    alignItems: "center", // Centraliza o conteúdo
    padding: 20, // Espaçamento interno
  },
  serviceType: {
    fontSize: 18, // Tamanho da fonte
    fontWeight: "bold", // Negrito
    color: "#333", // Cor do texto
    marginBottom: 10, // Espaçamento inferior
  },
  serviceDescription: {
    fontSize: 14, // Tamanho do texto
    color: "#777", // Cor cinza
    textAlign: "center", // Texto centralizado
    marginBottom: 10, // Espaçamento inferior
  },
  securityCardWrapper: {
    borderRadius: 15, // Bordas arredondadas
    overflow: "hidden", // Garante que o efeito Blur não ultrapasse o card
    marginVertical: 20, // Espaçamento vertical
  },
  securityCard: {
    padding: 20, // Espaçamento interno
    flexDirection: "row", // Alinha o ícone e o texto horizontalmente
    alignItems: "center", // Centraliza os itens verticalmente
  },
  securityTextWrapper: {
    marginLeft: 15, // Espaçamento entre o ícone e o texto
    flex: 1, // O texto ocupa o espaço restante
  },
  securityTitle: {
    fontSize: 18, // Tamanho da fonte
    fontWeight: "bold", // Negrito
    color: "#fff", // Cor do texto
    marginBottom: 10, // Espaçamento inferior
  },
  securityText: {
    fontSize: 14, // Tamanho do texto
    color: "#fff", // Cor branca
  },
  bottomSpace: {
    height: 100, // Espaço em branco de 100px
  },
  bottomNavigation: {
    flexDirection: "row", // Alinha os ícones horizontalmente
    justifyContent: "space-around", // Distribui os ícones igualmente
    padding: 15, // Espaçamento interno
    backgroundColor: "#fff", // Fundo branco
    borderTopWidth: 1, // Borda superior
    borderTopColor: "#ddd", // Cor da borda
    position: "absolute", // Fixa na parte inferior
    bottom: 0, // Posiciona na parte inferior da tela
    width: "100%", // Largura total da tela
  },
});
