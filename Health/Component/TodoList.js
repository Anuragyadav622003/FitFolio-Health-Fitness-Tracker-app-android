import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';



const TodoList = () => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [tasks, setTasks] = useState([]);
  const [dueTime,setDueTime] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  useEffect(() => {
     fetchData();
  }, []);
  useEffect(() => {
    // Initialize dueTime with current time in AM/PM format
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
    setDueTime(formattedTime);
  }, []);

  const fetchData = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
       

        const response = await axios.get('http://10.0.2.2:3000/api/todos', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            
        });

      
        setTasks(response.data); // Assuming setTasks is a state setter function
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
};


  const handleAddTask = async () => {
    if (!task.trim()) {
      return;
    }

    try {
    
      const token  = await AsyncStorage.getItem('token');
     
      const newTask = { task, date, dueTime};
     const response = await axios.post('http://10.0.2.2:3000/api/todos',  newTask,
     {
     headers:{
      Authorization:`Bearer ${token}`
     }
    });
  

    setTask('');
    setDate(new Date());
    setTime(new Date());
    fetchData()
 
    } catch (error) {
      console.error('Error adding task:', error);
      // Handle error
    }
  };

  const handleRemoveTask = async (id) => {
    try {
      // Optimistically remove the task from the UI
      setTasks(prevTasks => prevTasks.filter(task => task._id !== id));
         const token = await AsyncStorage.getItem('token');
         console.log(token)
      // Send request to delete the task from the backend
      await axios.delete('http://10.0.2.2:3000/api/todos', {
        data: { id }, // Send the task ID in the request body
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    } catch (error) {
      console.error('Error removing task:', error);
      // If an error occurs, revert the task removal in the UI
      setTasks(prevTasks => [...prevTasks, tasks.find(task => task._id === id)]);
    }
  };
  


  const handleDateChange = (_, selectedDate) => {
    setShowDatePicker(false);
    setDate(selectedDate);
    console.log(date)
  };

  const handleTimeChange = (_, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime !== undefined && selectedTime !== null) {
      const formattedTime = selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
      setDueTime(formattedTime);
      setTime(selectedTime);
    }
  };

  const renderTaskItem = ({ item }) => (
    <View style={styles.card}>
      <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
        <Text style={{fontSize:17}}>{item.dueTime}</Text>
        <Text style={{fontSize:17}}>{item.dueDate}</Text>
      </View>
      <View>
        <Text style={{fontSize:16}}>{item.task}</Text>
        <Text style={{ color: 'red',fontSize:17 }}  onPress={() => handleRemoveTask(item._id)}>Delete</Text>
      </View>
     
    </View>
  );


  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do List </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter task"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity onPress={handleAddTask} style={styles.addButton}>
          <Entypo name='plus' style={styles.plus} />
        </TouchableOpacity>
      </View>

      {showDatePicker && (
        <DateTimePicker value={date} mode="date" display="default" onChange={handleDateChange} />
      )}

      {showTimePicker && (
        <DateTimePicker value={time} mode="time" is24Hour={true} display="default" onChange={handleTimeChange} />
      )}

      <View style={styles.dateAndTimeButtons}>
        <TouchableOpacity style={styles.button} onPress={() => setShowDatePicker(true)}>
          <Entypo name='calendar' size={20} />
          <Text>Due Date</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setShowTimePicker(true)}>
          <MaterialIcons name='alarm' size={20} />
          <Text>Due Time</Text>
        </TouchableOpacity>
      </View>

     <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        style={styles.list}
        ListEmptyComponent={<Image source={require('../assets/calendar.png')} style={styles.emptyImage} />}
      /> 
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    color: 'black',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  addButton: {
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    fontSize: 24,
    color: 'white',
  },
  dateAndTimeButtons: {
    flexDirection: 'row',
    gap:10,
    marginBottom: 20,
    marginTop:10
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: '#ccc',
  },
  
  emptyImage: {
    width: '100%',
    height: 300,
    marginTop: '30%',
  },
  card: {
       flex:1,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    marginHorizontal: 10,
    marginVertical: 6,
    padding: 10,
  },
});

export default TodoList;
