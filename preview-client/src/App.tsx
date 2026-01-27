import { createTheme, IconProps } from 'react-icons'
import './App.css'
import { useState } from 'react'

// should preview the icons
function App() {
  const [iconTheme, setTheme] = useState<IconProps>({ color: 'black', fill: false });
  const [Icons, setIcons] = useState(createTheme({ color: 'black', fill: true }));
  return (
    <>
      <h1>Icons</h1>
      <section>
        <label htmlFor="color">Color: </label>
        <input
          id="color"
          type="color"
          value={iconTheme.color as string}
          onChange={(e) => {
            const newColor = e.target.value;
            setTheme((prev) => ({ ...prev, color: newColor }));
            setIcons(createTheme({ ...iconTheme, color: newColor }));
          }}
        />
        <label htmlFor='fillColor'>
          Fill Color:
          <input
            id="fillColor"
            type="color"
            value={iconTheme.fillColor as string || '#000000'}
            onChange={(e) => {
              const newFillColor = e.target.value;
              setTheme((prev) => ({ ...prev, fillColor: newFillColor }));
              setIcons(createTheme({ ...iconTheme, fillColor: newFillColor }));
            }}
            style={{ marginLeft: '0.5em' }}
          />
        </label>
        <label htmlFor="fill" style={{ marginLeft: '1em' }}>
          Fill:
          <input
            id="fill"
            type="checkbox"
            checked={iconTheme.fill as boolean}
            onChange={(e) => {
              const newFill = e.target.checked;
              setTheme((prev) => ({ ...prev, fill: newFill }));
              setIcons(createTheme({ ...iconTheme, fill: newFill }));
            }}
            style={{ marginLeft: '0.5em' }}
          />
        </label>
      </section>
      <div id="icons-container">
        <div>
          <h3>Pen</h3>
          <Icons.pen />
        </div>
        <div>
          <h3>Chat</h3>
          <Icons.chat />
        </div>
        <div>
          <h3>Settings</h3>
          <Icons.settings />
        </div>
        <div>
          <h3>User</h3>
          <Icons.user />
        </div>
        <div>
          <h3>Cancel</h3>
          <Icons.cancel />
        </div>
        <div>
          <h3>Book</h3>
          <Icons.book />
        </div>
        <div>
          <h3>Calendar</h3>
          <Icons.calendar />
        </div>
        <div>
          <h3>Chevron Down</h3>
          <Icons.chevronDown />
        </div>
        <div>
          <h3>Chevron Left</h3>
          <Icons.chevronLeft />
        </div>
        <div>
          <h3>Chevron Right</h3>
          <Icons.chevronRight />
        </div>
        <div>
          <h3>Chevron Up</h3>
          <Icons.chevronUp />
        </div>
        <div>
          <h3>Dash</h3>
          <Icons.dash />
        </div>
        <div>
          <h3>Dots Horizontal</h3>
          <Icons.dotsHorizontal />
        </div>
        <div>
          <h3>Dots Vertical</h3>
          <Icons.dotsVertical />
        </div>
        <div>
          <h3>Filter</h3>
          <Icons.filter />
        </div>
        <div>
          <h3>Light Bulb</h3>
          <Icons.lightBulb />
        </div>
        <div>
          <h3>Notifications</h3>
          <Icons.notifications />
        </div>
        <div>
          <h3>Plus</h3>
          <Icons.plus />
        </div>
        <div>
          <h3>Question Mark</h3>
          <Icons.questionMark />
        </div>
        <div>
          <h3>Remove</h3>
          <Icons.remove />
        </div>
        <div>
          <h3>Ruler</h3>
          <Icons.ruler />
        </div>
        <div>
          <h3>Search</h3>
          <Icons.search />
        </div>
        <div>
          <h3>Star Filled</h3>
          <Icons.starFilled />
        </div>
        <div>
          <h3>Star</h3>
          <Icons.star />
        </div>
        <div>
          <h3>Stopwatch</h3>
          <Icons.stopwatch />
        </div>
        <div>
          <h3>Submit</h3>
          <Icons.submit />
        </div>
        <div>
          <h3>Trash</h3>
          <Icons.trash />
        </div>
      </div>
    </>
  )
}

export default App
