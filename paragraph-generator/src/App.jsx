import { useState } from "react";

const App = () =>{
  const [inputValue, setInputValue] =useState();
  const [paragraph, setParagraph] = useState("");
  function generateRandomWord() {
    const prefixes = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Seriko", "Perino" ];
    const suffixes = ["", "consectetur", "adipiscing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua"];
  
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  
    return randomPrefix + randomSuffix;
  }
  
  function generateParagraph() {
    let paragraph = "";
    for (let i = 0; i < inputValue; i++) {
      paragraph += generateRandomWord() + " ";
    }
  
    setParagraph(paragraph.trim());
  }
  
  const copyToClipboard =() =>{
    const textarea = document.createElement("textarea");
    textarea.value = paragraph;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
  
  return (
    <div className="flex flex-col items-center w-full mt-2">
      <h1 className="font-bold text-xl">Paragraph Generator</h1>
      <div className="flex items-center justify-center mt-10 w-full">
        <input type="text" className="border-2 border-black-200 w-[50%]" placeholder="Enter number of words" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button className="p-1 bg-black text-white rounded-sm ml-2" onClick={() => generateParagraph()}>Generate</button>
      </div>
      {paragraph !=="" ? <div className="mt-5 w-[50%] h-[60vh] overflow-y-auto text-justify">
          <div className="flex justify-end sticky top-0"><button className="border-2 px-2" onClick={()=>copyToClipboard()}>Copy</button></div>
          <div>
          {paragraph}
          </div>
        </div> : <p>Empty paragraph</p>
        }
    </div>
  )
}

export default App;