
import useRequest from '../../hooks/useRequest';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const httpData = useRequest()
  const { isLoading, error, sendRequest: sendTaskRequest } = httpData

  const createTask = (taskText,taskData) => {

    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
    
  }



  const enterTaskHandler = async (taskText) => {
    sendTaskRequest({
      url: 'https://react-practice-a92c2-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: { text: taskText }
    },createTask.bind(null,taskText))

  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
