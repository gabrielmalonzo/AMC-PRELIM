import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, Linking } from 'react-native';

export default function App() {
  const [currentPage, setCurrentPage] = useState('HomePage');

  const handleTogglePage = () => {
    setCurrentPage(currentPage === 'HomePage' ? 'AboutPage' : currentPage === 'AboutPage' ? 'ThirdPage' : 'HomePage');
  };

  // HomePage component
  const HomePage = ({ onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', flex: 1 }}>
        <Image source={require('./assets/gab.jpg')} style={{ width: 200, height: 200, borderRadius: 130 }} />
        <Text style={{ marginTop: 10, fontSize: 22, fontFamily: "Luckiest Guy", color: 'white', textAlign: 'center' }}>GABRIEL B. MALONZO</Text>
      </View>
    </TouchableOpacity>
  );

  // AboutPage component
  const AboutPage = ({ onPress }) => {
    const aboutText = (
      <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', flex: 1 }}>
        <Text style={{ fontSize: 30, fontFamily: "Luckiest Guy", color: 'white', textAlign: 'center' }}>ABOUT ME</Text>
        <Text style={{ fontSize: 20, fontFamily: "Luckiest Guy", textAlign: 'center', lineHeight: 25, color: 'white' }}>
          I am Gabriel Malonzo, 21 years old, was born on April 26, 2022. I am from Caloocan City, currently studying Bachelor of Science in Information Technology at Global Reciprocal Colleges.
        </Text>
      </View>
    );

    return (
      <TouchableOpacity onPress={onPress} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {aboutText}
      </TouchableOpacity>
    );
  };

  // ThirdPage component
  const ThirdPage = ({ onPress }) => {
    const projectDescription = (
      <Text style={{ fontSize: 16, textAlign: 'center', lineHeight: 20, fontFamily: "Luckiest Guy", color: 'white' }}>
        THIS IS MY FIRST PROJECT IN PROGRAMMING. IT WAS JUST A LIGHT SWITCH ON AND OFF. YOU CAN SCAN THIS TO CHECK MY PROJECT.
      </Text>
    );

    const thankYouText = (
      <Text style={{ fontSize: 20, textAlign: 'center', lineHeight: 24, fontFamily: "Luckiest Guy", color: 'white' }}>THANK YOU.</Text>
    );

    return (
      <TouchableOpacity onPress={onPress} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
        {projectDescription}
        <Image source={require('./assets/PROJECT.jpg')} style={{ width: 200, height: 200 }} />
        {thankYouText}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      {currentPage === 'HomePage' ? (
        <HomePage onPress={handleTogglePage} />
      ) : currentPage === 'AboutPage' ? (
        <AboutPage onPress={handleTogglePage} />
      ) : (
        <ThirdPage onPress={handleTogglePage} />
      )}
    </View>
  );
}
