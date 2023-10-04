// db/models.go
package db

import "gorm.io/gorm"

type Item struct {
	gorm.Model
	Name  string
	Price float64
}
