import IPasos from "../Interfaces/IPasos"

const Pasos = () => {
    const pasosArray: IPasos = {
        paso1 : '1', 
        paso2 : '2', 
        paso3 : '3', 
        paso4 : '4', 
        paso5 : '5', 
    }
    const currentPath:string = window.location.pathname
    const index:string = currentPath.substring(currentPath.lastIndexOf('/') + 1)

    return (
        <div className='pasos'>
            {
                Object.keys(pasosArray).map( (p) => {
                    if(p === index) { 
                        return ( <div className='link paso-actual'>{pasosArray[p as keyof typeof pasosArray]}</div>)
                    } else { 
                        return ( <div className='link paso-no-actual'>{pasosArray[p as keyof typeof pasosArray]}</div>)
                    }
                })
            }
        </div>
    )
}

export default Pasos