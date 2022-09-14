import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

// 2. Mostrar página de error y redirigir a la principal
// cualquier ruta que no haya puesto me trae a esta pagina
//primero imprime not found y despues de un segundo me lleva a la pagina principal
//useNavigate es un hook que devuelve una funcion
//en esa funcion puede poner el path al que quiero regresar
//puedo poner el -1 para retroceder una página antes, o -2 para dos páginas antes

export default function NotFound() {
  const navigation = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigation("/");
    }, 1000);
  }, []);
  return <h1>Not found</h1>;
}
