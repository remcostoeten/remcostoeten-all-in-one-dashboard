   // src/app/[locale]/(unauth)/tasks/_components/TaskForm.tsx
   "use client";

   import { useState } from "react";

   interface TaskFormProps {
     onValid: (data: any) => Promise<void>;
   }

   const TaskForm: React.FC<TaskFormProps> = ({ onValid }) => {
     const [title, setTitle] = useState("");
     const [description, setDescription] = useState("");
     const [body, setBody] = useState("");
     const [username, setUsername] = useState("");

     const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      const data = {
        title,
        description,
        body,
        username,
      };
      console.log("Submitting data:", data); // Add this line
      await onValid(data);
    };

     return (
       <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
         <input
           type="text"
           value={title}
           onChange={(e) => setTitle(e.target.value)}
           placeholder="Title"
           required
         />
         <input
           type="text"
           value={description}
           onChange={(e) => setDescription(e.target.value)}
           placeholder="Description"
         />
         <input
           type="text"
           value={body}
           onChange={(e) => setBody(e.target.value)}
           placeholder="Body"
           required
         />
         <input
           type="text"
           value={username}
           onChange={(e) => setUsername(e.target.value)}
           placeholder="Username"
           required
         />
         <button type="submit">Submit</button>
       </form>
     );
   };

   export default TaskForm;