import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
// import { Container } from './styles';

function Inicial() {

    const navigation = useNavigation();

    const [image, setImage] = useState(null);
    const [previewer, setPreviwer] = useState(null);

    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);

    useEffect(() => {
        Geolocation.getCurrentPosition(
            info => {
                setLat(info.coords.latitude);
                setLng(info.coords.longitude);
                console.log(info.coords.latitude + "  " + info.coords.longitude);
            },
            erro => console.log(erro),
            {},
        );
    }, []);

    async function handleSelectedImage() {
        ImagePicker.showImagePicker({
            title: 'Selecionar imagem',
        }, upload => {
            if (upload.error) {
                console.log('Error');
            } else if (upload.cancelable) {
                console.log('User cancel');
            } else {
                const preview = {
                    uri: `data:image/jpeg;base64,${upload.data}`
                }

                let prefix;
                let ext;

                if (upload.fileName) {
                    [prefix, ext] = upload.fileName.split('.');
                    ext = ext.toLowerCase() === 'heic' ? 'jpg' : ext;
                } else {
                    prefix = new Date().getTime();
                    ext = 'jpg';
                }

                const images = {
                    uri: upload.uri,
                    type: upload.type,
                    name: `${prefix}.${ext}`,
                };

                setPreviwer(preview);
                setImage(images);
            }
        });
    }

    return (
        <>
            {/* <StatusBar translucent={true} backgroundColor={'transparent'} /> */}
            <View>
                <Text>Routes</Text>
                <Text>{lat} </Text>
                <Text>{lng} </Text>
                <MaterialIcons name="arrow-back" size={30} />
                <TouchableOpacity
                    style={{ width: 200, height: 200, borderStyle: 'dashed', borderWidth: 2, marginBottom:50 }}
                    onPress={() => { handleSelectedImage() }}
                >
                    {previewer == null && <Text>Selecione sua foto de perfil</Text>}
                    {previewer && <Image source={image} style={{ width: 190, height: 190 }} />}
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('Motorista');}}>
                    <Text>Mudar de Rota</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default Inicial;