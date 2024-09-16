import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { Button, Image, StyleSheet, Text, View } from "react-native";
import ReactNativeBlobUtil from 'react-native-blob-util';

const pinataJWT = process.env.EXPO_PUBLIC_PINATA_JWT;

const AvatarPicker = () => {
  const [hash, setHash] = useState("");

  const uploadIPFS = async (file) => {
    try {
      const auth = `Bearer ${pinataJWT}`;
      
      const response = await ReactNativeBlobUtil.fetch("POST", "https://api.pinata.cloud/pinning/pinFileToIPFS", {
        Authorization: auth,
        "Content-Type": "multipart/form-data",
      }, [{ name: 'file', filename: file.fileName, type: file.mimeType, data: ReactNativeBlobUtil.wrap(file.uri) }]);
      
      const res = await response.json();
      setHash(res.IpfsHash);
    } catch (e) {
      console.log("Pinata request error => ", e);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 0.1,
    });

    if (!result.canceled) {
      try {
        await uploadIPFS(result.assets[0]);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <View style={styles.container}>
      {!hash ?
        <>
          {/* <Button title="Upload JSON" onPress={uploadText} /> */}
          <Button title="Upload image from camera roll" onPress={pickImage} />
        </>
        :
        <>
          <Text>{hash}</Text>
          {/* <Button title="Fetch Content" onPress={() => fetchIPFS()} /> */}
          <Button title="Clear" onPress={() => setContent({ hash: null, contentType: null })} />
        </>}
      {hash && <Image source={{ uri: `https://ipfs.io/ipfs/${hash}` }} style={styles.image} />}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default AvatarPicker;
