import React from 'react';
import { useState } from 'react';
import{Text,View,Button, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../styles/Styles'



export default function Calc(){
    const [valores, setValores] = useState({
        a: 0,
        b: 0,
        result: 0,  
    });

    const [op, setOp] = useState({
        operador:'',
    });

  const handleInputChange = (nome, valor) => {
      setValores({
      ...valores, [nome]: valor
      })}

    const handleInputChange2 = (nome, valor) => {
      setOp({
      ...op, [nome]: valor
      })}

    return(
        // Display
        <View style={styles.body}>
            <View style={styles.visor}>
                <Text style={styles.textVisor}>{valores.a}</Text>
                <Text style={styles.textVisor}>{op.operador}</Text>
                <Text style={styles.textVisor}>{valores.b}</Text>
                <Text style={styles.textVisor}>{valores.result}</Text>
            </View>
{/* Campos */}
            <View>
                <TextInput style={styles.inputNum}
                    placeholder='Valor A'
                    keyboardType='numeric'
                    onChangeText={
                        (valor) => handleInputChange('a', Number(valor))
                    }
                />
                <TextInput style={styles.inputNum}
                    placeholder='Valor B'
                    keyboardType='numeric'
                    onChangeText={
                        (valor) => handleInputChange('b', Number(valor))
                    }
                 />
            </View>
{/* Buttons */}
            <View style={styles.numop}>
                <TouchableOpacity style={
                        styles.button
                    }
                        onPress={() => {
                            handleInputChange('result', (valores.a * valores.b))
                            handleInputChange2('operador', 'x')
                        }}
                    ><Text
                            style={
                                styles.textButton
                            }
                        >X
                        </Text>
                    </TouchableOpacity>
                <TouchableOpacity style={
                        styles.button
                    }
                        onPress={() => {
                            handleInputChange('result', (valores.a / valores.b)),
                            handleInputChange2('operador', '/')
                        }}
                    >
                        <Text
                            style={
                                styles.textButton
                            }
                        >/
                        </Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.numop}>
                <TouchableOpacity style={
                        styles.button
                    }
                        onPress={() =>{
                            handleInputChange('result', (valores.a + valores.b)),
                            handleInputChange2('operador', '+')
                        }}
                    >
                        <Text
                            style={
                                styles.textButton
                            }
                        >+
                        </Text>
                    </TouchableOpacity>
                <TouchableOpacity style={
                        styles.button
                    }
                        onPress={() =>{
                            handleInputChange('result', (valores.a - valores.b)),
                            handleInputChange2('operador', '-')
                        }}
                    >
                        <Text
                            style={
                                styles.textButton
                            }
                        >-
                        </Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.numop}>
                <TouchableOpacity style={
                        styles.button
                    }
                        onPress={() =>{
                            handleInputChange('result', (valores.a % valores.b)),
                            handleInputChange2('operador', '-')
                        }}
                    >
                        <Text
                            style={
                                styles.textButton
                            }
                        >%
                        </Text>
                    </TouchableOpacity>
                <TouchableOpacity style={
                        styles.button
                    }
                        onPress={() =>{
                            handleInputChange('result', Math.pow(valores.a,valores.b)),
                            handleInputChange2('operador', '-')
                        }}
                    >
                        <Text
                            style={
                                styles.textButton
                            }
                        >^
                        </Text>
                    </TouchableOpacity>
            </View>
            <View style={
                styles.numop
            }>
                <TouchableOpacity style={
                    styles.button
                }>
                    <Text style={
                        styles.textButton
                    }
                        onPress={
                            () => setValores({a:"",b:"",result:""})
                        }
                    >C</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}