import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Pasos from '../components/Pasos'

const Wizard = ({ children }: { children: React.ReactElement }) => {
    const navigate = useNavigate()
    const childrenExist = () => {
        if(children)
            return (
                <>
                    <Pasos />
                    {children}
                </>
            )
        else
            return (
                <Button onClick={() => navigate('/paso1')}>Empezar con el formulario</Button>
            )
    }
    return(
        
        <div className='wizard'>
            <h1>Wizard</h1>
            {
                childrenExist() 
            }
        </div>
    )
}

export default Wizard