import React, { useState } from 'react'
import { 
    View, 
    Text, 
    TextInput,
    Image } from 'react-native'


import { ButtonIcon } from '../../components/ButtonIcon'; 
import IlustrationImg from '../../assets/illustration.png'
import { styles } from './styles';

export function SignIn(){

    // Um estado criada para armazenar o valor do input
    const [text, setText] = useState('');


    return(
        <View style={styles.container}>

            <Image source={IlustrationImg} 
            style={styles.image}
            resizeMode="stretch"/>

            <View style={styles.content}>
                <Text style={styles.title}>
                    Have a better view {`\n`}
                    of you gameplays.
                </Text>

                <Text style={styles.subtitle}>
                    Make friends and create {`\n`}
                    group with them.
                </Text>

                <ButtonIcon 
                    title="Sign In with Discord"
                    activeOpacity={0.7}/>
            </View>
        </View>
    );
}