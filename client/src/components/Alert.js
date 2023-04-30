import { BsInfoCircleFill } from 'react-icons/bs'


const iconStyle = {
    marginRight: "10px"
}

const Alert = (props) => {
  return (
    <>
        <div className='mt-3 alert alert-info d-flex justify-content-center align-items-center'>
            <BsInfoCircleFill style={iconStyle} /> {props.text}</div>
    </>
  )
}
export default Alert