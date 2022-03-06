const Block = ({
  blockNumber,
  heading,
  blockId,
  children
}) => {

  return (
    <div className="blockStyle" id={blockId} >
      <h2>
        <span className="blockNumber" >
          {blockNumber}
        </span>
        <span className="blockHeading" >{heading}</span>
      </h2>

      {children}
    </div>
  )
}

export default Block;