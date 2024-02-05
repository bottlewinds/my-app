import React, {useState} from 'react'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from "uuid";
import {StyleSheet, Keyboard, Image, View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import Task from './components/Task';


const App = () => {

 {/* useState Section */}
 const [taskName, setTask] = useState();
 const [taskDesc, setTaskDesc] = useState();
{/* Arreglo de Tareas */}

const [taskList, setTaskList] = useState([]);

 const handleAddTask = () => {
  Keyboard.dismiss();
  const newTask = { id: uuidv4(), title: taskName, description: taskDesc, isCompleted: false};
    setTaskList([...taskList, newTask]);
    setTask('');
    setTaskDesc('');
   
 }

 {/* Eliminar Tareas */}

 const handleDeleteTask = (id) => setTaskList(taskList.filter((task) => task.id !== id));

 const renderItem = ({ item }) => (
    <Task
      key={item.id.toString()}
      text={item.title}
      text2={item.description}
      isCompleted={item.isCompleted}
      onDelete={() => handleDeleteTask(item.id)}
    />
  );

  return(
    <View style={style.container}>
      {/* Section Tittle */}
      <View style={style.header}>
        <Image style={style.imagen} source={require('./assets/profile.png')} />
        <Text style={style.texto}>Today's Task</Text>
      </View>
      {/* Section Input Task */}
      <View style={style.inputTask}>
        <TextInput style={style.taskTitle} placeholder='Write ur task' placeholderTextColor={'#6C7CA3'} value={taskName} onChangeText={text => setTask(text)} />
        <TextInput style={style.taskDescription} placeholder= 'Write ur description' placeholderTextColor={'#6C7CA3'} value={taskDesc} onChangeText={text => setTaskDesc(text)} />
        <TouchableOpacity style={style.botonSave} onPress={() => handleAddTask()} >
          <Text style={style.botonText}>Save</Text>
        </TouchableOpacity>
      </View>
      {/* Section Task List */} 
      <View style={{flex:1}}>
        {/* Task List */}
        <Text style={style.todoTittle}>TO DO</Text>
        {
          taskList && (
                <FlatList
                  data={taskList}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id.toString()}
                />
          )
        }
      </View>
    </View>
  )
}

export default App

const style= StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#151A28',
  },
  header:{
    marginTop:80,
    alignItems: 'center',
  },
  imagen:{
    height:80,
    width:80,
    marginBottom: 14,
  },
  texto:{
    color:'white',
    fontSize:20,
    fontWeight: 'bold',
  },
  inputTask:{
    marginTop:20,
    alignItems:'center',
    gap:16,
  },
  taskTitle:{
    backgroundColor:'#27314A',
    color:'white',
    fontSize:16,
    height:38,
    width:342, 
    borderRadius:6,
    paddingLeft:22,
  },
  taskDescription:{
    backgroundColor:'#27314A',
    color:'white',
    fontSize:16,
    height:38,
    width:342,
    borderRadius:6,
    paddingLeft:22,
  },
  botonSave:{
    backgroundColor:'#5230B4',
    height:42,
    width:342,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius:6,
  },
  botonText:{
    color:'white',
    fontSize:16,
  },
  todoTittle:{
    color:'#6C7CA3',
    marginLeft:24,
    marginTop:38,
    marginBottom:12,
  }
})