package main

import (
	"fmt"
	"github.com/joho/godotenv"
	"gorm.io/gorm"
	"log"
	"os"
	"github.com/gin-gonic/gin"
	"gorm.io/driver/mysql"
)

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	_, err = gorm.Open(mysql.Open(os.Getenv("DBDNS")), &gorm.Config{})
	if err != nil {
		fmt.Println("DB Connecting Error: ", err)
		return
	}

	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "hello world",
		})
	})
	r.Run()
}