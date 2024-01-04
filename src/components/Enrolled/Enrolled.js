
import './Enrolled.css'


const Enrolled = () => {
    
    return (
        <>
            <div className="Enrolled" id="Enrolled">
                <img src={require(`../../assets/matricula1.jpg`)} alt="img-enrolled" className="img-enrolled"/>
                <img src={require(`../../assets/matricula2.jpg`)} alt="img-enrolled" className="img-enrolled"/>
                <img src={require(`../../assets/matricula3.jpg`)} alt="img-enrolled" className="img-enrolled"/>
            </div>
        </>
    );
}


export default Enrolled; 