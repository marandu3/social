import './App.css';

function Sidebar() {
  return (
    <div className="sidecontainer" >
      <p style={{
        backgroundColor:'black',
        margin:'5px',
        color:'rgb(185, 62, 17)',
        fontSize:'1.5em',
        borderRadius:'4px',
        paddingLeft:5,
        paddingRight:5,
      }}>SocialBoost</p><br></br><br></br>
      <ul>
        <li className='sidebarchoices'>New Order</li><br></br><br></br>
        <li className='sidebarchoices'>Services</li><br></br><br></br>
        <li className='sidebarchoices'>Orders</li><br></br><br></br>
        <li className='sidebarchoices'>Updates</li><br></br><br></br>
      </ul>
    </div>
  )
}

export default Sidebar