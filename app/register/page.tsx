import React from "react";
import TextField from "@/components/TextField";

const page = () => {
  return (
    <div className="flex flex-col bg-gray-900 w-screen h-screen justify-center items-center text-white">
        <form className="flex flex-col gap-4 w-1/6" action="">
          <TextField label="ID NO"/>
          <TextField label="Lastname"/>
          <TextField label="Firstname"/>
          <TextField label="Middlename"/>
          <TextField label="Course"/>
          <TextField label="Year Level"/>
          <TextField label="Email Address"/>
          <TextField label="Password"/>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </form>
    </div>
  );
};

export default page;
