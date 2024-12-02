import './App.css';

function Contentsect() {
  return (
    <div className="contentsect">
        <div className='headribbon'>
            <p className='headribboncontent'>Account</p>
            <p className='headribboncontent'>Logout</p>
        </div><br></br><br></br>

        <div className='searchfield'>
            <label htmlFor="search" >🔍</label>
            <input type="search" id="search" placeholder='Search here...' style={{
                width:"95%",
                backgroundColor:'black',
                color:'white',
                border:'none',
            }}></input><br></br></div>

        <div className='formcontainer'>
            <form className="formin" style={{color:'white'}}>
                <label htmlFor="Category">Category:</label>
                <input type="" style={{width:'96%'}}></input><br></br><br></br>

                <label htmlFor="Service:">Service:</label>
                <input type="" style={{width:'95.5%'}}></input><br></br><br></br>

                <label htmlFor="Descriptions:">Descriptions:</label><br></br>
                <input type="" style={{width:'94%', transform:'translateX(10px)'}}></input><br></br><br></br>

                <label htmlFor="Link:">Link:</label>
                <input type="" style={{width:'95.5%'}}></input><br></br><br></br>

                <div style={{
                    display:'flex',
                    justifyContent:'space-between',
                    
                }}>
                    <div>
                        <label htmlFor="Quality:">Quality:</label><br></br>
                        <input type="" style={{width:'140px',transform:'translateX(30px)' }}></input>
                    </div>
                    
                    <div style={{transform:'translateX(-30px)'}}>
                        <label htmlFor="Average time" style={{transform:'translateX(-30px)'}}>Average time:</label><br></br>
                        <input type="" style={{width:'100px',}}></input><br></br><br></br>
                    </div>
                    
                </div>
                
                <div style={{
                    display:'flex',
                    justifyContent:'space-between',
                    

                }}>

                    <div>
                        <label htmlFor="Charge">Charge:</label>
                        <input type="" style={{width:'150px'}}></input>
                    </div>
                    <div>
                        <button type="Submit" style={{
                            backgroundColor:'rgb(205, 157, 0)',
                            width:140,
                            color:'black',
                            borderRadius:'5px',
                            height:30,
                            transform:'translateX(-30px)',
                            border:'none',
                            alignSelf:'right',
                        }}>Submit Order</button>
                    </div>
                </div>
                

            </form>
        </div>
        </div>

  )
}

export default Contentsect