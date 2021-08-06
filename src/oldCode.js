<form onSubmit={(e) => {
    e.preventDefault()
    setColors([...colors,color])
    setColor('')
    }}>
      <label>enter color</label>
    <input 
      type='text'
      value={color}
      onChange={(e) => {
        setColor(e.target.value)
        }} />
    <button type='submit'>Add color</button>
  </form>
      <div id='color-container'>
        {colors.map((c, i) => {
          const divStyle = {
            color: c
          }
          return (
          <div 
            key={i}
            style={divStyle}
            >{c}</div>
            )
        })}

      </div>