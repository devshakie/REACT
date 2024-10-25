import "./shoeImage.css";
type imageProps = {
    url: string
}

const ShoeImageComponent = ({url}:imageProps) => {
  return (
    <div className="shoe-image-wrapper">
      <img src={url} className='shoe-image'/>
    </div>
  )
}

export default ShoeImageComponent
