```javascript
   export default function Home() {
     const contenidoInseguro = "<script>alert('hackeado')</script>";
     return <div dangerouslySetInnerHTML={{ __html: contenidoInseguro }} />;
   }
