import { Text, View, Image, ScrollView } from "react-native";

const userData = [
  {
    name: "Darryl Kurniawan",
    id: "00000078767",
    photo_url:
      "https://instagram.fcgk3-4.fna.fbcdn.net/v/t51.2885-19/411993739_1569665653776388_8520184258473762665_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fcgk3-4.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2AGFEsS2cMZmDlvjpw0cQTCrgxcerosbYuyd2bBbiqRCX3GwqZNE2B5IiymhfA4Ly74e1zoo7JLQ9JSVdiMGQ_-z&_nc_ohc=-kw5SaVupFUQ7kNvgEBEIl_&_nc_gid=6fb92f595cba4a4ea9a8a2da8ac84580&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYDpA4iJynsi63bbLz7KPu7_DmMbG533Zxv8CEczLCJ1UQ&oe=67B48D7D&_nc_sid=7a9f4b",
  },
  {
    name: "KAngel",
    id: "00000012345",
    photo_url:
      "https://i.pinimg.com/474x/f3/bf/7b/f3bf7bf53f38592914de40728dd9b818.jpg",
  },
  {
    name: "Ame",
    id: "00000098765",
    photo_url:
      "https://i.pinimg.com/474x/91/99/9f/91999f126c337f84d6851929d7b7c5e1.jpg",
  },
  {
    name: "Aimyon",
    id: "00000054321",
    photo_url:
      "https://cdn-images.dzcdn.net/images/artist/a0baf8c7f1c6f1bfeb756b2fd93ff063/1900x1900-000000-80-0-0.jpg",
  },
  {
    name: "Ano",
    id: "00000056789",
    photo_url:
      "https://static.wikia.nocookie.net/jpop/images/0/03/Ano_-_Iinazukkyun.jpg/revision/latest?cb=20241013131606",
  },
  {
    name: "Ayaka Ohashi",
    id: "00000077777",
    photo_url:
      "https://i.namu.wiki/i/m_G5P4K_403mBa0J_BLAho8josNic3gb_WJvcDJH577ZZWwMwPTgVvAiSoe-TYNUQ4W2q0mxXL0e_y3FSTl-uA.webp",
  },
  {
    name: "Michael Willis",
    id: "00000069696",
    photo_url:
      "https://assets.mycast.io/actor_images/actor-loveandlighttv-1024371_large.jpg?1710579885",
  },
];

export default function App() {
  return (
    <ScrollView>
      {userData.map((user) => (
        <View style={styles.container} key={user.id}>
          <View style={styles.card}>
            <Image source={{ uri: user.photo_url }} style={styles.avatar} />
            <View style={styles.description}>
              <Text style={styles.boldText}>{user.name}</Text>
              <Text>{user.id}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = {
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    display: "flex",
  },
  card: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    width: 325,
    gap: 8,
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 999,
  },
  boldText: {
    fontWeight: "bold",
  },
  description: {
    width: "fit-content",
    display: "flex",
    gap: 2,
  },
};
