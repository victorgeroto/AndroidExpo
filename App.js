import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image} from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Image style={styles.container}
      source={{uri:'https://s2-oglobo.glbimg.com/E9rUUSOT9EDtx6jdsGBwdaOqkKs=/0x0:3750x2500/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/H/C/HVutfGRsiDk43DOplXsw/104235162-brazils-forward-neymar-celebrates-after-scoring-a-goal-during-the-2026-fifa-world-cup.jpg'}}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#00F',
    alignItems: 'center',
    justifyContent: 'center',
   },
});
