import { VideoView, useVideoPlayer } from 'expo-video';
import { Button, ScrollView, View } from 'react-native';

const videoUrl = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function RootLayout() {
  const player = useVideoPlayer(videoUrl, (player) => {
    player.loop = false;
    player.muted = false;
  });

  return (
      <ScrollView>
      <View>
        <VideoView
          player={player}
          style={{ width: 320, backgroundColor: 'black', aspectRatio: 16 / 9 }}
          playsInline={true}
          nativeControls={false}
        />
        
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10, gap: 10 }}>
          <Button
            title="Play"
            onPress={() => {
              player.play();
            }}
          />
          <Button
            title="Pause"
            onPress={() => {
              player.pause();
            }}
          />
        </View>
      </View>
      </ScrollView>
  );
}