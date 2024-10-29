# Variables for image and container names
$imageName = "my-web-app"
$imageTag = "latest"
$containerName = "my-web-app-container"

# Build the Docker image
docker build --no-cache --progress=plain -t "${imageName}:${imageTag}" .

# Stop and remove the container if it's running
$containerId = docker ps -q --filter "name=$containerName"
if ($containerId) {
    docker stop $containerId
    docker rm $containerId
}

# Start a new container from the image
docker rm -f $containerName
docker run -d -p 8080:80 --name $containerName "${imageName}:${imageTag}"
