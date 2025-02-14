import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://instagram.fcgk3-4.fna.fbcdn.net/v/t51.2885-19/411993739_1569665653776388_8520184258473762665_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fcgk3-4.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2AGFEsS2cMZmDlvjpw0cQTCrgxcerosbYuyd2bBbiqRCX3GwqZNE2B5IiymhfA4Ly74e1zoo7JLQ9JSVdiMGQ_-z&_nc_ohc=-kw5SaVupFUQ7kNvgEBEIl_&_nc_gid=6fb92f595cba4a4ea9a8a2da8ac84580&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYDpA4iJynsi63bbLz7KPu7_DmMbG533Zxv8CEczLCJ1UQ&oe=67B48D7D&_nc_sid=7a9f4b",
            }}
            style={styles.image}
          />
          <Text style={styles.text}>{"Darryl Kurniawan\n00000078767"}</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{
              uri: "https://i.pinimg.com/474x/f3/bf/7b/f3bf7bf53f38592914de40728dd9b818.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.text}>{"KAngel\n00000012345"}</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{
              uri: "https://i.pinimg.com/474x/91/99/9f/91999f126c337f84d6851929d7b7c5e1.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.text}>{"Ame\n00000098765"}</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{
              uri: "https://cdn-images.dzcdn.net/images/artist/a0baf8c7f1c6f1bfeb756b2fd93ff063/1900x1900-000000-80-0-0.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.text}>{"Aimyon\n00000054321"}</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{
              uri: "https://static.wikia.nocookie.net/jpop/images/0/03/Ano_-_Iinazukkyun.jpg/revision/latest?cb=20241013131606",
            }}
            style={styles.image}
          />
          <Text style={styles.text}>{"Ano\n00000056789"}</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{
              uri: "https://i.namu.wiki/i/m_G5P4K_403mBa0J_BLAho8josNic3gb_WJvcDJH577ZZWwMwPTgVvAiSoe-TYNUQ4W2q0mxXL0e_y3FSTl-uA.webp",
            }}
            style={styles.image}
          />
          <Text style={styles.text}>{"Ayaka Ohashi\n00000077777"}</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{
              uri: "https://assets.mycast.io/actor_images/actor-loveandlighttv-1024371_large.jpg?1710579885",
            }}
            style={styles.image}
          />
          <Text style={styles.text}>{"Michael Willis\n00000069696"}</Text>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  card: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
});
