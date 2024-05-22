
type Props = {
    totalScreens:number,
    currentIndex:number

}
const ScreenIndicators = (props: Props) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '10px',color:'black' }}>
      {Array.from({ length: props.totalScreens }, (_, i) => (
        <span
          key={i}
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: i === props.currentIndex ? '#000' : '#ccc',
            margin: '0 5px'
          }}
        />
      ))}
    </div>
  );


export default ScreenIndicators

