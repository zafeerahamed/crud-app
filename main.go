// main.go
package main

import (
	"crud-app/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// Connect to the database
	// ...

	// Initialize routes
	routes.InitRoutes(r)

	r.Run(":8080")
}
