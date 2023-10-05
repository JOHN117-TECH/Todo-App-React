import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ChangeEvent, FormEvent, useState } from 'react';

type Taks = {
  title: string;
  content: string;
};

const CreateTask: React.FC<{ onAdd: (note: Taks) => void }> = ({ onAdd }) => {
  const [note, setNote] = useState({ title: '', content: '' });

  function handleChange(
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event: FormEvent) {
    if (note.content === '' || note.title === '') return;

    onAdd(note);
    setNote({
      title: '',
      content: '',
    });
    event.preventDefault();
  }

  return (
    <div>
      <form action="" className="create-note">
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          id=""
          placeholder="Take a note ..."
          cols={40}
          rows={3}
          onChange={handleChange}
          value={note.content}
        />
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
};

export default CreateTask;
