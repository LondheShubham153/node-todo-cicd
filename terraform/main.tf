resource "docker_image" "todo_image" {
	name = "trainwithshubham/todo-app-node:latest"
	keep_locally = false
}

resource "docker_container" "todo_container" {
	image = docker_image.todo_image.name
	name = "todoapp-container"
	ports {
		internal = 8000
		external = 8000
	}

	depends_on = [
		docker_image.todo_image
	]
	
}
