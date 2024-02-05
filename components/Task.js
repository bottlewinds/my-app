import React, {useState}from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Task = (props) => {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleCompleteTask = () => {
        setIsCompleted(!isCompleted);}

    return(
        <View style={isCompleted ? style.completedCard : style.card}>
            <View style={style.itemLeft}>
                <TouchableOpacity style={isCompleted ? style.completedSquare : style.square} onPress={handleCompleteTask}></TouchableOpacity>
                <View style={style.texto}>
                    <Text style={isCompleted ? style.completedTaskText : style.tittleTask}>{props.text}</Text>
                    <Text style={isCompleted ? style.completedDescTask : style.descTask}>{props.text2}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={props.onDelete} >
                <View style={style.itemRight}>
                        <Image source={require('../assets/delete.png')} />
                </View>
            </TouchableOpacity>
        </View>

    )
}

export default Task;

const style=StyleSheet.create({

    completedCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#27314A',
        padding: 18,
        borderRadius: 4,
        marginHorizontal:24,
        marginBottom:16,
        opacity: 0.6,
      },
    card:{
        backgroundColor:'#27314A',
        borderRadius:4,
        padding:18,
        marginHorizontal:24,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:16,
    },

    itemLeft:{
        flexDirection: 'row',
        alignItems:'center',
        flexWrap: 'wrap',

    },

    itemRight:{
        justifyContent:'center',


    },
    completedSquare: {
        width: 20,
        height: 20,
        backgroundColor: '#4F5E85',
        marginHorizontal:12,
        borderRadius: 4,
      },
    square:{
        borderWidth:1,
        borderRadius:2,
        borderColor:'#6C7CA3',
        marginHorizontal:12,
        height:20,
        width:20,
    },

    texto:{
        marginLeft:12,
        maxWidth: '80%',
    },

    completedTaskText: {
        color: '#6C7CA3',
        textDecorationLine: 'line-through', 
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom:3,
      },
   
    tittleTask:{
        fontSize:16,
        fontWeight:'bold',
        color:'white',
        marginBottom:3,
    },
    descTask:{
        color:'#6C7CA3',

    },

    completedDescTask:{
        color:'#6C7CA3',
        textDecorationLine: 'line-through',
    }

})