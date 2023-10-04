// routes/routes.go
package routes

import (
	"crud-app/db"

	"github.com/gin-gonic/gin"
)

func InitRoutes(router *gin.Engine) {
	// Initialize database connection
	db.InitDB()

	// Define API routes
	api := router.Group("/api")
	{
		api.GET("/items", GetAllItems)
		api.GET("/items/:id", GetItem)
		api.POST("/items", CreateItem)
		api.PUT("/items/:id", UpdateItem)
		api.DELETE("/items/:id", DeleteItem)
	}
}
