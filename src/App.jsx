import { useState } from "react";
import ChapterCards from "./components/ChapterCards.jsx"
import Title from "./components/Title.jsx"

import Button from '@mui/material/Button';



function App() {


  const [showTitle, setShowTitle] = useState(false);




  function handleButtonClick() {
    setShowTitle(!showTitle);
  }


  return (
    <div>

      <Button
        variant="contained"
        color="success"
        onClick={() => handleButtonClick()}
      >
        Click here!
      </Button>


      {
        showTitle === true ? <Title /> : null
      }


      <ChapterCards />
    </div>
  )
}

export default App;