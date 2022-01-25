package main

import (
	"github.com/gin-gonic/gin"
	"go-slack/controllers"
	"go-slack/db"
)

func main() {
	r := gin.Default()

	db.ConnectDB()

	user := r.Group("/user")
	{
		user.GET("/", controllers.GetAllUsers) // 전체 유저 조회
		user.GET(":id", controllers.GetOneUser) // id로 유저 조회
		user.GET("/search/:name", controllers.GetOneUserByName) // name 유저 조
		user.POST("/signup", controllers.SignUp) // 회원가입
		user.POST("/signin", controllers.SignIn) // 로그인

	}
	r.Run()
}