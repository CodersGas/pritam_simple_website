const Block = ({
  blockNumber,
  heading,
  children
}) => {

  return (
    <div className="blockStyle" >
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