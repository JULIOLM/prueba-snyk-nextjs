const fs = require('fs');

// 1. HARDCODED SECRET (Secreto expuesto)
// Snyk Code debería detectar que estás guardando credenciales en texto plano.
const AWS_SECRET_KEY = "AKIAIOSFODNN7EXAMPLE-SUPER-SECRET-KEY";

export function leerArchivoInseguro(req, res) {
    const userFolder = req.query.folder;

    // 2. PATH TRAVERSAL / ARBITRARY FILE READ
    // El usuario podría pasar algo como "../../../etc/passwd" y leer archivos del sistema.
    // Snyk Code detecta que 'userFolder' no está sanitizada antes de usar fs.readFileSync.
    const data = fs.readFileSync("/var/www/uploads/" + userFolder);
    
    return res.status(200).json({ content: data });
}
