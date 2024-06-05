   "use client";

   import { useState } from "react";

   interface TaskFormProps {
     onValid: (data: any) => Promise<void>;
   }

   const TaskForm: React.FC<TaskFormProps> = ({ onValid }) => {
     const [title, setTitle] = useState("");
     const [description, setDescription] = useState("");
     const [body, setBody] = useState("");

     const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      const data = {
        title,
        description,
        body,
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
         <textarea
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
         <button type="submit">Submit</button>
       </form>
     );
   };

   export default TaskForm;