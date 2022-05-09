import React, { useState } from 'react'
import { 
    View, 
    Text, 
    TextInput,
    Image,
    StatusBar } from 'react-native'


import { ButtonIcon } from '../../components/ButtonIcon'; 
import IlustrationImg from '../../assets/illustration.png'
import { styles } from './styles';

export function SignIn(){

    /*Um estado criada para armazenar o valor do input*/
    const [text, setText] = useState('');


    return(
        <View style={styles.container}>
            <StatusBar 
            barStyle="light-content"
            backgroundColor="transparent"
            translucent/>

            <Image source={IlustrationImg} 
            style={styles.image}
            resizeMode="stretch"/>

            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize seus jogos {`\n`}
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar jogos
                </Text>

                <ButtonIcon 
                    title="Entrar com Discord"
                    activeOpacity={0.7}/>
            </View>
        </View>
    );
}