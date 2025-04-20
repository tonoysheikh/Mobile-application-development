import { StyleSheet, Image, Platform , Pressable, Text } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

import { Link } from 'expo-router';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Mobile Application Project</ThemedText>
      </ThemedView>
      
      <Text style = {styles.text}>Stopwatch Project</Text>

      <Collapsible title="Real time stopwatch">
        <ThemedText>
          This app has two screens:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      

      <Link href = "/(stopwatch)/App" style = {{ marginHorizontal : 'auto'}} asChild>
        <Pressable style = {styles.button}>
            <Text style = {styles.buttontext}>RUN PROJECT</Text>  
          </Pressable>
      </Link>

      {/* calculator */}


      <Text style = {styles.text}>Calculator Project</Text>

      <Collapsible title="2 Theme calculator">
        <ThemedText>
          This app has two screens:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Link href = "/(calculator)/App" style = {{ marginHorizontal : 'auto'}} asChild>
        <Pressable style = {styles.button}>
            <Text style = {styles.buttontext}>RUN PROJECT</Text>  
          </Pressable>
      </Link>

      
      {/* To DO Project */}

      <Text style = {styles.text}>TO DO Project</Text>

      <Collapsible title="Add your Daily Rountine here">
        <ThemedText>
          This app has two screens:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Link href = "/(todo)/App" style = {{ marginHorizontal : 'auto'}} asChild>
        <Pressable style = {styles.button}>
            <Text style = {styles.buttontext}>RUN PROJECT</Text>  
          </Pressable>
      </Link>


      <Text style = {styles.text}>List View From API</Text>

      <Collapsible title="Add your Daily Rountine here">
        <ThemedText>
          This app has two screens:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Link href = "/(listview)/app" style = {{ marginHorizontal : 'auto'}} asChild>
        <Pressable style = {styles.button}>
            <Text style = {styles.buttontext}>RUN PROJECT</Text>  
          </Pressable>
      </Link>


      <Text style = {styles.text}>Calender</Text>

      <Collapsible title="Add your Daily Rountine here">
        <ThemedText>
          This app has two screens:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Link href = "/(calender)/app" style = {{ marginHorizontal : 'auto'}} asChild>
        <Pressable style = {styles.button}>
            <Text style = {styles.buttontext}>RUN PROJECT</Text>  
          </Pressable>
      </Link>

      <Text style = {styles.footer}>Project Owner : Salman Johir Tonoy</Text>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    fontSize: 25,
    color: 'aqua',
    fontWeight : 'bold',
    textAlign : 'center',
    backgroundColor :' rgba(68, 64, 64, 0.55)',
    paddingTop : 10,
    paddingBottom : 10,
    textDecorationLine : 'underline',
    padding : 4,
    marginTop : 20,
    color : 'white',
    borderRadius : 7,
    },
    buttontext:{
      color : 'white',
      paddingLeft : 10,
      paddingRight : 10,
    },
    text:{
      fontSize : 20,
      color : 'white',
      textAlign : 'center',
    },
    footer:{
      textAlign : 'center',
      fontStyle : 'italic',
      fontSize : 10,
      marginTop : 50,
      color : 'white',
    }
});
