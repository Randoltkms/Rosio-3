# Script para crear fotos placeholder
for ($i = 1; $i -le 8; $i++) {
    $svgContent = @"
<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ff69b4"/>
  <text x="50%" y="40%" font-family="Arial" font-size="28" fill="white" text-anchor="middle" dy=".3em">
    Foto $i
  </text>
  <text x="50%" y="60%" font-family="Arial" font-size="16" fill="white" text-anchor="middle" dy=".3em">
    Reemplaza con tu imagen
  </text>
</svg>
"@
    $svgContent | Set-Content "d:\ReactProyec\Rocio\star-girl-card\public\foto$i.svg"
    Write-Host "Creado foto$i.svg"
}
