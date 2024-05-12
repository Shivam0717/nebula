import { Audio,BallTriangle } from 'react-loader-spinner'  //npm loader spinners
import "./loading.css"

function LOADING(){
    return(
        <>
        <div className='ld'>
        <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="yellow"
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  
  />
  </div>
  </>
    )
}
export default LOADING