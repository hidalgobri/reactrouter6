### Generalidades
- App.js siempre permanece, según el path llama a un archivo como un pedazo y lo introduce en el app.js
- Como App.js permanece, ahí se establecen las rutas (path). El path y el componente al que llegaré si voy por ese path. En los otros archivos no debo definir las rutas, solo los paths
- su usa /**:** cuando quiero mandar algún parámetro
- \<Link> es como \<a>
- \<Link> y \<NavLink> son lo mismo, pero Navlink tiene una variable que me permite saber si está activo (si el usuario está actualmente ahí). Sabiendo eso, puedo mandarle un estilo

### Nested routes
Sin nested routes
```
    <Route path="/books" element={<BookList/>}/>
    <Route path="/books/:id" element={<Book/>}/>
    <Route path="/books/new" element={<NewBook/>}/>
``` 
Con nested routes
```
    <Route path="/books">
        <Route index element={<BookList/>}/>
        <Route path=":id" element={<Book/>}/>
        <Route path="new" element={<NewBook/>}/>
    </Route>
```
- puedo tener una ruta que que vaya a dos componentes distintos: a) un menu que quiero que siempre aparezca b) otra componente. Para que a) se quede quieto, y yo pueda ver b), entonces pongo en a) \<Outlet/>. En el caso de abajo, `<BookLayout/>` tiene el outlet
```
    <Route path="/books" element={<BookLayout/>}>
        <Route index element={<BookList/>}/>
        <Route path=":id" element={<Book/>}/>
        <Route path="new" element={<NewBook/>}/>
    </Route>
```
- rutas que me llevan al mismo elemento pero no tienen el mismo path

### Atributos de link
- Link también tiene un atributo replace, este hace que retroceda saltándose la última página. Puede ser útil cuando se hace login
- reloadDocument, carga de nuevo la pagina
- state, pasa información sin que se vea en el link

### Highlights
1. Pasar datos usando state (no se muestran los datos en la url)
2. Mostrar página de error y redirigir a la principal
3. usar useSearchParams para pasar datos por la url