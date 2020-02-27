echo "Borrando directorios viejos..."
rm -rf dist
rm -rf lib

echo "Creando archivo binario..."
npm run build

echo "Creando archivo jar..."
mkdir -p lib/src/main/resources
cp -r dist lib/src/main/resources
cp pom.xml lib

echo "Copiando a Nexus..."
# mvn deploy

