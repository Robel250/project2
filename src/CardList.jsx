
function cardList({cards}) {
  return (
    <div>
      

      {cards.map((card,index)=>(
        <div>
        <div className="border">
        <div className="subfolder">  <img className="" src={card.image} alt={card.title} key={index}/>
           <h1>{card.title}</h1>
     
      <p>{card.description}</p></div>
        </div>
           
        </div>
        
        
      ))}

      
    </div>
  )
}

export default cardList
