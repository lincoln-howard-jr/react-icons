import { createTheme, IconProps } from 'react-icons'
import './App.css'
import { useState } from 'react'

type Icon = React.ComponentType<IconProps>;
type IconDict = Record<string, Icon>;

function RenderIconDict({ Icons, prefix }: { Icons: Record<string, Icon | IconDict>, prefix?: string }) {
  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(`${text}`);
  }
  return (
    <>
      {
        Object.keys(Icons).map((iconName) => {
          const Icon = Icons[iconName];
          if (typeof Icon === 'object') {
            return <RenderIconDict key={iconName} Icons={Icon} prefix={`${prefix || ''}${iconName}.`} />
          }
          return (
            <div key={iconName} className="icon-item" onClick={() => copyToClipboard(`${prefix || ''}${iconName}`)}>
              <Icon className="icon-svg" />
            </div>
          )
        })
      }
    </>
  )
}

// should preview the icons
function App() {
  const [iconTheme, setTheme] = useState<IconProps>({ color: 'black', fill: false, animateOnHover: true });
  const [Icons, setIcons] = useState(createTheme({ color: 'black', fill: false, animateOnHover: true }));
  return (
    <>
      <h1>Icons</h1>
      <h2>Click on an icon to copy its name to the clipboard</h2>
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
        <br/>
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
        <br/>
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
        <br/>
        <label htmlFor="animationDuration" style={{ marginLeft: '1em' }}>
          Animation Duration:
          <input
            id="animationDuration"
            type="number"
            min="0"
            value={Number(iconTheme.animationDuration)}
            onChange={(e) => {
              const newDuration = parseFloat(e.target.value);
              setTheme((prev) => ({ ...prev, animationDuration: newDuration }));
              setIcons(createTheme({ ...iconTheme, animationDuration: newDuration }));
            }}
            style={{ marginLeft: '0.5em' }}
          />
        </label>
      </section>
      <div id="icons-container">
        <RenderIconDict Icons={Icons} />
      </div>
    </>
  )
}

export default App
