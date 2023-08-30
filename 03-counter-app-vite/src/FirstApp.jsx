import PropTypes from 'prop-types';


// const getSaludo = (nombre) =>{
//   return `Hola ${nombre}`
// };

// const saludo = getSaludo('Rodrigo');

export const FirstApp = ({title,subtitle, name}) => {
   return(
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
   )
  ;
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

FirstApp.defaultProps = {
  title:'No hay título',
  subtitle:'No hay subtitulo',
  name:'Fernando Herrera'
}
