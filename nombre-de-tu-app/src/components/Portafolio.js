import React from 'react';
import './Portafolio.css';


const proyectos = [
  {
    nombre: 'Biblioteca UML',
    descripcion: 'Sistema de gestión de biblioteca con UML, desarrollado para la universidad. Incluye administración de libros, usuarios y préstamos.',
    enlace: 'https://github.com/cristopher281/Biblioteca-UML',
    imagen: 'https://raw.githubusercontent.com/cristopher281/Biblioteca-UML/main/uml.png',
  },
  {
    nombre: 'Tulio Assistant',
    descripcion: 'Bot de asistencia virtual integrado en una web para la Universidad Martín Lutero, sede Ocotal. Ayuda a estudiantes y visitantes.',
    enlace: 'https://github.com/DanildZambrana/TulioAssistant',
    imagen: 'https://avatars.githubusercontent.com/u/151073073?s=200&v=4',
  },
  {
    nombre: 'Portafolio Web Personal',
    descripcion: 'Mi portafolio profesional con proyectos, habilidades y experiencia en desarrollo web.',
    enlace: 'https://github.com/cristopher281/Portafolio-Web',
    imagen: 'https://raw.githubusercontent.com/cristopher281/Portafolio-Web/main/preview.png',
  },
];

const clientes = [
  {
    nombre: 'Empresa XYZ',
    trabajo: 'Sistema de ventas personalizado',
    comentario: 'Excelente trabajo, superó nuestras expectativas y el soporte fue de calidad.',
    estrellas: 5,
  },
  {
    nombre: 'Universidad ML Ocotal',
    trabajo: 'Bot de asistencia virtual',
    comentario: 'El bot facilita la atención a estudiantes y visitantes. Muy satisfechos.',
    estrellas: 4,
  },
];

function Estrellas({ cantidad }) {
  return (
    <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>
      {'★'.repeat(cantidad)}{'☆'.repeat(5 - cantidad)}
    </span>
  );
}


const Portafolio = () => (
  <section className="portafolio-section">
    <h2 style={{fontSize:'2.5rem', fontWeight:'700', letterSpacing:'2px', marginBottom:'2rem', color:'#7f9cf5'}}>Portafolio</h2>
    <div className="portafolio-proyectos" style={{display:'flex', flexWrap:'wrap', gap:'2rem', justifyContent:'center', marginBottom:'3rem'}}>
      {proyectos.map((proy, idx) => (
        <a key={idx} href={proy.enlace} target="_blank" rel="noopener noreferrer" className="portafolio-card" style={{width:'340px', minHeight:'420px', background:'rgba(34,42,61,0.55)', border:'2px solid #7f9cf544', boxShadow:'0 8px 32px #7f9cf522', borderRadius:'24px', display:'flex', flexDirection:'column', alignItems:'center', textDecoration:'none', color:'#eaf0fa', transition:'transform 0.4s cubic-bezier(.68,-0.55,.27,1.55)', position:'relative', overflow:'hidden'}}>
          <img src={proy.imagen} alt={proy.nombre} style={{width:'80%', height:'180px', objectFit:'cover', borderRadius:'16px', margin:'1.2rem 0'}} />
          <h3 style={{fontWeight:'700', fontSize:'1.3rem', color:'#7f9cf5', marginBottom:'0.7rem'}}>{proy.nombre}</h3>
          <p style={{fontSize:'1rem', marginBottom:'1.2rem', textAlign:'center'}}>{proy.descripcion}</p>
          <span style={{marginTop:'auto', fontWeight:'600', color:'#7f9cf5'}}>Ver en GitHub</span>
        </a>
      ))}
    </div>
    <div className="testimonios" style={{marginBottom:'2rem'}}>
      <h3 style={{marginBottom:'1rem', fontWeight:'600', letterSpacing:'1px', color:'#7f9cf5'}}>Testimonios de Clientes</h3>
      {clientes.map((cli, idx) => (
        <div key={idx} className="testimonio-card" style={{background:'rgba(127,156,245,0.08)', borderRadius:'14px', padding:'1.2rem', marginBottom:'1rem', boxShadow:'0 2px 12px #7f9cf522', display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
          <span style={{fontWeight:'700', color:'#7f9cf5'}}>{cli.nombre}</span>
          <span style={{fontWeight:'500', color:'#eaf0fa', marginBottom:'0.5rem'}}>{cli.trabajo}</span>
          <p style={{fontStyle:'italic', marginBottom:'0.5rem'}}>{cli.comentario}</p>
          <span style={{color:'#FFD700', fontSize:'1.2rem'}}>{'★'.repeat(cli.estrellas)}{'☆'.repeat(5-cli.estrellas)}</span>
        </div>
      ))}
    </div>
    <form className="calificacion-form" style={{marginTop:'2rem', background:'rgba(34,42,61,0.25)', borderRadius:'16px', padding:'1.2rem', boxShadow:'0 2px 12px #7f9cf522', display:'flex', flexDirection:'column', alignItems:'center', maxWidth:'400px', margin:'0 auto'}}>
      <h4 style={{marginBottom:'1rem', fontWeight:'600', color:'#7f9cf5'}}>Califica nuestro trabajo</h4>
      <label htmlFor="nombre" style={{alignSelf:'flex-start'}}>Tu nombre:</label>
      <input type="text" id="nombre" name="nombre" required style={{width:'100%', marginBottom:'0.7rem'}} />
      <label htmlFor="estrellas" style={{alignSelf:'flex-start'}}>Estrellas:</label>
      <select id="estrellas" name="estrellas" required style={{width:'100%', marginBottom:'0.7rem'}}>
        <option value="">Selecciona</option>
        <option value="1">1 ⭐</option>
        <option value="2">2 ⭐⭐</option>
        <option value="3">3 ⭐⭐⭐</option>
        <option value="4">4 ⭐⭐⭐⭐</option>
        <option value="5">5 ⭐⭐⭐⭐⭐</option>
      </select>
      <label htmlFor="comentario" style={{alignSelf:'flex-start'}}>Comentario:</label>
      <textarea id="comentario" name="comentario" rows="2" required style={{width:'100%', marginBottom:'0.7rem'}}></textarea>
      <button type="submit" style={{background:'#7f9cf5', color:'#222a3d', fontWeight:'600', borderRadius:'8px', padding:'0.7rem 1.2rem', marginTop:'0.5rem'}}>Enviar</button>
    </form>
  </section>
);

export default Portafolio;
